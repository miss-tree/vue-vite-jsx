import { defineComponent, reactive } from 'vue'
import { useRoute } from 'vue-router'
import location from "comps/location/index.vue";

export default defineComponent({
  name: 'Reactive',
  components: { location },
  setup () {
    const state = reactive({
      list: [
        { name: 'reactive', id: 'reactive' },
        { name: 'readonly', id: 'readonly' },
        { name: 'isProxy|isReactive|isReadonly', id: 'isProxy' },
        { name: 'toRaw', id: 'toRaw' },
        { name: 'markRaw', id: 'markRaw' },
        { name: 'shallowReactive', id: 'shallowReactive' },
        { name: 'shallowReadonly', id: 'shallowReadonly' },
      ]
    })
    const route = useRoute()
    // 获取所有路由 route 为当前路由代理
    console.log('route:', route.path)
    return () => (
      <div class='contentCenter'>
        <div>
          <h3>响应式API</h3>
          <p>
            作为VUE的特点双向绑定，vue2以Object.defineProperty()劫持数据变更，
            vue3使用ES6的Proxy代理劫持数据响应，在set（）方法内做数据处理，只要触发了
            这个方法就会执行内部diff计算更改视图的逻辑，达到数据响应效果。
            响应式API是常用的api，了解他们有助于日常项目开发。
          </p>
          <location list={state.list}></location>
        </div>
        <div>
          <h4 id='reactive'>reactive(obj)</h4>
          <p>
            reactive() 会深层次代理整个对象，
          </p>
          <div className="code">
            <pre>
              <code>
                {`
  const word = ref("miss-tree")
  let count = ref(0)
  const obj = reactive({
    a:"hello",
    ob:{
      msg:word
    },
    num:count
  })

  console.log(obj.ob.msg) // "miss-tree"
  console.log(obj.ob.msg === word.value) // true   
  
  count.value++
  console.log(obj.ob.num === count.value) // true  

                `}
              </code>
            </pre>
          </div>
        </div>
        <div>
          <h4 id='readonly'>readonly</h4>
          <p>
            接受一个对象 (响应式或纯对象) 或 ref 并返回原始对象的只读代理。只读代理是深层的：任何被访问的嵌套 property 也是只读的
          </p>
          <div className="code">
            <pre>
              <code>
                {`
  const original = reactive({ count: 0 })

  const copy = readonly(original)

  watchEffect(() => {
    // 用于响应性追踪
    console.log(copy.count)
  })

  // 变更 original 会触发依赖于副本的侦听器
  original.count++

  // 变更副本将失败并导致警告
  copy.count++ // 警告!
                `}
              </code>
            </pre>
          </div>
        </div>
        <div>
          <h4 id='isProxy'>isProxy|isReactive|isReadonly</h4>
          <p>
            基本都是判断是否是响应数据，返回都是bolean
          </p>
          <div className="code">
            <pre>
              <code>
                {`
  isProxy：检查对象是否是由 reactive 或 readonly 创建的 proxy。

  isReactive：检查对象是否是由 reactive 创建的响应式代理。

  isReadonly：检查对象是否是由 readonly 创建的只读代理。
                `}
              </code>
            </pre>
          </div>
        </div>
        <div>
          <h4 id='toRaw'>toRaw</h4>
          <p>
            返回 reactive 或 readonly 代理的原始对象。
          </p>
          <div className="code">
            <pre>
              <code>
                {`
  const foo = {}
  const reactiveFoo = reactive(foo)

  console.log(toRaw(reactiveFoo) === foo) // true
                `}
              </code>
            </pre>
          </div>
        </div>
        <div>
          <h4 id='markRaw'>markRaw</h4>
          <p>
            标记一个对象，使其永远不会转换为 proxy。返回对象本身。
          </p>
          <div className="code">
            <pre>
              <code>
                {`
  const foo = markRaw({})
  console.log(isReactive(reactive(foo))) // false

  // 嵌套在其他响应式对象中时也可以使用
  const bar = reactive({ foo })
  console.log(isReactive(bar.foo)) // false

  const foo = markRaw({
    nested: {}
  })

  const bar = reactive({
    // 虽然  foo  被标记为原始，但 foo.nested 不是。
                  nested: foo.nested
  })

  console.log(foo.nested === bar.nested) // false
                `}
              </code>
            </pre>
          </div>
        </div>
        <div>
          <h4 id='shallowReactive'>shallowReactive</h4>
          <p>
            创建一个响应式代理，它跟踪其自身 property 的响应性，但不执行嵌套对象的深层响应式转换 
          </p>
          <div className="code">
            <pre>
              <code>
                {`
  const state = shallowReactive({
    foo: 1,
    nested: {
      bar: 2
    }
  })

  // 改变 state 本身的性质是响应式的
  state.foo++
  // ...但是不转换嵌套对象
  isReactive(state.nested) // false
  state.nested.bar++ // 非响应式
                `}
              </code>
            </pre>
          </div>
        </div>
        <div>
          <h4 id='shallowReadonly'>shallowReadonly</h4>
          <p>
            创建一个 proxy，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换
          </p>
          <div className="code">
            <pre>
              <code>
                {`
  const state = shallowReadonly({
    foo: 1,
    nested: {
      bar: 2
    }
  })

  // 改变 state 本身的 property 将失败
  state.foo++
  // ...但适用于嵌套对象
  isReadonly(state.nested) // false
  state.nested.bar++ // 适用
                `}
              </code>
            </pre>
          </div>
        </div>
      </div>
    )
  }
})