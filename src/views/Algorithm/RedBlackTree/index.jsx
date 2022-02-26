import {defineComponent} from 'vue'
// import CardinalitySort from '@/views/Algorithm/img/CardinalitySort.gif' 

export default defineComponent({
    name:'RedBlackTree',
    setup(){
        return ()=>(
            <div class='contentCenter'>
                <div>
                    <h3>红黑树</h3>
                    <p>
                    </p>
                    {/* <img src={CardinalitySort} alt="归并排序"/> */}
                </div>
                <div>
                    <h5>红黑树应用场景</h5>
                    <ul>
                        <li>
                           。。。
                        </li>
                    </ul>
                </div>
                <div>
					<h5>LeetCode题</h5>
					<ul>
						<li>leetcode #981. 基于时间的键值存储</li>
						<li>LeetCode #971. 翻转二叉树以匹配先序遍历</li>
						<li>leetcode #1339. 分裂二叉树的最大乘积</li>
						<li>LeetCode #449. 序列化和反序列化二叉搜索树</li>
						<li>LeetCode #剑指 Offer II 053. 二叉搜索树中的中序后继</li>
						<li>LeetCode #117. 填充每个节点的下一个右侧节点指针 II</li>
						<li>LeetCode #78. 子集</li>
						<li>LeetCode #220. 存在重复元素 III</li>
						<li>LeetCode #47. 全排列 II</li>
						<li>LeetCode #41. 缺失的第一个正数</li>
						<li>LeetCode #46. 全排列</li>
						<li>LeetCode #43. 字符串相乘</li>
						<li>LeetCode #155. 最小栈</li>
						<li>LeetCode #496. 下一个更大元素 I</li>
						<li>LeetCode #503. 下一个更大元素 II</li>
						<li>LeetCode #901. 股票价格跨度</li>
						<li>LeetCode #739. 每日温度</li>
						<li>LeetCode #84. 柱状图中最大的矩形</li>
						<li>LeetCode #42. 接雨水</li>
						<li>LeetCode #456. 132 模式</li>
						<li>LeetCode #907. 子数组的最小值之和</li>
						<li>LeetCode #1856. 子数组最小乘积的最大值I</li>
					</ul>
				</div>
				<div>
					<h5 id="path-sum">
						<a href="https://leetcode-cn.com/problems/time-based-key-value-store/"
							target="_blank" rel="noopener noreferrer">leetcode 981. 基于时间的键值存储</a>
					</h5>
					<p>
						思路：... 
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var TimeMap = function() {
        this.m = new Map();
    };
    
    TimeMap.prototype.set = function(key, value, timestamp) {
        this.m.has(key) ? this.m.get(key).push([value, timestamp]) : this.m.set(key, [[value, timestamp]]);
    };
    
    TimeMap.prototype.get = function(key, timestamp) {
        if (!this.m.has(key)) return ''; 
        let h = this.m.get(key), l = 0, r = h.length - 1, m; 
        while (l <= r) { 
            m = l + r >> 1; 
            if (h[m][1] <= timestamp) l = m + 1; 
            else r = m - 1; 
        }
        return r < 0 ? '' : h[r][0];
    };             
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/flip-binary-tree-to-match-preorder-traversal/"
							target="_blank" rel="noopener noreferrer">leetcode 971. 翻转二叉树以匹配先序遍历</a>
					</h5>
					<p>
						思路：。。。 
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var flipMatchVoyage = function(root, voyage) {
        if(root.val !== voyage[0]) return [-1]; 
        const ret = []; 
        let pos = 0; 
        const dfs = root => { 
            pos++ ; 
            if(root.left && root.left.val === voyage[pos] ){ dfs(root.left); }
            if(root.right && root.right.val === voyage[pos] ){ 
                dfs(root.right) ; 
                if(root.left && root.left.val === voyage[pos] ){ 
                    ret.push(root.val); 
                    dfs(root.left); 
                } 
            } 
        }
        dfs(root); 
        if(pos<voyage.length){ return [-1]; }
        return ret;
    };
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/maximum-product-of-splitted-binary-tree/"
							target="_blank" rel="noopener noreferrer">leetcode 1339. 分裂二叉树的最大乘积</a>
					</h5>
					<p>
						思路：...。
						<br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
        let avg,ans = 0; 
        var maxProduct = function(root) {
            let total = getTotal(root); 
            avg = total / 2; 
            ans = total; getTotal(root); 
            return ans * (total - ans) % (10 ** 9 + 7)
        };
        var getTotal = function(root){ 
            if(root == null) return 0; 
            let val = root.val + getTotal(root.left) + getTotal(root.right); 
            if(Math.abs(val - avg) < Math.abs(ans - avg)) ans = val; 
            return val; 
        }             
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/serialize-and-deserialize-bst/"
							target="_blank" rel="noopener noreferrer">leetcode 449. 序列化和反序列化二叉搜索树</a>
					</h5>
					<p>
						思路：....
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var serialize = function(root) {
        if (root === null) { return ''; }
        let stringArray = [];
        var postDFS = function (node) { 
            if (node === null) { return; }
            stringArray.push(node.val) 
            postDFS(node.left); 
            postDFS(node.right); 
        }
        postDFS(root) 
        return stringArray.join(' ');
    };
    
    var deserialize = function(data) {
        if (data.length === 0) { return null; }
        let preorder = data.split(' ').map(item => { return Number.parseInt(item); })
        let inorder = [...preorder]; 
        inorder.sort((a, b) => { return a - b; })
        let preLen = preorder.length ; 
        let inLen = inorder.length; 
        let map = new Map(); 
        for (let i = 0; i < inLen; i++) { map.set(inorder[i], i); }
        const build = function (preorder, preLeft, preRight, map, inLeft, inRight) { 
            if (preLeft > preRight || inLeft > inRight) { return null; }
            let root = new TreeNode(preorder[preLeft]); 
            let pIndex = map.get(root.val); 
            root.left = build(preorder, preLeft + 1, pIndex - inLeft + preLeft, map, inLeft, pIndex - 1); 
            root.right = build(preorder, pIndex - inLeft + preLeft + 1, preRight, map, pIndex + 1, inRight); 
            return root; 
        }
        return build(preorder, 0, preLen - 1, map, 0, inLen - 1);
    };                       
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/P5rCT8/"
							target="_blank" rel="noopener noreferrer">leetcode 剑指 Offer II 053. 二叉搜索树中的中序后继</a>
					</h5>
					<p>
						思路：。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    let pre,ans;//pre 中序遍历的前一个节点，ans 查找节点就是特定节点在中序后继中的后继节点 
    var inorder = function(root, p) { 
        if(root == null) return false; 
        if(inorder(root.left,p)) return true; 
        //如果当前中序遍历的前一个节点等于当前节点，那么当前节点就是要找的后继节点 
        if(pre == p){ 
            ans = root; 
            return true; 
        }
        pre = root; 
        if(inorder(root.right,p)) return true; 
        return false; 
    };
    var inorderSuccessor = function(root, p) {
        let pre = ans = null;//先赋值为空地址 
        inorder(root,p); return ans;
    };                       
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/"
							target="_blank" rel="noopener noreferrer">leetcode 117. 填充每个节点的下一个右侧节点指针 II</a>
					</h5>
					<p>
						思路：。。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var connect = function(root) {
        let p = root; 
        while(p = lay_connect(p)); 
        return root;    
    };
    var lay_connect = function(head) { 
        let p = head,pre = null,new_head = null; 
        //pre 下一层连接节点的下一个节点 ， new_head 下一层链表的起始位置 
        // 记录本层链表 
        while(p){ 
            if(p.left){//左子树不为空，pre前面右节点开始记录 
                if(pre) pre.next = p.left; 
                pre = p.left; 
            }
            if(new_head == null) new_head = pre; 
            if(p.right){ 
                if(pre) pre.next = p.right; 
                pre = p.right; 
            }
            if(new_head == null) new_head = pre; 
            p = p.next; 
        }
        return new_head; 
    };                
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/subsets/"
							target="_blank" rel="noopener noreferrer">leetcode 78. 子集</a>
					</h5>
					<p>
						思路：....。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var subsets = function(nums) {
        const n = nums.length; 
        const ret = []; // i 代表着一种选取元素的方法 
        for (let i = 0; i < (1 << n); ++i) { 
            const arr = []; // 枚举I这个数字的n位 
            for (let j = 0; j < n; ++j) { 
                // 如果I的数字第J位等于1，证明第J个数字是我们选择的
                if (i & (1 << j)) { arr.push(nums[j]); } 
            }
            ret.push(arr); 
        }
        return ret;
    };    
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/contains-duplicate-iii/"
							target="_blank" rel="noopener noreferrer">leetcode 220. 存在重复元素 III</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var containsNearbyAlmostDuplicate = function(nums, k, t) {
        function getId(x) { 
            return Math.floor(x / (t + 1)); 
        }
        if (t < 0) return false; 
        const map = new Map(); 
        for (let i = 0; i < nums.length; i++) { 
            const m = getId(nums[i]); 
            if (map.has(m)) { return true; } 
            else if (map.has(m + 1) && Math.abs(map.get(m + 1) - nums[i]) <= t) { return true; } 
            else if (map.has(m - 1) && Math.abs(map.get(m - 1) - nums[i]) <= t) { return true; }
            map.set(m, nums[i]); 
            if (i >= k) { map.delete(getId(nums[i - k])); } 
        }
        return false;
    };                       
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/permutations-ii/"
							target="_blank" rel="noopener noreferrer">leetcode 47. 全排列 II</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var permuteUnique = function(nums) {
        let res = []; 
        let len = nums.length 
        nums.sort((a,b)=>{ //排序 
            return a-b 
        })
        unique([],0) 
        return res 
        function unique(arr) { 
            if(arr.length == len) res.push([...arr]) 
            for(let i=0;i<nums.length;i++){ 
                if(nums[i] == nums[i-1]) continue // 跳过，避免重复结果 
                arr.push(nums[i]) 
                nums.splice(i,1) 
                unique(arr) 
                nums.splice(i,0,arr.pop()) // 回溯 
            } 
        }
    };                         
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/first-missing-positive/"
							target="_blank" rel="noopener noreferrer">leetcode 41. 缺失的第一个正数 </a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var firstMissingPositive = function(nums) {
        for(let i = 0; i < nums.length; i++){ 
            while(nums[i] != i + 1){ 
                if(nums[i] <= 0 || nums[i] > nums.length) break; 
                let ind = nums[i] - 1; 
                if(nums[i] == nums[ind]) break; 
                [nums[i],nums[ind]] = [nums[ind],nums[i]]; 
            } 
            }// 到这，上面的代码就已经把所有的数字都放到正确的数字 
            let ind = 0; 
            while(ind < nums.length && nums[ind] == ind + 1) ++ind;
            //ind存放的是正确的数字， ind会继续往后指 
            return ind + 1;
    };                           
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/permutations/"
							target="_blank" rel="noopener noreferrer">leetcode 46. 全排列</a>
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
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/multiply-strings/"
							target="_blank" rel="noopener noreferrer">leetcode 43. 字符串相乘</a>
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
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/min-stack/"
							target="_blank" rel="noopener noreferrer">leetcode 155. 最小栈</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var MinStack = function() {
        this.x_stack = []; 
        this.min_stack = [Infinity];
    };
    
    /** 
     * @param {number} val
     * @return {void}
     */
    MinStack.prototype.push = function(x) {
        this.x_stack.push(x); 
        this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x))
    };  
    
    /**
     * @return {void}
     */
    MinStack.prototype.pop = function() {
        this.x_stack.pop(); 
        this.min_stack.pop();
    };
    
    /**
     * @return {number}
     */
    MinStack.prototype.top = function() { 
        return this.x_stack[this.x_stack.length - 1]; 
    };
    /**
     * @return {number}
     */
    MinStack.prototype.getMin = function() {
        return this.min_stack[this.min_stack.length - 1];
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/next-greater-element-i/"
							target="_blank" rel="noopener noreferrer">leetcode 496. 下一个更大元素 I</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var nextGreaterElement = function(nums1, nums2) {
        let map = new Map(), stack = [], ans = []; 
        nums2.forEach(item => { 
            while(stack.length && item > stack[stack.length-1]){ 
                map.set(stack.pop(), item) 
            };
            stack.push(item); 
        }); 
        stack.forEach(item => map.set(item, -1)); 
        nums1.forEach(item => ans.push(map.get(item))); 
        return ans;
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/next-greater-element-ii/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 503. 下一个更大元素 II</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var nextGreaterElements = function(nums) {
        const n = nums.length; 
        const ret = new Array(n).fill(-1); 
        const stk = []; 
        for (let i = 0; i < n * 2 - 1; i++) { 
            while (stk.length && nums[stk[stk.length - 1]] < nums[i % n]) { 
                ret[stk[stk.length - 1]] = nums[i % n]; 
                stk.pop(); 
            }
            stk.push(i % n); 
        }
        return ret;
    };                                
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/online-stock-span/"
							target="_blank" rel="noopener noreferrer">leetcode 901. 股票价格跨度</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var StockSpanner = function() {
        this.stack = []; 
        this.count = 0;
    };
    
    /** 
     * @param {number} price
     * @return {number}
     */
    StockSpanner.prototype.next = function(price) {
        while (this.stack.length && price >= this.stack[this.stack.length - 1].value) { 
            this.stack.pop(); 
        }
        let tmp = this.stack.length ? this.stack[this.stack.length - 1].index : 0; 
        this.count++; 
        this.stack.push({ index: this.count, value: price }); 
        return this.count - tmp;
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/daily-temperatures/"
							target="_blank" rel="noopener noreferrer">leetcode 739. 每日温度</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var dailyTemperatures = function(T) {
        let stack = [] 
        let res = Array(T.length).fill(0) 
        for (let i = 0;i < T.length;i++) { 
            while (stack.length && T[i] > T[stack[stack.length - 1]]) { 
                let len = stack.length 
                if (T[i] > T[stack[len - 1]]) { 
                    res[stack[len - 1]] = i - stack[len - 1] 
                    stack.pop() 
                } 
            }
            stack.push(i) 
        }
        return res
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/largest-rectangle-in-histogram/"
							target="_blank" rel="noopener noreferrer">leetcode 84. 柱状图中最大的矩形</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var largestRectangleArea = function(heights) {
        let stack = []; 
        let l = new Array(heights.length),r = new Array(heights.length); 
        let n = heights.length; 
        for(let i = 0;i < n; i++) l[i] = -1,r[i] = n; 
        for(let i = 0;i < n; i++) { 
            while(stack.length && heights[i] <= heights[stack[stack.length - 1]] ) { 
                r[stack[stack.length - 1]] = i; 
                stack.pop(); 
            }
            if(stack.length) l[i] = stack[stack.length - 1]; 
            stack.push(i) 
        }
        let ans = 0; 
        for(let i = 0; i < n ;i++){ 
            ans = Math.max(ans, heights[i] * (r[i]-l[i]-1)); 
        }
        return ans;
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/trapping-rain-water/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 42. 接雨水</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var trap = function(height) {
        let ans = 0; 
        const stack = []; 
        const n = height.length; 
        for (let i = 0; i < n; ++i) { 
            while (stack.length && height[i] > height[stack[stack.length - 1]]) { 
                const top = stack.pop(); 
                if (!stack.length) { break; }
                const left = stack[stack.length - 1]; 
                const currWidth = i - left - 1; 
                const currHeight = Math.min(height[left], height[i]) - height[top]; 
                ans += currWidth * currHeight; 
            }
            stack.push(i); 
        }
        return ans;
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/132-pattern/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 456. 132 模式</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var find132pattern = function(nums) {
        let stack = [], med = -Infinity 
        for (let i = nums.length - 1; i >= 0; i--) { 
            if (nums[i] < med) return true 
            while (stack.length > 0 && stack[stack.length - 1] < nums[i]) { 
                med = stack.pop() 
            }
            stack.push(nums[i]) 
        }
        return false
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/sum-of-subarray-minimums/"
							target="_blank" rel="noopener noreferrer">leetcode 907. 子数组的最小值之和</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var sumSubarrayMins = function(arr) {
        let stack = []; 
        let mod_num = 1e9 + 7; 
        let ans = 0; 
        let sum = new Array(arr.length + 1); 
        sum[0] = 0; 
        for(let i = 0;i < arr.length;i++){ 
            while(stack.length && arr[i] <= arr[stack[stack.length - 1]] ) stack.pop(); 
            let ind = stack.length ? stack[stack.length - 1] : -1; 
            stack.push(i); 
            sum[stack.length] = (sum[stack.length - 1] + arr[i] *(i - ind)) % mod_num;
            ans += sum[stack.length]; 
            ans %= mod_num; 
        }
        return ans;
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/maximum-subarray-min-product/"
							target="_blank" rel="noopener noreferrer">leetcode 1856. 子数组最小乘积的最大值</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var maxSumMinProduct = function(nums) {
        // 前缀和 
        const sum = [0]; 
        const mod = 1e9 + 7; 
        for(let i = 1; i <= nums.length; i++) { sum[i] = sum[i - 1] + nums[i - 1]; }
        // 使用单调栈求解出左侧第个严格小于该数的元素位置，和右侧第一个严格小于该数的元素的位置 
        let stack = []; 
        const len = nums.length; 
        const right = new Array(len).fill(len); 
        for(let i = 0; i < len; i++) { 
            while(stack.length && nums[stack[stack.length - 1]] > nums[i]) { 
                right[stack[stack.length - 1]] = i; 
                stack.pop(); 
            }
            stack.push(i) 
        }
        stack = [];
        const left = new Array(len).fill(-1); 
        for(let j = len - 1; j >= 0; j--) { 
            while(stack.length && nums[stack[stack.length - 1]] > nums[j]) { 
                left[stack[stack.length - 1]] = j; 
                stack.pop(); 
            }
            stack.push(j); 
        }
        // 根据前缀和和left， right数组进行枚举求解 
        let max = BigInt(0); 
        for(let k = 0; k < len; k++) { 
            const total = BigInt(sum[right[k]] - sum[left[k] + 1]) * BigInt(nums[k]); 
            if (max < total) { max = total; } 
        }
        return max % BigInt(mod);
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
            </div>
        )
    }
})