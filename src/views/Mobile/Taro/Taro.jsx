import { defineComponent } from 'vue'
import { useRoute } from 'vue-router';


export default defineComponent({
 name: `Taro`,
 setup () {
  const router = useRoute()

  return () => (
   <div class='contentCenter'>
       <div>
           <p>
            学习taro首先看
            <a href="https://taro-docs.jd.com/taro/docs/" target="_blank" 
            rel="noopener noreferrer">官方文档</a>,作为一个多端开发的框架，和uniapp一样都可以跨端开发。
            当然作为一个多端开发者要将以前的浏览器方法忘记掉，使用taro内置的方法，否则在小程序和嵌套app的时候
            会出现问题。
           </p>
       </div>
   </div>
   )
  }
})