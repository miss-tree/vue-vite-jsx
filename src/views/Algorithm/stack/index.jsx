import { defineComponent } from "vue"
import stack01 from '@/views/Algorithm/img/stack01.png'
import stack02 from '@/views/Algorithm/img/stack02.png'

export default defineComponent({
    name:'queue',
    setup(){

        return ()=>(
            <div class='contentCenter'>
                <div>
                    <h3>递归与栈</h3>
                    <p>
                        栈（stack）又名堆栈，它是一种运算受限的线性表。限定仅在表尾进行插入和删除操作的线性表。
                        这一端被称为栈顶，相对地，把另一端称为栈底。向一个栈插入新元素又称作进栈、入栈或压栈，
                        它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素；从一个栈删除元素又称作出栈或退栈，
                        它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。栈具有“先进后出”的特性，可以处理
                        具有<span class="red">完全包含</span>关系的问题。
                    </p>
                </div>
                <div>
                    <h5>栈应用场景</h5>
                    <ul>
                        <li>
							<div>。。。</div>
                            <p>
                            </p>
                        </li>
                        <li>
                            <div>。。。</div>
                            <p>
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
					<h5>LeetCode题</h5>
					<ul>
						<li>leetcode #面试题 03.04. 化栈为队</li>
						<li>LeetCode #946. 验证栈序列</li>
						<li>leetcode #20. 有效的括号</li>
						<li>LeetCode #1249 移除无效的括号</li>
						<li>LeetCode #145 二叉树的后序遍历</li>
						<li>LeetCode #331 验证二叉树的前序序列化</li>
						<li>LeetCode #227 基本计算器 II</li>
						<li>LeetCode #636 函数的独占时间</li>
						<li>LeetCode #1124 表现良好的最长时间段</li>
					</ul>
				</div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/"
							target="_blank" rel="noopener noreferrer">leetcode #面试题 03.04. 化栈为队</a>
					</h5>
					<p>
						思路：使用两个栈变成队列“先进先出”的形式。
						<br/>
                        将元素放到一个栈 A 中，假如元素为 1 、2、3、4、5，依次放入栈中，栈底为1，栈顶为5，
                        要想栈底元素最先出栈这时候就需要另一个栈 B ，将栈A 的元素依次弹出到栈B，这时候栈B的栈顶元素就
                        为1了，这时候出栈就是队列的“先进先出”了
					</p>
				</div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/validate-stack-sequences/"
							target="_blank" rel="noopener noreferrer">leetcode #946. 验证栈序列</a>
					</h5>
					<p>
						思路：关于栈出栈入栈顺序问题。
						<br/>
						序列A为入栈顺序的元素，序列B为序列A的出栈顺序是否合法，主要关注出栈顺序，判断元素能不能
                        这样出栈。首先定义当前序列B弹出元素的下标J=0，遍历序列 A 将每个元素放到一个数组X中，然后遍历数组X，
                        当数组X元素等于序列B[J]的元素时，并且数组X的长度不为0， 数组删除最后一个元素，J++。
                        最后数组X的长度为0时则是合法的弹出
					</p>
				</div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/valid-parentheses/"
							target="_blank" rel="noopener noreferrer">leetcode #20. 有效的括号</a>
					</h5>
					<p>
						思路：必须符合以下条件，否则括号无效。
						<br/>
                        1、在任意一个位置上，左括号数量&gt;=右括号数量。
						<br/>
                        2、在最后一个位置上，左括号数量==右括号数量
						<br/>
                        3、程序中只需要记录左括号数量和右括号数量即可
					</p>
				</div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses/"
							target="_blank" rel="noopener noreferrer">leetcode #1249 移除无效的括号</a>
					</h5>
					<p>
						思路：根据上一题的思路先判断有效括号。
						<br/>
                        1、循环字符串S将遇到“(”和“)”分别放到A和B两个数组里。当遇到“)”,判断A数组长度是否为0，数组A里删除最后一个“)”的下标，
                        否则数组B添加一个“)”的下标。
                        <br/>
                        2、将两个数组合并(判断两边是否有无效括号)，若没有无效括号，两个数组长度为0，否则就是有无效括号。
                        <br/>
                        3、变量合并的数组，将字符串S相对应的下标替换成 “”
					</p>
				</div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/binary-tree-postorder-traversal/"
							target="_blank" rel="noopener noreferrer">leetcode #145 二叉树的后序遍历</a>
					</h5>
					<p>
						思路：首先了解前中后序遍历，前序遍历：根=&gt;左=&gt;右，中序遍历：左=&gt;根=&gt;右，后续遍历：左=&gt;右=&gt;根。
						<br/>
                        1、递归方法就是封装一个方法获取二叉树节点不断调用
						<br/>
                        2、迭代方法：定义一个数组A，当给定的节点不为空，循环当前二叉树模拟栈stack的长度，因为是后序遍历，
                        弹出当前栈的栈顶元素X，将X的值unshift到数组A中，如果X有左或右节点，分别将左或右节点
                        push到栈stack中，不断循环便可以得到值，并返回。
					</p>
				</div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/"
							target="_blank" rel="noopener noreferrer">leetcode #331 验证二叉树的前序序列化</a>
					</h5>
					<p>
						思路：首先要验证二叉树是否合法，每个节点是占位一个槽位。
						<br/>
                        1、因为是前序遍历，根节点是第一个，插槽slot，并且至少有一个槽位，遍历字符串S，遇到字符“，”，直接下一个不进行计算
                        遇到“#”，--slot，遍历下一个，若是遇到其他的，判断是否是数字，插槽++slot，直接下一个。遍历完后，slot===0就是合法的，
                        &gt;0就是非法的
					</p>
				</div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/basic-calculator-ii/"
							target="_blank" rel="noopener noreferrer">leetcode #227 基本计算器 II</a>
					</h5>
					<p>
						思路：这个题主要是一个逻辑运算题，此题排除括号运算问题。
						<br/>
                        1、循环字符串，定义两个栈，一个放运算符CA，一个是数字NU，如下图所示，当运算是加减时暂时不计算，
                        将元素放到CA栈顶， 优先计算乘除。当遇到乘除计算,数字NU栈顶元素和字符串下个数字元素乘除结果CX，
                        将NU栈顶元素弹出,将CX放到NU栈顶，继续下一个字符，循环完字符串后将NU栈内所有元素相加。(排除空字符串)
					</p>
                    <img src={stack01} alt="基本计算器"/>
                    <div class="code">
                        <pre>
                           <code>
                                {`
    var calculate = function(s) {
        s = s.trim();
        const stack = new Array();
        let preSign = '+';
        let num = 0;
        const n = s.length;
        for (let i = 0; i < n; ++i) {
            if (!isNaN(Number(s[i])) && s[i] !== ' ') {
                num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
            }
            if (isNaN(Number(s[i])) || i === n - 1) {
                switch (preSign) {
                    case '+':
                        stack.push(num);
                        break;
                    case '-':
                        stack.push(-num);
                        break;
                    case '*':
                        stack.push(stack.pop() * num);
                        break;
                    default:
                        stack.push(stack.pop() / num | 0);//排除0的情况
                }   
                preSign = s[i];
                num = 0;
            }
        }
        let ans = 0
        if (stack.length) ans = stack.reduce((a,b)=>a+b)
        return ans
}                        
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/exclusive-time-of-functions/"
							target="_blank" rel="noopener noreferrer">leetcode #636 函数的独占时间</a>
					</h5>
					<p>
						思路：注意题目中占用时间，由题目下的图可以看出，实际时间是n+1，因为是从0开始的。
						<br/>
                        1、循环字符串，判断每个字符串代表的含义，包括是第几个函数，是开始还是结束，运行时或结束后的时间
                        <br/>
                        2、记录一个函数数组，将每次函数添加到数组中，若是重复的就不添加时间
                        <br/>
                        3、若是“start”则是开始，记录当前时间和id。若是“end”则是运行结束时，则找出当前函数的在函数数组
                        的对象添加当前时间减去前一个运行时时间
					</p>
                    <div class="code">
                        <pre>
                           <code>
                                {`
    var exclusiveTime = function(n, logs) {
        let ret = new Array(n).fill(0);
        let stack = [];//记录上一个未end的函数的id值。
        let pre = 0;//前一个状态的位置。
        for(ch of logs){
            let temp = ch.split(':');
            let id = temp[0] ;
            let status = temp[1];
            let time_str= temp[2] ;
            if(status === "start"){
                //如果是start状态就把之前的时间加到上一个函数中
                if(stack.length){
                    ret[stack[stack.length -1]] += time_str - pre;
                }
                pre = time_str;
                stack.push(id);
            }else{
                //如果是end把之前的时间加到当前函数中。
                ret[id] += time_str - pre + 1;
                pre = parseInt(time_str)  + 1;
                stack.pop();
            }
        }
        return ret;
    }                        
                                `}
                            </code>
                        </pre>
                    </div>
                </div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/longest-well-performing-interval/"
							target="_blank" rel="noopener noreferrer">leetcode #1124 表现良好的最长时间段</a>
					</h5>
					<p>
						思路：这个996问题不好解释，用的是前缀和的方法,用图先演示一遍。
                        <br/>
                        1、先将大于8的时间计算出来，然后利用前缀和的方法算下一步
					</p>
                    <img src={stack02} alt="基本计算器"/>
                    <div class="code">
                        <pre>
                           <code>
                                {`
    var longestWPI = function (hours) {
        let preSum = new Array(hours.length + 1).fill(0)
        // 加1 是为了上图前面的 0
        for (let i = 1; i <= hours.length; i++) {
            preSum[i] = hours[i-1] > 8?preSum[i - 1] + 1: preSum[i - 1] - 1
        }
        // 到这里preSum 已经完成上图的中间显示部分
        let max = 0
        for (let i = 0; i< preSum.length-1; i++){
            for (let j =i+1; j< preSum.length; j++){
                if (preSum[j] - preSum[i] >0){
                // 下面是关键一步，如果当前值比之前的最大值大，替换最大值    
                    max = Math.max(max, j-i)
                }
            }
        }
        return max
    }                            
                                `}
                            </code>
                        </pre>
                    </div>  
                </div>    
            </div>
        )
    }
})