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

						<li>LeetCode #99. 恢复二叉搜索树</li>
						<li>LeetCode #653. 两数之和 IV - 输入 BST</li>
						<li>LeetCode #204. 计数质数</li>
						<li>LeetCode #504. 七进制数</li>
						<li>LeetCode #461. 汉明距离</li>
						<li>LeetCode #528. 按权重随机选择</li>
						<li>LeetCode #382. 链表随机节点</li>
						<li>LeetCode #462. 最少移动次数使数组元素相等 II</li>
						<li>LeetCode #77. 组合</li>
						<li>LeetCode #234. 回文链表</li>
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
						<a href="https://leetcode-cn.com/problems/recover-binary-search-tree/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 99. 恢复二叉搜索树</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    // pre记录前一个值，p指向第一个值，q指向最后一个值。p 和 q都是指向两个被交换的节点 
    let pre,p,q; 
    var inorder = function(root) { 
        if(root == null) return; 
        inorder(root.left); // 从小到大依次访问每一个节点 
        // 当前值小于前一个值 
        if(pre && root.val < pre.val){ // p指向第一个值 
            if(p == null) p = pre; // q指向最后一个值 
            q = root; 
        }// 把前一个节点更新为root 
        pre = root; 
        inorder(root.right); 
        return; 
    }; 
    var recoverTree = function(root) {
        pre = p = q = null; 
        inorder(root); // 交换p 和 q的值 
        let temp; 
        temp = p.val; 
        p.val = q.val; 
        q.val = temp; 
        return;
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/"
							target="_blank" rel="noopener noreferrer">leetcode 653. 两数之和 IV - 输入 BST</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var inorder = function(root, ret) { 
        if(root == null) return; 
        inorder(root.left,ret); 
        // ret数组中依次按着从小到大的顺序，存储二叉树的节点值 
        ret.push(root.val); 
        inorder(root.right,ret); 
        return; 
    };
    var findTarget = function(root, k) {
        let ret = []; 
        inorder(root,ret); 
        // 设置头p尾q指针 
        let p = 0, q = ret.length - 1; 
        while(p < q && ret[p] + ret[q] - k){ 
            // 如果小于k，头指针往后走，否则，尾指针往前走 
            if(ret[p] + ret[q] < k) p += 1; else q -= 1; 
        }
        // 如果p还是小于q,证明这个时候二叉排序树中存在两个值相加等于k 
        return p < q;
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/count-primes/"
							target="_blank" rel="noopener noreferrer">leetcode 204. 计数质数</a>
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
						<a href="https://leetcode-cn.com/problems/base-7/"
							target="_blank" rel="noopener noreferrer">leetcode 504. 七进制数</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var convertToBase7 = function(num) {
        let next = Math.abs(num) 
        let res = '' 
        while(next >= 7){ 
            res = next % 7 + res 
            next = next / 7 | 0 
        }
        res = next + res 
        return num < 0 ? '-' + res : res
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/hamming-distance/"
							target="_blank" rel="noopener noreferrer">leetcode 461. 汉明距离</a>
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
						<a href="https://leetcode-cn.com/problems/random-pick-with-weight/"
							target="_blank" rel="noopener noreferrer">leetcode 528. 按权重随机选择</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var Solution = function(w) {
        pre = new Array(w.length).fill(0); 
        pre[0] = w[0]; 
        for (let i = 1; i < w.length; ++i) { 
            pre[i] = pre[i - 1] + w[i]; 
        }
        this.total = _.sum(w);
    };
    
    Solution.prototype.pickIndex = function() {
        const x = Math.floor((Math.random() * this.total)) + 1; 
        const binarySearch = (x) => { 
            let low = 0, high = pre.length - 1; 
            while (low < high) { 
                const mid = Math.floor((high - low) / 2) + low; 
                if (pre[mid] < x) { low = mid + 1; } 
                else { high = mid; } 
            }
            return low; 
        }
        return binarySearch(x);
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/linked-list-random-node/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 382. 链表随机节点</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var Solution = function(head) {
        this.head = head
    };
    
    Solution.prototype.getRandom = function() {
        let num = 0 
        let res = null 
        let head = this.head 
        while (head != null) { 
            num++ 
            if (!Math.floor(Math.random() * num)) res = head.val 
            head = head.next 
        }return res
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements-ii/"
							target="_blank" rel="noopener noreferrer">leetcode 462. 最少移动次数使数组元素相等 II</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var minMoves2 = function(nums) {
        nums.sort((a, b) => a - b); 
        let avg = nums[Math.ceil(nums.length/2) - 1]; 
        return nums.reduce((total, num) => { return total+Math.abs(num - avg) },0)
    };                           
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/combinations/"
							target="_blank" rel="noopener noreferrer">leetcode 77. 组合</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var combine = function(n, k) {
        const ans = []; 
        const dfs = (cur, n, k, temp) => { 
        // 剪枝：temp 长度加上区间 [cur, n] 的长度小于 k，不可能构造出长度为 k 的 temp 
        if (temp.length + (n - cur + 1) < k) { return; }// 记录合法的答案 
        if (temp.length == k) { ans.push(temp); return; }// 考虑选择当前位置 
        dfs(cur + 1, n, k, [...temp, cur]); 
        // 考虑不选择当前位置 
        dfs(cur + 1, n, k, temp); 
        }
        dfs(1, n, k, []); 
        return ans;
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/palindrome-linked-list/"
							target="_blank" rel="noopener noreferrer">leetcode 234. 回文链表</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    let frontPointer; 
    const recursivelyCheck = (currentNode) => { 
        if (currentNode !== null) { 
            if (!recursivelyCheck(currentNode.next)) { return false; }
            if (currentNode.val !== frontPointer.val) { return false; }
            frontPointer = frontPointer.next; 
        }
        return true; 
    } 
    var isPalindrome = function(head) {
        frontPointer = head; 
        return recursivelyCheck(head);
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
                                
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
            </div>
        )
    }
})