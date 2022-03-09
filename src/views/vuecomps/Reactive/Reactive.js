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
        // { name: 'leetcode 132. 分割回文串 II', id: 'palindrome-partitioning' },
        // { name: 'leetcode 416. 分割等和子集', id: 'subset-sum' },
        // { name: 'leetcode 72. 编辑距离', id: 'edit-distance' },
        // { name: 'leetcode 714. 买卖股票的最佳时机含手续费', id: 'transaction-fee' },
        // { name: 'leetcode 213. 打家劫舍 II', id: 'house-robber' },
        // { name: 'leetcode 474. 一和零', id: 'and-zeroes' },
        // { name: 'leetcode 494. 目标和', id: 'target-sum' },
        // { name: 'leetcode 518. 零钱兑换 II', id: 'coin-change' },
        // { name: 'leetcode 377. 组合总和 Ⅳ', id: 'combination-sum' },
      ]
    })
    const route = useRoute()
    // 获取所有路由 route 为当前路由代理
    console.log('route:', route.path, toRaw(route))
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
          <div>
            <pre>
              <code>
                {`
  const word = ref("miss-tree")
  const obj = reactive({
    a:"hello",
    ob:{
      msg:word
    }
  })

  console.log(obj.ob.msg) // "miss-tree"
  console.log(obj.ob.msg === word.value) // true              
                `}
              </code>
            </pre>
          </div>
        </div>
      </div>
    )
  }
})