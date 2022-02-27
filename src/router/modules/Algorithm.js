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
    },
    {
        path: '/classical',
        component: () => import('@/views/Algorithm/classical/index'),
        name: 'classical',
        meta: { title: '传统排序'},
    },
    {
        path: '/BinarySearch',
        component: () => import('@/views/Algorithm/BinarySearch/index'),
        name: 'BinarySearch',
        meta: { title: '二分查找'},
    },
    {
        path: '/Hash',
        component: () => import('@/views/Algorithm/Hash/index'),
        name: 'Hash',
        meta: { title: '哈希表布隆过滤器'},
    },
    {
        path: '/DeepSearch',
        component: () => import('@/views/Algorithm/DeepSearch/index'),
        name: 'DeepSearch',
        meta: { title: '深搜（DFS）与广搜（BFS）'},
    },
    {
        path: '/Monotonic',
        component: () => import('@/views/Algorithm/Monotonic/index'),
        name: 'Monotonic',
        meta: { title: '单调队列和单调栈'},
    },
    {
        path: '/QueueStack',
        component: () => import('@/views/Algorithm/QueueStack/index'),
        name: 'QueueStack',
        meta: { title: '单调队列和单调栈 面试专题'},
    },
    {
        path: '/BalanceTree',
        component: () => import('@/views/Algorithm/BalanceTree/index'),
        name: 'BalanceTree',
        meta: { title: 'AVL树'},
    },
    {
        path: '/RedBlackTree',
        component: () => import('@/views/Algorithm/RedBlackTree/index'),
        name: 'RedBlackTree',
        meta: { title: '平衡二叉树'},
    },
    {
        path: '/Recurrence',
        component: () => import('@/views/Algorithm/Recurrence/index'),
        name: 'Recurrence',
        meta: { title: '递推'},
    },
    {
        path: '/Dynamic',
        component: () => import('@/views/Algorithm/Dynamic/index'),
        name: 'Dynamic',
        meta: { title: '动态规划'},
    }
]
export default Algorithm;