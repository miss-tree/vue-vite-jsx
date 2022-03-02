import { defineComponent } from 'vue'
import { useRoute } from "vue-router";
import "./assets/css/index.scss"


export default defineComponent({
  name: "vuePlugin",
  setup () {
    const router = useRoute()
    const getRouter = () => {
      console.log("router", router);
    }
    return () => (
      <div class="contentCenter">
        <div onclick={getRouter}><h3>vuePlugin</h3></div>
        <div>
          <p>
            学习vue3 首先得去<a href="https://v3.cn.vuejs.org/"
              target="_blank" rel="noopener noreferrer">官网</a>学习他的api，下面介绍常用的api
          </p>
        </div>
        <div>
          <ul>
            <li>响应数据--ref/reactive/</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div class="linkVue">
          <a href="https://gitee.com/miss-tree/vue-vite-jsx/blob/main/src/views/vuecomps/index.jsx"
            target="_blank" rel="noopener noreferrer">本项目文件配置</a>
        </div>
        <div class="">vue 文件配置展示</div>              
        <div className="code">
          <pre>
            <code>
              {`
    
    <script setup>
    import {defineComponent,defineAsyncComponent,reactive,toRefs} from 'vue'
    
    export default{
      components:{
      // comp1: defineAsyncComponent(() => import('./components/comp1')),
        // comp2: defineAsyncComponent(() => import('./components/comp2'))
      },
      props: {
        user: {
          type: String,
          required: true
        }
      },
      setup(){
        const reactive = reactive({
          name:"miss-tree"
        })

        return {
          ...toRefs(state)
        }
      }
    }

    </script>
                               
              `}
            </code>
          </pre>
        </div>
      </div>
    )
  }
})