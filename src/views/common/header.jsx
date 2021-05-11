import {defineComponent } from "vue"

export default defineComponent({
    name:'header',
    setup(){
        return ()=>(
            <div class="banner">
                <router-link to="/">
                    头部
                </router-link>
            </div>
        )
    }
})