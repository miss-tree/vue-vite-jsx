import {defineComponent} from 'vue'
// import CardinalitySort from '@/views/Algorithm/img/CardinalitySort.gif' 

export default defineComponent({
    name:'QueueStack',
    setup(){
        return ()=>(
            <div class='contentCenter'>
                <div>
                    <h3>单调队列和单调栈 面试专题</h3>
                    <p>
                        ....
                    </p>
                    {/* <img src={CardinalitySort} alt="归并排序"/> */}
                </div>
                <div>
                    <h5>单调队列和单调栈应用场景</h5>
                    <ul>
                        <li>
                           。。。
                        </li>
                    </ul>
                </div>
                <div>
					<h5>LeetCode题</h5>
					<ul>
						<li>leetcode #21367. 二叉树中的列表</li>
						<li>LeetCode #958. 二叉树的完全性检验</li>
						<li>leetcode #剑指 Offer 36. 二叉搜索树与双向链表</li>
						<li>LeetCode #464. 我能赢吗</li>
						<li>LeetCode #172. 阶乘后的零</li>
						<li>LeetCode #384. 打乱数组</li>
						<li>LeetCode #437. 路径总和 III</li>
						<li>LeetCode #395. 至少有 K 个重复字符的最长子串</li>
						<li>LeetCode #190. 颠倒二进制位</li>
						<li>LeetCode #8. 字符串转换整数 (atoi)</li>
						<li>LeetCode #380. O(1) 时间插入、删除和获取随机元素</li>
						<li>LeetCode #402. 移掉 K 位数字</li>
						<li>LeetCode #1081. 不同字符的最小子序列</li>
						<li>LeetCode #1499. 满足不等式的最大值</li>
						<li>LeetCode #316. 去除重复字母</li>
					</ul>
				</div>
				<div>
					<h5 id="path-sum">
						<a href="https://leetcode-cn.com/problems/linked-list-in-binary-tree/"
							target="_blank" rel="noopener noreferrer">leetcode 1367. 二叉树中的列表</a>
					</h5>
					<p>
						思路：... 
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
     var judge = function(root,head){ 
        if(head == null) return true; 
        if(root == null) return false; 
        if(root.val != head.val) return false; 
        // 这里证明root节点的值，等于head节点的值 
        // 捋着向下比较左子树，向下比较右子树 
        // 在左右子树中 找到任意一条路径 能够匹配到 链表剩余部分的节点 证明能够匹配成功 
        return judge(root.left,head.next) || judge(root.right,head.next); 
    }
    /**
     * @param {ListNode} head
     * @param {TreeNode} root
     * @return {boolean}
     */
    var isSubPath = function(head, root) {
        // 在一颗树上面找一条空链表肯定能找到 
        if(head == null) return true; 
        if(root == null) return false; 
        // 从root开始捋着比较，是否能找到连续的符合题意的链表 
        if(root.val == head.val && judge(root,head))return true;
        //否则就递归地比较 用树中的每一个节点依次比较链表中的头节点 
        return isSubPath(head,root.left) || isSubPath(head,root.right);
    };             
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/check-completeness-of-a-binary-tree/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 958. 二叉树的完全性检验</a>
					</h5>
					<p>
						思路：。。。 
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
     // 数一数二叉树里面有多少个节点 
     var countNodeNum = function(root) { 
         if(root == null) return 0; 
         return countNodeNum(root.left) + countNodeNum(root.right) + 1; 
        };
        var judge = function(root,n,m) { 
            if(root == null) return n == 0; 
            if(n == 0) return false; 
            if(n == 1) return root.left == null && root.right == null; 
            let k = Math.max(0,2 * m - 1); 
            let l = Math.min(m ,n - k),r = n - k - l; 
            return judge(root.left,(k - 1) / 2 + l, m / 2) && judge(root.right,(k - 1) / 2 + r,m / 2); 
        };
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    var isCompleteTree = function(root) {
        if(root == null) return true; 
        let n = countNodeNum(root),m = 1,cnt = 1; 
        while(cnt + 2 * m <= n){ 
            m *= 2; 
            cnt += m; 
        }
        return judge(root,n,m)
    };
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 剑指 Offer 36. 二叉搜索树与双向链表</a>
					</h5>
					<p>
						思路：...。
						<br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
        var in_order = function(root){ 
            if(root == null) return; 
            // 搭建中序遍历的过程 
            in_order(root.left); 
            // 在中序遍历的过程中做操作 
            if(pre == null){ head = root; } 
            else { pre.right = root; }
            root.left = pre; 
            pre = root; 
            in_order(root.right); 
            return; 
        }
        /**
         * @param {Node} root
         * @return {Node}
         */
        var treeToDoublyList = function(root) {
            if(root == null) return null; 
            head = pre = null; 
            // 中序遍历，得到一条链表，head是链表的头，pre是链表的尾部， 
            in_order(root); 
            // 把链表连接起来，变成循环双端链表 
            head.left = pre; 
            pre.right = head; 
            return head;
        };             
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/can-i-win/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 464. 我能赢吗</a>
					</h5>
					<p>
						思路：....
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var canIWin = function(maxChoosableInteger, desiredTotal) {
        // 直接获胜 
        if (maxChoosableInteger >= desiredTotal) return true; 
        // 全部拿完也无法到达 
        var sum = maxChoosableInteger * (maxChoosableInteger + 1) / 2; 
        if (desiredTotal > sum) return false; 
        // 记忆化 
        var dp = {};
        function f(total, state) { 
            // 有缓存 
            if (dp[state] !== undefined) return dp[state]; 
            for (var i = 1; i <= maxChoosableInteger; i++) { 
                var curr = 1 << i; 
                // 已经抽过这个数 
                if (curr & state) continue; 
                // 直接获胜 
                if (i >= total) return dp[state] = true; 
                // 可以让对方输 
                if (!f(total - i, state | curr)) return dp[state] = true; 
            }
            // 没有任何让对方输的方法 
            return dp[state] = false; 
        }
        
        return f(desiredTotal, 0);
    };                      
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/factorial-trailing-zeroes/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 172. 阶乘后的零</a>
					</h5>
					<p>
						思路：。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var trailingZeroes = function(n) {
        let m = 5,cnt = 0; 
        while (n / m) { 
            cnt += Math.floor(n / m); 
            m *= 5; 
        }
        return cnt;
    };                       
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/shuffle-an-array/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 384. 打乱数组</a>
					</h5>
					<p>
						思路：。。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var Solution = function(nums) {
        this.nums = nums;
    };
    
    Solution.prototype.reset = function() {
        return this.nums;
    };
    
    Solution.prototype.shuffle = function() {
        const nums = this.nums.slice(0); let n = nums.length; 
        // 产生的结果有 n! 种可能 
        for (let i = 0; i < n; i++) { 
            // 从 i 到 n-1 随机选一个 
            const rand = randOne(i, n - 1); 
            // 交换nums数组i和rand下标的两个元素 
            [ nums[i], nums[rand] ] = [ nums[rand], nums[i] ]; 
        }
        return nums;
    };
    
    // 获取闭区间 [n, m] 内的一个随机整数 
    function randOne(n, m) { 
        return Math.floor(Math.random() * (m - n + 1)) + n; 
    };
                    
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/path-sum-iii/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 437. 路径总和 III</a>
					</h5>
					<p>
						思路：....。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    。。。。     
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 395. 至少有 K 个重复字符的最长子串</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var longestSubstring = function(s, k) {
        const n = s.length; 
        // 对原始字符串s的切割过程 
        return dfs(s, k);
    };
    // 对字符串进行tokenize，每个片段重复计算是否满足要求 
    const dfs = (s, k) => { 
        if(!s) return 0; 
        const cnt = new Array(26).fill(0); 
        // 统计当前片段中字符出现频度 
        for (const ch of s) { 
            cnt[ch.charCodeAt() - 'a'.charCodeAt()]++; 
        }
        for(let i=0;i<26;i++){ 
            if(cnt[i] && cnt[i]<k){ 
                const tokens=s.split(String.fromCharCode(i+'a'.charCodeAt())) 
                let ret=0; 
                for(const token of tokens){ 
                    const len=dfs(token,k) 
                    ret=Math.max(len,ret) 
                }
                return ret; 
            } 
        }
        return s.length; 
    };                       
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/reverse-bits/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 190. 颠倒二进制位</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var reverseBits = function(n) {
        let ret = 0; 
        for (let i = 0; i < 32 && n > 0; ++i) { 
            ret |= (n & 1) << (31 - i); n >>>= 1; 
        }
        return ret >>> 0;
    };                        
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/string-to-integer-atoi/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 8. 字符串转换整数 (atoi) </a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    // 一个字符串转换成一个整数，判断是否越界。 
    // 如果整数超过边界，就输出 边界值 
    // 就是考整数，最大的整数是2147483647 
    var myAtoi = function(str) {
        const number = parseInt(str, 10); 
        const Max = Math.pow(2, 31) - 1; 
        const Min = Math.pow(-2, 31); 
        // 无法转换的情况返回 0 
        if (isNaN(number)) { return 0; }
        // 转换结果超出范围的情况 
        if (number < Min || number > Max) { 
            return number < 0 ? Min : Max; 
        }
        return number;
    };                           
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/insert-delete-getrandom-o1/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 380. O(1) 时间插入、删除和获取随机元素</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var RandomizedSet = function() {
        this.h = {},this.a = []; 
        // 可以参考林位财同学set做法 
        // this.m = new Map(); this.data = [];
    };
    
    RandomizedSet.prototype.insert = function(val) {
        return this.h[val] === undefined && (this.a.push(val),this.h[val] = this.a.length - 1,true);
    };
    
    RandomizedSet.prototype.remove = function(val) {
        return this.h[val] !== undefined && ( [this.a[this.h[val]],this.a[this.a.length - 1]] = [this.a[this.a.length - 1],this.a[this.h[val]]], this.h[this.a[this.h[val]]] = this.h[val], this.a.pop(),delete(this.h[val]),true )
    };
    
    RandomizedSet.prototype.getRandom = function() {
        return this.a[Math.random() * this.a.length | 0];
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/remove-k-digits/"
							target="_blank" rel="noopener noreferrer">leetcode 402. 移掉 K 位数字</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var removeKdigits = function(num, k) {
        let n = num.length; 
        if (n <= k || n === 1) return '0'; 
        const handleStr = (str) => { 
            // 对前导0进行处理例如：“00200” 
            let i = 0; 
            while(str[i] == 0) i++; 
            if (i == str.length) return '0' 
            return str.slice(i) 
        }
        let stack = []; 
        let count = 0;
        for (let i = 0; i < n; i++) { 
            while (stack.length && stack[stack.length - 1] > num[i]) { 
                // 栈顶的值小于 当前值，栈顶出栈
                stack.pop(); 
                count++; 
                if (count === k) { 
                    // 当count === k" 直接返回 
                    return handleStr(stack.join('') + num.slice(i)) 
                    // 将栈里的元素和剩 余未入栈的元素拼接后进行处理 
                } 
            }    
            stack.push(num[i]) 
        }
        // num 为正序例如'12345678'情况，count < k从尾部直接截取 
        if (count < k) return handleStr(stack.join('').slice(0, count - k));
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters/"
							target="_blank" rel="noopener noreferrer">leetcode 1081. 不同字符的最小子序列</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var smallestSubsequence = function(s) {
        let arr = []; 
        for (let i = 0; i <= s.length - 1; i++) { 
            let str = s[i] 
            if (arr.includes(str)) continue; 
            while (arr.length > 0 && arr[arr.length - 1] > str && s.indexOf(arr[arr.length - 1], i) > i) { 
                arr.pop() 
            }
            arr.push(str) 
        }
        return arr.join("")
    };                          
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/max-value-of-equation/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 1499. 满足不等式的最大值</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var findMaxValueOfEquation = function(points, k) {
        let len = points.length, max = -Infinity, queue = []; 
        for (let j = 0; j < len; j++) { 
            let [xj, yj] = points[j];
            // 把队列头部不满足条件 |xi - xj| <= k 的元素 shift 掉 
            while (queue.length > 0 && xj - queue[0][0] > k) queue.shift(); 
            // 更新最大值 
            if (queue.length > 0) { 
                max = Math.max(queue[0][1] - queue[0][0] + xj + yj, max); 
            }
            // 在把当前的 points[j] push 加入到队尾之前，把队列尾部比 points[j] 的 yj-xj 
            // 小的元素 pop 掉，保证队列单调递减 
            while (queue.length > 0 && (queue[queue.length - 1][1] - queue[queue.length - 1][0]) < (yj - xj)) queue.pop(); 
            queue.push( points[j] ); 
        }
        return max;
    };                           
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/remove-duplicate-letters/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 316. 去除重复字母</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`                               
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

					
            </div>
        )
    }
})