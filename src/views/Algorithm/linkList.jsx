import { defineComponent, reactive } from "vue";
import "./scss/linkList.scss"
import lt01 from '@/views/Algorithm/img/linkList01.jpg' 
import lt02 from '@/views/Algorithm/img/linkList02.jpg' 
import lt03 from '@/views/Algorithm/img/linkList03.jpg' 
import lt04 from '@/views/Algorithm/img/linkList04.jpg' 
import lt05 from '@/views/Algorithm/img/linkList05.jpg' 
import lt06 from '@/views/Algorithm/img/linkList06.jpg' 
import lt07 from '@/views/Algorithm/img/linkList07.jpg' 

export default defineComponent({
	name: 'linkList',
	setup (prop) {
		const state = reactive({
			count: prop.initValue,
			newVal: 0,
		});
		return () => (
			<div class="contentCenter">
				<div>
					<h3>链表</h3>
					<p>
					链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中
					的指针链接次序实现的。链表由一系列结点（链表中每一个元素称为结点）组成，结点可以
					在运行时动态生成。每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储
					下一个结点地址的指针域。
					</p>
				</div>
				<div>
					<h5>链表结构</h5>
					<p>
						链表是非常基本的数据结构，根据链个数分为单链表、双链表，根据是否循环分为单向链表和循环链表
					</p>
					<ul>
						<li>链表中每个节点至少包含两个部分：数据域和指针域</li>
						<li>链表中的每个节点通过指针域的值形成一个线性结构</li>
						<li>查找结点O(n),插入节点O(1),删除节点O(1)</li>
						<li>不适合快速的定位数据，适合动态的插入和删除数据的应用场景</li>
					</ul>
					<img src={lt01} alt="链表结构"/>
				</div>
				<div>
					<h5>链表应用场景</h5>
					<ul>
						<li>
							<div>操作系统内存的动态分配</div>
							<p>
								如下在一个内存4G的笔记本电脑(我15年前电脑就4G的戴尔，后面换8G感觉还能再战两年)，
								系统分配给 vscode 使用了1G，剩下的就是通过链表的方法删除1G，链接后面的1G，剩下的
								内存可以再通过链表的方法重新分配。
							</p>
							<div>
								<img src={lt02} alt="系统内存分配"/>
							</div>
						</li>
						<li>
							<div>LRU缓存淘汰算法</div>
							<p>
								假如我512G的电脑，有1G内存，要作为缓存使用(缓存是一种高速的数据结构)。我们都知道计算机对于内存的读取速度是高于硬盘的，
								在有限的内存中要处理多个数据，新增一个数据就要将之前的一个数据删除。在控制内存数据时就要用到链表，
								因为链表结构对于操作数据删除和增加是非常快的。在下面的图例中只能存储4个大数据，若在内存新增一个
								就要将第一个删除。
							</p>
							<div>
								<img src={lt03} alt="LRU缓存淘汰算法"/>
							</div>
							<div>
								<img src={lt04} alt="LRU缓存淘汰算法"/>
							</div>
						</li>
					</ul>
				</div>
				<div>
					<h5>LeetCode题</h5>
					<ul>
						<li>leetcode #142 环状链表</li>
						<li>LeetCode #202. 快乐数</li>
						<li>leetcode #206 反转链表</li>
						<li>LeetCode #92 反转链表II</li>
						<li>LeetCode #25 K个一组翻转链表</li>
						<li>LeetCode #61 旋转链表</li>
						<li>LeetCode #19 删除链表的倒数第N个节点</li>
						<li>LeetCode #24 两两交换链表中的节点</li>
						<li>LeetCode #83 删除排序链表中的重复节点</li>
						<li>LeetCode #82 删除排序链表中的重复节点II</li>
					</ul>
				</div>
				<div>
					<h5>
						<a href="https://leetcode-cn.com/problems/linked-list-cycle/"
							target="_blank" rel="noopener noreferrer">leetcode #141. 环状链表</a>
						<a href="https://leetcode-cn.com/problems/linked-list-cycle-ii/"
							target="_blank" rel="noopener noreferrer">leetcode #142. 环状链表II</a>
					</h5>
					<p>
						思路：使用快慢指针的方式。
						<br/>
						快指针走两步，慢指针走一步，当再次相遇就是判断有环。(为啥不是快指针走三步？因为走一步保证是在第一次循环内相遇，
						而且环越小，在第一个循环内相遇就越快)。在无环链表内快指针会先访问到链表尾部而结束
					</p>
				</div>
				<div>
					<h5>
						<a href="https://leetcode-cn.com/problems/happy-number/"
							target="_blank" rel="noopener noreferrer">leetcode #202. 快乐数</a>
					</h5>
					<p>
						思路：使用快慢指针的方式。
						<br/>
						判断链表是否有环问题，32位int的表示正整数大概是21亿(2^31-1 )
						在这个范围内 各位数字平方和最大的数是1999999999 和为730。
					根据鸽巢原理（pigeonhole's principle，也译作抽屉原理）在730次
					循环后必定出现重复
					</p>
				</div>
				<div>
					<h5>
						<a href="https://leetcode-cn.com/problems/reverse-linked-list/"
							target="_blank" rel="noopener noreferrer">LeetCode #206 反转链表</a>
					</h5>
					<p>
						思路：反转链表==&gt;将表头处添加一个虚头，复制一个链表将虚头当坐尾部的null，链表执行改变指针方向。
						<br/>
						这个需要一个图示来展示，请看下图:逻辑是先复制当前链表A，循环的时候改变当前结点的指针，改为前一个节点，
						然后循环下个节点，不断重复刚刚的操作。直到下个节点为null时当前链表循环结束，新的链表A就是翻转的链表。
					</p>
					<img src={lt05} alt=""/>
					<br/>
					<br/>
					<img src={lt06} alt=""/>
					<p>
						什么时候使用虚头?
					</p>
				</div>
				<div>
					<h5>
						<a href="https://leetcode-cn.com/problems/reverse-linked-list-ii/"
							target="_blank" rel="noopener noreferrer">LeetCode #92 反转链表II</a>
					</h5>
					<p>
						思路：反转链表==&gt;将上面反转链表的方法封装成 reverse，在反转区间调用。
						<br/>
						首先，循环链表，当到达区间位置式调用封装的 reverse 方法将翻转的区间数据翻转，
						完成后返回最后的指针域，将链表继续执行即可
					</p>
					<p>
						什么时候使用虚头====&gt;
						<br/>
						当表头是动态的时候就可以使用虚头,通常用于链表的首地址有可能改变的情况
					</p>
				</div>
				<div>
					<h5>
						<a href="https://leetcode-cn.com/problems/reverse-nodes-in-k-group/"
							target="_blank" rel="noopener noreferrer">LeetCode #25. K 个一组翻转链表</a>
					</h5>
					<p>
						思路：反转链表==&gt;这个是上一题的升级，反转方法不变。
						<br/>
						首先判断链表不为空，while 循环链表，嵌套一个for循环，判断循环当前反转长度是否够，
						足够就进行数组反转，当循环次数为到小于 K 是跳出while 执行当前指针的next。
						<br/>
						反转的头节点A为下个待反转区域的头节点，将当前头节点的下个节点B的下个节点指向A，
						再下个节点C指向B，如此循环。
					</p>
				</div>
				<div>
					<h5>
						<a href="https://leetcode-cn.com/problems/rotate-list/"
							target="_blank" rel="noopener noreferrer">LeetCode #61 旋转链表</a>
					</h5>
					<p>
						思路：旋转链表==&gt;这个不是环形的链表。
						<br/>
						while 循环出链表的个数，在链表断开前将下个节点作为链表的头节点，
						然后断开链表，直接指向null。
					</p>
				</div>
				<div>
					<h5>
						<a href="https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/"
							target="_blank" rel="noopener noreferrer">LeetCode #19 删除链表的倒数第N个节点</a>
					</h5>
					<p>
						思路：旋转链表==&gt;使用到动态虚头方法。
						<br/>
						如下图所示，要删除3，你要获取到3的节点，将3的下个节点指向4，要保证在q的前面不能为null
					</p>
					<br/>
					<img src={lt07} alt="删除链表的倒数第N个节点"/>
				</div>
			</div>
		);
	},
});

