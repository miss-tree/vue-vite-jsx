import { defineComponent ,reactive} from "vue"
import pp from "@/assets/images/11.jpg" 
import ww from "@/assets/images/10.jpg" 
import "./scss/homePage.scss" 

export default defineComponent({
    name:'homePage',
    setup(){
        const state = reactive({
            img:pp,
            ww
        })
        return ()=>(
            <div>
                <div className="contentCenter">
                    <div>
                        <img src= {state.img} alt="" />
                    </div>
                    <div class="contentBody">
                        <h3>知识大杂烩</h3>
                        <div class="flex">
                            <div>
                                <router-link to="/vite">VITE</router-link>    
                            </div>
                            <div>
                                <router-link to="/vueModules">VUE3</router-link>   
                            </div>
                            <div>
                                <router-link to="/Algorithm">算法</router-link>
                            </div>
                        </div>
                        <p>
                          项目基于vite开发，使用vue3，使用编译方式为jsx和vue文件混合开发
                        </p>
                    </div>    
                    <div>
                        <img src= {state.ww} alt="" />
                    </div>
                </div>
            </div>
        )
    }
})