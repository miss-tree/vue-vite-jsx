import { defineComponent } from 'vue'
import { useRoute } from "vue-router";


export default defineComponent({
  name: "vuePlugin",
  setup () {
    const router = useRoute()
    const getRouter = () => {
      console.log("router", router);
    }
    return () => (
      <div class="contentCenter">
        <div onclick={getRouter}><h3>移动端</h3></div>
        <div>
          <p>
            之前在第一家公司有用到过H5嵌入微信，后面就基本没碰移动端了，在最近渔珠智谷这家公司接触就比较多。
            有蒙牛的别提多美会员小程序（“多美营”，还有门店小程序）、竹叶青、长城H5（包含小程序、App多端开发），
            主要用到的技术框架是React的taro开发，其中门店小程序和竹叶青小程序用的是vue3的taro。
            开发过程中踩了挺多坑，下面记录的是开发踩过和经常遇到的问题。
          </p>
        </div>
        <div>
          <ul>
            <li>
              <router-link to="/CreateApp">
                taro
              </router-link>
            </li>
            <li>
              <router-link to="/Reactive">
                css
              </router-link>
            </li>
            {/* <li>
              <router-link to="/Watch">
                监听响应数据--watch/computed
              </router-link>
            </li>
            <li>
              <router-link to="/Instructions">
                指令
              </router-link>
            </li>
            <li>
              <router-link to="/Refs">
                Refs
              </router-link>
            </li> */}
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    )
  }
})