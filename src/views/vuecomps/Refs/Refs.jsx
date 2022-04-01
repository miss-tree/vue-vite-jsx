import { defineComponent, reactive } from 'vue'
import { useRoute } from 'vue-router'
import location from "comps/location/index.vue";

export default defineComponent({
  name: 'Reactive',
  components: { location },
  setup () {
    const state = reactive({
      list: [
        { name: 'ref', id: 'ref' },
        { name: 'toRef', id: 'toRef' },
        { name: 'toRefs', id: 'toRefs' },
        // { name: 'toRaw', id: 'toRaw' },
        // { name: 'markRaw', id: 'markRaw' },
        // { name: 'shallowReactive', id: 'shallowReactive' },
        // { name: 'shallowReadonly', id: 'shallowReadonly' },
      ]
    })
    const route = useRoute()
    // 获取所有路由 route 为当前路由代理
    console.log('route:', route.path)
    return () => (
      <div class='contentCenter'>
        <div>
          <h3>Refs</h3>
          <p>
            常见的refs对象包含 ref|toref|torefs|
          </p>
          <location list={state.list}></location>
        </div>
        <div>
          <h4 id='ref'>ref(obj)</h4>
          <p>
            接受一个内部值并返回一个响应式且可变的 ref 对象。ref 对象仅有一个 .value property，指向该内部值。
          </p>
          <div className="code">
            <pre>
              <code>
                {`
  const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1

                `}
              </code>
            </pre>
          </div>
        </div>
        <div>
          <h4 id='toRef'>toRef(obj,key)</h4>
          <p>
            可以用来为源响应式对象上的某个 property 新创建一个 ref。然后，ref 可以被传递，它会保持对其源 property 的响应式连接。
          </p>
          <div className="code">
            <pre>
              <code>
                {`
  const state = reactive({
    foo: 1,
    bar: 2
  })

  const fooRef = toRef(state, 'foo')

  fooRef.value++
  console.log(state.foo) // 2

  state.foo++
  console.log(fooRef.value) // 3
                `}
              </code>
            </pre>
          </div>
        </div>
        <div>
          <h4 id='toRefs'>toRefs</h4>
          <p>
            将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的 ref
          </p>
          <div className="code">
            <pre>
              <code>
                {`
  const state = reactive({
    foo: 1,
    bar: 2
  })

  const stateAsRefs = toRefs(state)
  /*
  stateAsRefs 的类型:

  {
    foo: Ref<number>,
    bar: Ref<number>
  }
  */

  // ref 和原始 property 已经“链接”起来了
  state.foo++
  console.log(stateAsRefs.foo.value) // 2

  stateAsRefs.foo.value++
  console.log(state.foo) // 3
                `}
              </code>
            </pre>
          </div>
        </div>
      </div>
    )
  }
})