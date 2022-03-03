import { defineComponent, watchEffect } from 'vue'
import { useRoute } from "vue-router";


export default defineComponent({
  name: "Watch",
  setup () {
    const router = useRoute()
    let currentRoute = ''
    const getRouter = () => {
      console.log("router", router,router.path);
      currentRoute = router.path
    }
    watchEffect(()=>{
      console.log("🚀 ~ file: index.jsx ~ line 13 ~ getRouter ~ currentRoute", currentRoute)
    })
    console.log("watch page 环境变量 ", WEBIP, );
    return () => (
      <div class="contentCenter">
        <div onclick={getRouter}><h3>watch与computed</h3></div>
        <div>
          <h4>watchEffect</h4>
          <p>
            响应数据应用副作用，可以对数据追踪，并且依赖变更重新运行该函数。与
            <a href={WEBIP + '/#/react/Banner/Hook'} target="_blank" rel="noopener noreferrer">react</a>  副作用用法一致
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    <script setup>
    import {defineComponent,defineAsyncComponent,reactive,toRefs} from 'vue'
    export default{
      setup(){
        const count = ref(0)
        watchEffect(() => console.log(count.value))
 
        // 删除副作用 主要针对的是不在组件销毁阶段移除
        const stop = watchEffect(() => {
          /* ... */
        })

        // later
        stop()

      }
    }

    </script>
              `}
              </code>
            </pre>
          </div>
          <div>
            <p>
              和 react 一致，都会有清除副作用功能,只不过react 是通过在副作用内部return返回在销毁阶段清除副作用。
              vue3是在传入一个onInvalidate函数，在这个函数内清除，在遇到异步函数时支持 async await 。
            </p>
          </div>
          <div class="code">
            <pre>
              <code>
                {`
    watchEffect(onInvalidate => {
      const token = performAsyncOperation(id.value)
      onInvalidate(() => {
        // id has changed or watcher is stopped.
        // invalidate previously pending async operation
        token.cancel()
      })
    })     
    
    // 异步
    const data = ref(null)
    watchEffect(async onInvalidate => {
      onInvalidate(() => {
        /* ... */
      }) // 我们在Promise解析之前注册清除函数
      data.value = await fetchData(props.id)
    })
                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h4>watch</h4>
          <p>
            watch API 完全等同于组件侦听器 property。watch 需要侦听特定的数据源，并在回调函数中执行副作用。
            默认情况下，它也是惰性的，即只有当被侦听的源发生变化时才执行回调。与 watchEffect 比较，watch 允许我们：
          </p>
          <ul>
            <li>懒执行副作用；</li>
            <li>更具体地说明什么状态应该触发侦听器重新运行；</li>
            <li>访问侦听状态变化前后的值。</li>
          </ul>
          <div className="code">
            <pre>
              <code>
                {`
    // 侦听一个 getter
    const state = reactive({ count: 0 })
    watch(
      () => state.count,
      (count, prevCount) => {
        /* ... */
      }
    )

    // 直接侦听ref
    const count = ref(0)
    watch(count, (count, prevCount) => {
      /* ... */
    })     
    
    // 侦听多个数据 也可以写多个watch函数
    const firstName = ref('')
    const lastName = ref('')

    watch([firstName, lastName], (newValues, prevValues) => {
      console.log(newValues, prevValues)
    })

    watch(()=>state,(cur,pre)=>{
      console.log(cur, pre)
    })
    watch(()=>state,(cur,pre)=>{
      console.log(cur, pre)
    })

    注意多个同步更改只会触发一次侦听器。

                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h4>computed</h4>
          <p>
            computed 计算属性和之前一致，回基于响应数据的变化而变化，但是现在不是一个函数内的属性了，变成了和watch一样，可以写多个computed函数，
            支持依赖的追踪和依赖修改时响应回调。直观的了解整个变化过程。
          </p>
          <div className="code">
            <pre>
              <code>
                {`
  <script setup>
  import { ref,toRef } from 'vue'
  
  export default{
    setup(){
      const count = ref(1)
      const plusOne = computed(() => count.value + 1)
      // 或者下面方式
      const plusOne = computed({
        get: () => count.value + 1,
        set: val => {
          count.value = val - 1
        }
      })

      console.log(plusOne.value) // 2
      plusOne.value++ // error
      return {
        toRef(count),
        toRef(plusOne)
      }
    }
  }
  </script>
                `}
              </code>
            </pre>
          </div>
          <div>
            <div>
              <div>Computed 可接受一个带有 onTrack 和 onTrigger 选项的对象作为第二个参数</div>
              <ul>
                <li>onTrack 会在某个响应式 property 或 ref 作为依赖被追踪时调用。</li>
                <li>onTrigger 会在侦听回调被某个依赖的修改触发时调用。</li>
              </ul>
            </div>
            <div className="code">
              <pre>
                <code>
                  {`
  const plusOne = computed(() => count.value + 1, {
  onTrack(e) {
    // 当 count.value 作为依赖被追踪时触发
    debugger
  },
  onTrigger(e) {
    // 当 count.value 被修改时触发
    debugger
  }
})
// 访问 plusOne，应该触发 onTrack
console.log(plusOne.value)
// 修改 count.value，应该触发 onTrigger
count.value++
                `}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    )
  }
})