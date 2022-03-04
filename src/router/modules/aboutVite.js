const abVite =[
 {
    path:'/vite',
    name:'vite',
    component:()=>import('@/views/vite/index'),
    meta: { title: 'vite使用', icon:"vite"}
  },
  {
    path: '/ErrorPage',
    name: 'ErrorPage',
    component: () => import('@/views/vite/ErrorPage/ErrorPage'),
    meta: { title: 'vite开发常见错误', icon: "vite" }
  }
]
export default abVite