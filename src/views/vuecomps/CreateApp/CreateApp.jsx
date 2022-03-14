import { defineComponent, reactive } from 'vue'
import { useRoute } from 'vue-router'
import location from "comps/location/index.vue";

export default defineComponent({
  name: 'CreateApp',
  components: { location },
  setup () {
    const state = reactive({
      list: [
        { name: 'createApp', id: 'createApp' },
        { name: 'defineComponent', id: 'defineComponent' },
        { name: 'defineAsyncComponent', id: 'defineAsyncComponent' },
        { name: 'nextTick', id: 'nextTick' },
        { name: 'version', id: 'version' },
        // { name: 'leetcode 213. 打家劫舍 II', id: 'house-robber' },
      ]
    })
    const route = useRoute()
    // 获取所有路由 route 为当前路由代理
    // console.log('route:', route.path, toRaw(route))
    return () => (
      <div class='contentCenter'>
        <div>
          <h3>全局API</h3>
          <p>
            vue3不仅有响应数据API，也更新了一些组件常用API。
            全局常用API在每个开发组件都可能用到，需要了解他们的使用方法
          </p>
          <location list={state.list}></location>
        </div>
        <div>
          <h4 id='createApp'>createApp</h4>
          <p>返回一个提供应用上下文的应用实例。应用实例挂载的整个组件树共享同一个上下文</p>
          <div>
            <pre>
              <code>{`
  import { createApp } from 'vue'
  import router from "./router";
  import App from './App.vue'
  import "@/assets/scss/index.scss"
  import 'normalize.css/normalize.css'

  const app = createApp(App);

  // 分环境处理
  if (process.env.NODE_ENV === 'development') {
      if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
      // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
        window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
      }
      app.config.devtools = true
      app.config.globalProperties.devtool = true
  }

  app.use(router);
  app.mount('#app')            
              
              `}</code>
            </pre>
          </div>
        </div>
        <div>
          <h4 id='defineComponent'>defineComponent</h4>
          <p>
            功能如其名，就是类似一个组件，内部参数就是组件参数
          </p>
          <div>
            <pre>
              <code>{`
  export default defineComponent({
    name: 'defineComponent',
    components: { defineComponent },
    setup () {}
    render() {}
  })
              `}</code>
            </pre>
          </div>
        </div>
        <div>
          <h4 id='defineAsyncComponent'>defineAsyncComponent</h4>
          <p>
            创建一个只有在需要时才会加载的异步组件
          </p>
          <div>
            <pre>
              <code>{`
  export default defineAsyncComponent({
    name: 'defineComponent',
    components: { defineComponent },
      // 工厂函数
    loader: () => import('./Foo.vue'),
    // 加载异步组件时要使用的组件
    loadingComponent: LoadingComponent,
    // 加载失败时要使用的组件
    errorComponent: ErrorComponent,
    // 在显示 loadingComponent 之前的延迟 | 默认值：200（单位 ms）
    delay: 200,
    // 如果提供了 timeout ，并且加载组件的时间超过了设定值，将显示错误组件
    // 默认值：Infinity（即永不超时，单位 ms）
    timeout: 3000,
    // 定义组件是否可挂起 | 默认值：true
    suspensible: false,
    onError(error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      // 请求发生错误时重试，最多可尝试 3 次
      retry()
    } else {
      // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
      // 必须调用其中一个才能继续错误处理。
      fail()
    }
  }
    setup () {}
    render() {}
  })
              `}</code>
            </pre>
          </div>
        </div>
        <div>
          <h4 id='nextTick'>nextTick</h4>
          <p>
            将回调推迟到下一个 DOM 更新周期之后执行。在更改了一些数据以等待 DOM 更新后立即使用它。
          </p>
          <div>
            <pre>
              <code>{`
  export default defineComponent({
    name: 'nextTick',
    setup () {
      const message = ref('Hello!')
      const changeMessage = async newMessage => {
        message.value = newMessage
        await nextTick()
        console.log('Now DOM is updated')
      }
    }
    render() {}
  })
              `}</code>
            </pre>
          </div>
        </div>
        <div>
          <h4 id='version'>version</h4>
          <p>
            获取当前vue版本
          </p>
          <div>
            <pre>
              <code>{`
  const version = Number(Vue.version.split('.')[0])
  if (version === 3) {
    // Vue 3
  } else if (version === 2) {
    // Vue 2
  } else {
    // 不支持的 Vue 的版本
  }
              `}</code>
            </pre>
          </div>
        </div>
      </div>
    )
  }
})