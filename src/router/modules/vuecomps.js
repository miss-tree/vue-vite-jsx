

const vuecomps =[
{
    path: '/vueModules',
    name:"vueModules",
    meta:{ title:"D3笔记", icon: 'chart'},
    component:()=>import('@/views/vuecomps/index')
}
]
export default vuecomps;