import { defineComponent } from "vue"
import queue01 from '@/views/Algorithm/img/qunee01.png'
import queue02 from '@/views/Algorithm/img/queue02.png'
import queue03 from '@/views/Algorithm/img/queue03.png'
import queue04 from '@/views/Algorithm/img/queue04.png'
import queue05 from '@/views/Algorithm/img/queue05.png'
import queue06 from '@/views/Algorithm/img/queue06.png'
import queue07 from '@/views/Algorithm/img/queue07.png'
import queue08 from '@/views/Algorithm/img/queue08.png'
import queue09 from '@/views/Algorithm/img/queue09.png'
import queue11 from '@/views/Algorithm/img/queue11.png'
import queue12 from '@/views/Algorithm/img/queue12.png'
import queue13 from '@/views/Algorithm/img/queue13.png'

export default defineComponent({
    name:'queue',
    setup(){

        return ()=>(
            <div class='contentCenter'>
                <div>
                    <h3>线程池和队列</h3>
                    <p>
                        队列是一种特殊的线性表，特殊之处在于它只允许在表的前端（front）进行删除操作，而
                        在表的后端（rear）进行插入操作，是一种操作受限制的线性表。进行插入操作的端称为队
                        尾，进行删除操作的端称为队头。
                        类似于我们日常生活中排队买票，我们购票的时候是要排在队尾的——入队操作，当到我们
                        买票的时候我们已经在队首了，买完票离开就是一个出队的操作。总结来说，队列就是一个
                        “先进先出”的线性表。
                    </p>
                    <h5>队列的假溢出</h5>
                    <p>
                        每个队列都有一个固定长度，但是长度是自定义的。就像每台电脑都有固定的内存一样，你可以自己加。
                        如下图：队列长度为9，head 为头指针，tail 为尾指针。每次插入都在尾指针后面加入数据，
                        满了就将head指针往后移，将新数据放到前面，这个时候就形成了循环队列。
                    </p>
                    <img src={queue01} alt="线程池和队列"/>
                    <br/>
                    <p>
                        如下图：当tail指针已经指向末尾的时候，这个时候要添加一个新数据，但是末尾已经没有位置存放，
                        这个时候队列明明又没满，前面还有空余的位置，这个时候就叫做队列的假溢出。每当这个时候就将新
                        数据放到前面，放到下标为0的位置，下次放到下标为1的位置直到形成新父循环队列为止。
                    </p>
                    <img src={queue02} alt="队列的假溢出"/>
                    <br/>
                </div>
                <div>
                    <h5>队列应用场景</h5>
                    <ul>
                        <li>
							<div>cpu的超线程技术</div>
                            <img src={queue03} style="width:270px;height:auto" alt="队列应用场景"/>
                            <img src={queue04} style="width:270px;height:auto" alt="队列应用场景"/>
                            <img src={queue05} style="width:330px;height:auto" alt="队列应用场景"/>
                            <p>
                                因为计算机处理的速度非常快，一个cpu可以处理多个内核，但是普遍最合理的还是处理两个，
                                也就是两个队列。两个cpu就是可以变成虚拟4核，真4核的可以变成虚拟8核。
                            </p>
                        </li>
                        <li>
                            <div>线程池的任务队列</div>
                            <img src={queue06} style="width:270px;height:auto" alt="队列应用场景"/>
                            <img src={queue07} style="width:270px;height:auto" alt="队列应用场景"/>
                            <img src={queue08} style="width:330px;height:auto" alt="队列应用场景"/>
                            <p>
                               计算机是一个多线程系统，经常会进行多个任务运行。因为计算机运行速度快，经常要进行申请线程和销毁
                               线程。频繁的操作不利于计算机的效率，就直接向计算机申请4个线程，每个任务都放到一个任务队列中去，
                               将任务队列用作缓存区，后面加进来的任务放到任务队列中，哪一个线程完成了一个任务就向线程池里申请新的任务。
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>LeetCode题</h5>
                    <ul>
                        <li>LeetCode #86 分隔链表</li>
                        <li>LeetCode #138 带随机指针的链表</li>
                        <li>LeetCode #面试题1709 第K个数</li>
                        <li>LeetCode #859 亲密字符串</li>
                        <li>LeetCode #860 柠檬水找零</li>
                        <li>LeetCode #621 任务调度器</li>
                        <li>LeetCode #933 最近的请求次数</li>
                        <li>LeetCode #622 设计循环队列</li>
                        <li>LeetCode #641 设计循环双端队列</li>
                        <li>LeetCode #1670 设计前中后队列</li>
                        <li>LeetCode #969 煎饼排序</li>
                    </ul>
                </div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/partition-list/"
							target="_blank" rel="noopener noreferrer">leetcode #86. 分隔链表</a>
						{/* <a href="https://leetcode-cn.com/problems/linked-list-cycle-ii/"
							target="_blank" rel="noopener noreferrer">leetcode #142. 环状链表II</a> */}
					</h5>
					<p>
						思路：使用两个链表，最后合成一个，类似于快速排序。
						<br/>
						新建两个链表A、B，小于特定值x的放到A链表中，大于等于x的放到B链表中，最后将A链表的尾节点指向
                        B链表的头部合并成新链表即可
					</p>
                        <img src={queue09} style="width:300px;height:auto" alt="队列应用场景"/>
                        <img src={queue11} style="width:300px;height:auto" alt="队列应用场景"/>
                        <img src={queue12} style="width:270px;height:auto" alt="队列应用场景"/>
				</div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/copy-list-with-random-pointer/"
							target="_blank" rel="noopener noreferrer">leetcode #138. 复制带随机指针的链表</a>
					</h5>
					<p>
						思路：使用两个链表，最后合成一个，类似于快速排序。
						<br/>
						新建两个链表A、B，小于特定值x的放到A链表中，大于等于x的放到B链表中，最后将A链表的尾节点指向
                        B链表的头部合并成新链表即可
					</p>
                        <img src={queue09} style="width:300px;height:auto" alt="队列应用场景"/>
                        <img src={queue11} style="width:300px;height:auto" alt="队列应用场景"/>
                        <img src={queue12} style="width:270px;height:auto" alt="队列应用场景"/>
				</div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/get-kth-magic-number-lcci/"
							target="_blank" rel="noopener noreferrer">leetcode #面试题 17.09 第K个数</a>
					</h5>
					<p>
						思路：类似一个数学证明题，求证3、5、7的公约数，最小是1，最大是49。
						<br/>
						借鉴了leetcode题解的一个思路，首先先求出3、5、7所有的公约数循环放到一个数组内，
                        先获取当前每次循环的值，从最小的3开始(1是最小公约数)，然后依次到5、7、9、15、21、25、35、49。
						<br/>
                        1、但是我们无法知道K是多大，只能依次的来，等想个循环的办法让数据按上面的来。
						<br/>
                        2、让数组第一个数为1，循环从3开始，也就是从下标为1 的开始，上面的规律为三个数互乘，去最小放到数组中，
                        使用过的不能再次使用(类似于已经去重)，用三个数乘使用次数，使用过的数次数加1，下次在去最小数就不会取到
						<br/>
                        3、等到K次的数组后，取k-1的下标即第K个数大小
					</p>
				</div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/get-kth-magic-number-lcci/"
							target="_blank" rel="noopener noreferrer">leetcode #859 亲密字符串</a>
					</h5>
					<p>
						思路：根据题目判断多种情况。
						<br/>
                        1、判断两个字符串长度不想得或者全等的情况。
						<br/>
                        2、循环字符串 for(let i=0;&lt;A.length;i++)，在字符串相同的情况不用判断，只判断不同的，
                        因为相同的怎么切换都是相同的。然后判断 a=A[i]+a;  b+=B[i] ,因为最后a.length===2&&a===b
                        条件符合，就是亲密字符串
					</p>
				</div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/lemonade-change/"
							target="_blank" rel="noopener noreferrer">leetcode #860 柠檬水找零</a>
					</h5>
					<p>
						思路：有点贪心算法的意思，尽量减少5块钱的补零，这样才可以换算次数越多。
						<br/>
                        1、保存5块钱、10块钱的数量。
						<br/>
                        2、假如可以换K次，假如第一次给的不是5块钱就直接false。给5块钱就直接给5块钱的数量加一。
                        给10块钱就找5块钱，5块钱数量减一。给20块钱有两种找零的方法，一种是给三张5块，5块钱数量减三，
                        第二种就是一张10块钱，一张5块钱，10块钱数量减一，5块钱数量减一。循环操作次数即可。
					</p>
				</div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/task-scheduler/"
							target="_blank" rel="noopener noreferrer">leetcode #621 任务调度器</a>
					</h5>
					<p>
						思路：这个有点像在一个数据表格中求表格中输入数据的面积。
						<br/>
                        1、首先题目的意思说“两个 相同种类 的任务之间必须有长度为整数 n 的冷却时间”，就如下图一样最少有两个空格。
                        找到最长的任务，放到最前面，第二个任务长度放第二格，第三个放第三格，第四的放后面空余的位置,第五可能会重新替换
                        放到第一格位置，依次递推，就数据占据的面积即最短时间。
					</p>
                    <img src={queue13} alt="任务调度器"/>
				</div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/number-of-recent-calls/"
							target="_blank" rel="noopener noreferrer">leetcode #933 最近的请求次数</a>
					</h5>
					<p>
						思路：这个比较简单，就是按逻辑判断请求次数即可。
						<br/>
                        1、定义一个数组A，将在3000毫秒请求的次数放到A中，最后计算A的长度即可。
					</p>
				</div>
            </div>
        )
    }
})