import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import vueIcon from "@/assets/vue.png"
import viteIcon from "@/assets/logo.svg"
import homeIcon from "@/assets/home.jpeg"
import defaultIcon from "@/assets/logo.jpeg"

/** require方法   所有模块一起加载
const routerList = [] // 路由数组 - 存放所有路由
const importAll = (routerArr) => {
    // 该函数用于将所有分区路由中的路由添加到路由数组
    routerArr.keys().forEach(key => {
        Array.prototype.push.apply(routerList, routerArr(key).default)
    })
}
importAll(require.context('./', false, /\.js/)) //将所有的路由引进  
*/

/**
 * vite  推荐方法
const modules = import.meta.glob('./modules/*.js')
for (const path in modules) {
    modules[path]().then((mod) => {
      console.log(path, mod)
    })
}
 */

/** vite    全面支持ES6，不能使用 require */
const importAll = import.meta.globEager('./modules/*.js')
let routerModules = []
for (const modules of Object.entries(importAll)) {
  // console.log('modules',modules);
  // routerModules = routerModules.concat(modules[1].default) // 少用 消耗性能
  routerModules.push(...modules[1].default)
}
// console.log('importAll',importAll,routerModules)

const global = [
  {
    path: '/',
    // name: 'Home',
    redirect: '/homePage',
    component:()=> import('@/App.vue'),
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: ()=>import('@/views/common/homePage'),
    meta: { title: '首页',icon:'home' }
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...global, ...routerModules],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  let hasLink = document.getElementById('link')
  let href = ""
  switch (to.meta.icon) {
    case 'vue':
      href = vueIcon
      break;
    case 'vite':
      href = viteIcon
      break;
    case 'home':
      href = homeIcon
      break;
    default:
      href =  defaultIcon 
      break;
  }
  if(!hasLink){
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = href;
    link.id = 'link'
    document.getElementsByTagName('head')[0].appendChild(link)
  }else{
    hasLink.href = href
  }
  next()
})
export default router;