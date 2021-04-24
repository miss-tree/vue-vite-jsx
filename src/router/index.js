import { createRouter, createWebHistory } from 'vue-router';

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
const importAll =import.meta.globEager('./modules/*.js')
let routerModules = []
for (const modules of Object.entries(importAll)) {
    // console.log('modules',modules);
    routerModules.push(modules[1].default)
}
// console.log('importAll',importAll,routerModules)

const global = [
    {
        path: '/',
        name: 'Home',
        component: import('@/App.vue'),
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes:[...global,...routerModules],
});
export default router;