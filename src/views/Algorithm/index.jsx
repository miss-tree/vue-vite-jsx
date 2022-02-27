import { defineComponent,getCurrentInstance } from "vue"
import router from '@/router'
import { useRoute } from 'vue-router'
import { toRaw } from 'vue'
import thm01 from '@/views/Algorithm/img/Algorithm01.jpg' 

export default defineComponent({
    name:'Algorithm',
    setup(){
        const { ctx } = getCurrentInstance()
        // ctx.$router.currentRoute.value 当前路由
        console.log('router:',router,ctx.$router.currentRoute.value);
        const route = useRoute()
        // 获取所有路由 route 为当前路由代理
        const AlgorithmRoutes=router.options.routes
        console.log('route:',route.path,toRaw(route))
        return ()=>(
            <div class='contentCenter'>
                <div>
                    <h3>算法</h3>
                    <p>
                        以前总觉得算法对前端没什么用，就一个页面的切图仔用到什么算法。
                        好比在菜市场里你用不到高数一样。直到后来做2D项目，要在画布渲染成百上千的节点，
                        拖拽画布节点会出现卡顿。这时候就要想办法优化方法，减少DOM的操作，
                        寻找最优的方法进行计算。
                    </p>
                    <p>
                        在2021年初看到了有算法的培训课程，报名参加了培训,希望有所进步，视野有所开阔。
                        在前端不断前进的脚步上留下新的篇章。以下是学习的技术记录和一些在leetcode刷题
                        思路。
                    </p>
                </div>
                <ul>
                    <li>
                        <router-link to="/linkList">
                            链表
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/queue">
                            线程池和任务队列
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/stack">
                            递归与栈
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/BinaryTree">
                            二叉树
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Heap">
                            堆与队列
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/UnionFind">
                            并查集
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/QuickSort">
                        快速排序
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/MergeSort">
                        归并排序
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/classical">
                        传统排序
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/BinarySearch">
                        二分查找
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Hash">
                        哈希表布隆过滤器
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/DeepSearch">
                        深搜（DFS）与广搜（BFS）
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Monotonic">
                        单调队列和单调栈
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/QueueStack">
                        单调队列和单调栈 面试专题
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/BalanceTree">
                        AVL树
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/RedBlackTree">
                        红黑二叉树
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Recurrence">
                        递推
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Dynamic">
                        动态规划
                        </router-link>
                    </li>
                </ul>
                <div>
                    <img src={thm01} alt="算法学习"/>
                    {/* <img src={'@/views/Algorithm/Algorithm01.jpg'} alt=""/> */}
                </div>
            </div>
        )
    }
})