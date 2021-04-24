

const Algorithm =
    {
        // path: '/D3graph',
        // redirect: 'noRedirect',
        // name:"D3graph",
        // meta:{ title:"D3笔记", icon: 'chart'},
        // children: [
        //   {
            path: '/linkList',
            component: () => import('@/views/Algorithm/linkList'),
            name: 'linkList',
            meta: { title: '关于链表'},
            children:[
            //   {
            //     path: 'introduce',
            //     component: () => import('@/views/graph/helloD3'),
            //     name: 'introduce',
            //     meta: { title: '认识D3.js'}
            //   },
            ]
        //   }
        // ]
    }

export default Algorithm;