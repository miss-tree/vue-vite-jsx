import { defineComponent, reactive } from 'vue'
import { useRoute } from 'vue-router'
import location from "comps/location/index.vue";

export default defineComponent({
  name: 'Instructions',
  components: { location },
  setup () {
    const state = reactive({
      list: [
        { name: 'v-memo', id: 'reactive' },
        // { name: 'readonly', id: 'readonly' },
      ]
    })
    const route = useRoute()
    // 获取所有路由 route 为当前路由代理
    console.log('route:', route.path)
    return () => (
      <div class='contentCenter'>
        <div>
          <h3>指令</h3>
          <p>
            常用指令有 v-model|v-if|v-for|v-show|v-on|v-text|v-html|v-on|v-pre|v-cloak|v-once|v-is。
            这些都是常用的指令，不再过多赘述。在vue3上新增了v-memo指令，等同于react的usememo指令。
          </p>
          <location list={state.list}></location>
        </div>
        <div id='memo'>
          <h4>v-memo</h4>
          <p>
            指令接收一个数组作为依赖值进行记忆比对。如果数组中的每个值都和上次渲染的时候相同，则整个该子树的更新会被跳过。
            若是空数组在功能上等效于 v-once
          </p>
          <div className="code">
            <pre>
              <code>
                {`
  <div v-memo="[valueA, valueB]">
    ...
  </div>

  WARNING:不要在v-for使用 v-memo，因为在key改变的时候v-memo是无效

                `}
              </code>
            </pre>
          </div>
        </div>
      </div>
    )
  }
})