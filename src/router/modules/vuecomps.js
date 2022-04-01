

const vuecomps =[
{
    path: '/vueModules',
    name:"vueModules",
    meta:{ title:"Vue3", icon: 'vue'},
    component: () => import('@/views/vuecomps/index')
  },
  {
    path: '/Watch',
    name: "Watch",
    meta: { title: "Watch", icon: 'vue' },
    component: () => import('@/views/vuecomps/Watch/index')
  }, 
  {
    path: '/Reactive',
    name: "Reactive",
    meta: { title: "Reactive", icon: 'vue' },
    component: () => import('@/views/vuecomps/Reactive/Reactive')
  },
  {
    path: '/CreateApp',
    name: "CreateApp",
    meta: { title: "CreateApp", icon: 'vue' },
    component: () => import('@/views/vuecomps/CreateApp/CreateApp')
  },
  {
    path: '/Instructions',
    name: "Instructions",
    meta: { title: "Instructions", icon: 'vue' },
    component: () => import('@/views/vuecomps/Instructions/Instructions')
  },
]
export default vuecomps;