import { defineComponent, reactive } from 'vue'
import location from "comps/location/index.vue";

export default defineComponent({
  name: 'ErrorPage',
  components: { location },
  setup () {
    const state = reactive({
      list: [
        { name: 'Invalid vnode type when creating vnode undefined.', id: 'Invalid-type' },
        { name: 'TypeError: Failed to fetch dynamically imported module:', id: 'dynamically' },
        // { name: 'leetcode #69. x 的平方根', id: 'sqrtx' },
        // { name: 'LeetCode #1658. 将 x 减到 0 的最小操作数', id: 'to-zero' },
        // { name: 'LeetCode #475. 供暖器', id: 'heaters' },
        // { name: 'LeetCode #300. 最长递增子序列', id: 'increasing-subsequence' },
        // { name: 'LeetCode #1011. 在 D 天内送达包裹的能力', id: 'ship-packages' },
        // { name: 'LeetCode #4. 寻找两个正序数组的中位数', id: 'sorted-arrays' },
        // { name: 'LeetCode #35. 搜索插入位置', id: 'search-insert' },
        // { name: 'LeetCode #81. 搜索旋转排序数组 II', id: 'rotated-sorted' },
      ]
    })

    return () => (
      <div class='contentCenter'>
        <div>
          <h3>vite常见错误情况</h3>
          <p>
            下面讲下常见的开发过程错误情况，避免你踩坑：
          </p>

          <location list={state.list}></location>
        </div>
        <div id='Invalid-type'>
          <h4 class="errorMsg">Invalid vnode type when creating vnode undefined</h4>
          <div className="code">
            <pre>
              <code>
                {`
    是vue3.2之前版本问题，原因是组件前缀没有大写
    import backTop from "@/components/BackTop.vue"  ==>错误写法
    import BackTop from "@/components/BackTop.vue"  ==>正确写法         
                  `}
              </code>
            </pre>
          </div>
        </div>
        <div id='dynamically'>
          <h4 class="errorMsg">TypeError: Failed to fetch dynamically imported module:</h4>
          <div className="code">
            <pre>
              <code>
                {`
    vite 之前版本问题，原因是组件加载引入没有加后缀
    import location from "comps/location/index";  ==>错误写法
    import location from "comps/location/index.vue";  ==>正确写法         
                  `}
              </code>
            </pre>
          </div>
        </div>
      </div>
    )
  }
})