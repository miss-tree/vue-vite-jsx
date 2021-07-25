

const Algorithm =[
    {
        path: '/Algorithm',
        component: () => import('@/views/Algorithm/index'),
        name: 'Algorithm',
        meta: { title: '算法提纲'},
    },
    {
        path: '/linkList',
        component: () => import('@/views/Algorithm/linkList'),
        name: 'linkList',
        meta: { title: '关于链表'},
        children:[
            {
                path: 'blockList',
                component: () => import('@/views/Algorithm/linkList/index'),
                name: 'blockList',
                meta: { title: '认识D3.js'}
            }
        ]
    },
    {
        path: '/queue',
        component: () => import('@/views/Algorithm/queue/index'),
        name: 'queue',
        meta: { title: '线程池和队列'},
    },
    {
        path: '/stack',
        component: () => import('@/views/Algorithm/stack/index'),
        name: 'stack',
        meta: { title: '递归与栈'},
    },
    {
        path: '/BinaryTree',
        component: () => import('@/views/Algorithm/BinaryTree/index'),
        name: 'BinaryTree',
        meta: { title: '二叉树'},
    },
    {
        path: '/Heap',
        component: () => import('@/views/Algorithm/Heap/index'),
        name: 'Heap',
        meta: { title: '堆与队列'},
    },
    {
        path: '/UnionFind',
        component: () => import('@/views/Algorithm/UnionFind/index'),
        name: 'UnionFind',
        meta: { title: '并查集'},
    },
    {
        path: '/QuickSort',
        component: () => import('@/views/Algorithm/QuickSort/index'),
        name: 'QuickSort',
        meta: { title: '快速排序'},
    },
    {
        path: '/MergeSort',
        component: () => import('@/views/Algorithm/MergeSort/index'),
        name: 'MergeSort',
        meta: { title: '归并排序'},
    }
]
export default Algorithm;