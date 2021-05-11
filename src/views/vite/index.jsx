import { defineComponent , reactive} from 'vue'
import "@/assets/scss/vite.scss"

export default defineComponent({
    name:'vite',
    setup(){
        const state =reactive({
            list:['安装']
        })
        // console.log('查看import',import.meta);
        return ()=>(
            <div>
                <div class="contentCenter">
                    <div>
                        <h3>vite应用</h3>
                    </div>
                    <div>
                        <h4>开始vite项目</h4>
                        <div>
                            <p>
                                <a href="https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project" 
                                target="_blank" rel="noopener noreferrer">中文官方文档</a>
                                其中文档中有一句话很重要，“Vite 需要在支持 原生 ES 模块动态导入 的浏览器中使用”，
                                使用的语法要用 importat ,不支持 require 模块导入，动态的多模块导入请参考路由下index.js。
                            </p>
                        </div>
                        <div className="code">
                            npm  init @vitejs/app my-vue-app
                            <div> npm init @vitejs/app my-vue-app --template vue /** 创建 vue 模板 vite项目 */</div>
                            <div> npm init @vitejs/app my-vue-app --template react /** 创建 react 模板 vite项目 */</div>
                        </div>
                    </div>
                    <div>
                        <h4>添加sass</h4>
                        <p>
                            因为 Vite 同时提供了对 .scss, .sass, .less, .styl 和 .stylus 文件的内置支持。
                            相应的预处理器依赖本身必须安装：npm install -D sass。
                            直接安装 sass 和 sass-loader 即可，不需要在其他地方操作。
                        </p>
                    </div>
                    <div>
                        <h4>使用jsx</h4>
                        <div className="code">
                           <div>npm i @vitejs/plugin-vue-jsx -D</div> 
                            <br/>
                            vite.config.js<br/>
                            import vueJs from "vitejs/plugin-vue-jsx"<br/>
                            <pre>

    ...<br/>
        <code>
        {
    `
resolve:{
    alias: {"@":path.resolve(__dirname,"src"),"comps":path.resolve(__dirname,"src/components")}
},
        `
        }
    <br/>
    <span className="blueCode">
    {
        `plugins: [vue(),vueJsx()]`
    }
    </span>
        </code>
    <br/>
    ...
                            </pre>
                        </div>
                    </div>
                    <div>
                        <h4>使用 mockjs</h4>
                        <div className="code">
                           <div>npm i vite-plugin-mock -D</div> 
                           <div>npm i mockjs -S</div> 
                           <div>vite.config.js</div> 
                            <br/>
                            <pre>
                                <code>
                                {
        `plugins: [
            ...,
            viteMockServe({
                supportTs:false  /** 不使用TS */
            })
        ]`
                                }
                                </code>        
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
})