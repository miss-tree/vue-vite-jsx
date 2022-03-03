

const vuecomps =[
{
    path: '/vueModules',
    name:"vueModules",
    meta:{ title:"Vue3", icon: 'vue'},
    component:()=>import('@/views/vuecomps/index')
  },
  {
    path: '/Watch',
    name: "Watch",
    meta: { title: "Watch", icon: 'vue' },
    component: () => import('@/views/vuecomps/Watch/index')
  },
]
export default vuecomps;