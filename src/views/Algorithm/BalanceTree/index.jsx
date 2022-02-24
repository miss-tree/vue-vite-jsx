import {defineComponent} from 'vue'
// import CardinalitySort from '@/views/Algorithm/img/CardinalitySort.gif' 

export default defineComponent({
    name:'BalanceTree',
    setup(){
        return ()=>(
            <div class='contentCenter'>
                <div>
                    <h3>AVL树</h3>
                    <p>
                    </p>
                    {/* <img src={CardinalitySort} alt="归并排序"/> */}
                </div>
                <div>
                    <h5>AVL树应用场景</h5>
                    <ul>
                        <li>
                           。。。
                        </li>
                    </ul>
                </div>
                <div>
					<h5>LeetCode题</h5>
					<ul>
						<li>leetcode #面试题 04.06. 后继者</li>
						<li>LeetCode #450. 删除二叉搜索树中的节点</li>
						<li>leetcode #1382. 将二叉搜索树变平衡</li>
						<li>LeetCode #108. 将有序数组转换为二叉搜索树</li>
						<li>LeetCode #98. 验证二叉搜索树</li>
						<li>LeetCode #501. 二叉搜索树中的众数</li>
						<li>LeetCode #面试题 17.12. BiNode</li>
						<li>LeetCode #剑指 Offer 33. 二叉搜索树的后序遍历序列</li>
						<li>LeetCode #1008. 前序遍历构造二叉搜索树</li>
						<li>LeetCode #面试题 04.09. 二叉搜索树序列</li>
					</ul>
				</div>
				<div>
					<h5 id="path-sum">
						<a href="https://leetcode-cn.com/problems/successor-lcci/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 面试题 04.06. 后继者</a>
					</h5>
					<p>
						思路：... 
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var inorderSuccessor = function(root, p) {
        if(!root) return null 
        let arr = [] 
        let ret = 0 
        const dfs = (root) => { 
            if(!root) return 
            dfs(root.left) 
            arr.push(root) 
            if(root === p) { ret = arr.length }
            dfs(root.right) 
        }
        dfs(root) 
        return arr[ret] || null
    };              
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/delete-node-in-a-bst/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 450. 删除二叉搜索树中的节点</a>
					</h5>
					<p>
						思路：。。。 
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var MaxQueue = function() {
        this.queue1 = []; 
        this.queue2 = [];
    };
    
    /**
     * @return {number}
     */
    MaxQueue.prototype.max_value = function() {
        if (this.queue2.length) { 
            return this.queue2[0]; 
        }
        return -1;
    };
    
    /** 
     * @param {number} value
     * @return {void}
     */
    MaxQueue.prototype.push_back = function(value) {
        this.queue1.push(value); 
        while (this.queue2.length && this.queue2[this.queue2.length - 1] < value) { 
            this.queue2.pop(); 
        }
        this.queue2.push(value);
    };
    
    /**
     * @return {number}
     */
    MaxQueue.prototype.pop_front = function() {
        if (!this.queue1.length) { return -1; }
        const value = this.queue1.shift(); 
        if (value === this.queue2[0]) { this.queue2.shift(); }
        return value;
    };
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/balance-a-binary-search-tree/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 1382. 将二叉搜索树变平衡</a>
					</h5>
					<p>
						思路：...。
						<br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
        var balanceBST = function(root) {
            const trees = [] 
            inorder(root) 
            return buildTree(trees) 
            function inorder(root) { 
                if (root === null) return 
                inorder(root.left) 
                trees.push(root.val) 
                inorder(root.right) 
            }
            function buildTree(arr) { 
                if (arr.length === 0) return null 
                const mid = arr.length >> 1 
                const root = new TreeNode(arr[mid]) 
                root.left = buildTree(arr.slice(0, mid)) 
                root.right = buildTree(arr.slice(mid + 1)) 
                return root 
            }
        };            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 108. 将有序数组转换为二叉搜索树</a>
					</h5>
					<p>
						思路：....
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    const buildTree = (nums, l, r) => { 
        if (l > r) return null; 
        // 构成不了区间，返回null 
        let mid = (l + r) >>> 1; 
        // 求中间索引 
        let root = new TreeNode(nums[mid]); 
        // 构建当前节点 
        root.left = buildTree(nums, l, mid - 1); 
        // 构建左子树 
        root.right = buildTree(nums, mid + 1, r); 
        // 构建右子树 
        return root; 
   }
   
   var sortedArrayToBST = function(nums) {
       return buildTree(nums, 0, nums.length - 1); // 递归的入口
   };                     
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/validate-binary-search-tree/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 98. 验证二叉搜索树</a>
					</h5>
					<p>
						思路：。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    const inorder = (root, lower, upper) => { 
        if (root === null) { return true; }
        if (root.val <= lower || root.val >= upper) { return false; }
        return inorder(root.left, lower, root.val) && inorder(root.right, root.val, upper); 
    }
    
    var isValidBST = function(root) {
        return inorder(root, -Infinity, Infinity);
    };                      
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/"
							target="_blank" rel="noopener noreferrer">leetcode 501. 二叉搜索树中的众数</a>
					</h5>
					<p>
						思路：。。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var findMode = function(root) {
        //中序遍历，众数连续出现 
        //所用众数组成的数组 
        let res=[]; 
        //前一个众数的个数 
        let maxCount=0; 
        //当前数的个数 
        let count=0; 
        //基准数，即拿来计较的数 
        let base=root.val; 
        const update=(n)=>{
            if(!n) return; 
            if(n.val===base){ count+=1; }else{count=1; base=n.val; }
            if(count===maxCount){ res.push(base); }
            if(count>maxCount){ maxCount=count; res=[base]; } 
        }
        const inorder=(n)=>{ 
            if(!n) return; 
            inorder(n.left); 
            update(n);
            inorder(n.right); 
        }
        inorder(root); 
        return res;
    };                 
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/binode-lcci/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 面试题 17.12. BiNode</a>
					</h5>
					<p>
						思路：....。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var convertBiNode = function(root) {
        let head = null;
        //转换完之后的链表的头节点 
        let pre = null;
        //代表前一个节点 
        function inorder(node) { 
            if (!node) { return }
            const nodeL = node.left 
            const nodeR = node.right 
            node.left = null 
            node.right = null 
            inorder(nodeL) 
            if (pre) { // 当前节点不是第一个节点，前一个节点向后指当前一个节点 
                pre.right = node 
            }if (!head) {//证明当前是第一个节点 
                head = node 
            }
            pre = node 
            inorder(nodeR) 
        }
        inorder(root)
        return head
    };    
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 剑指 Offer 33. 二叉搜索树的后序遍历序列</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var inorder = function(nums,l,r,p) { 
        if(l > r) return true; 
        let ind = l; 
        while(nums[ind] < nums[r]) ++ind; 
        if(!inorder(nums,l,ind-1,p)) 
        return false; 
        if(p != -1 && nums[r] <= nums[p]) return false; 
        p = r; 
        if(!inorder(nums,ind,r - 1,p)) return false; 
        return true;
    }
    var verifyPostorder = function(postorder) {
        let pre = -1; 
        return inorder(postorder,0,postorder.length - 1,pre);
    };                      
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/construct-binary-search-tree-from-preorder-traversal/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 1008. 前序遍历构造二叉搜索树</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var buildTree = function(nums,l,r) { 
        if(l > r) return null; 
        let ind = l + 1; 
        while(ind <= r && nums[ind] < nums[l]) ++ind;
        //证明ind指向左子树 
        let root = new TreeNode(nums[l]); 
        root.left = buildTree(nums,l + 1,ind - 1); 
        root.right = buildTree(nums,ind ,r); 
        return root; 
    }; 
    var bstFromPreorder = function(preorder) {
        return buildTree(preorder,0,preorder.length-1); // 传入前序遍历的结果
    };                         
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/bst-sequences-lcci/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 面试题 04.09. 二叉搜索树序列 </a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var BSTSequences = function(root) {
        if(root === null) return [[]]; 
        let ret = []; 
        let l_arr = BSTSequences(root.left), r_arr = BSTSequences(root.right); 
        for(let ls of l_arr ){ 
            for(let rs of r_arr ){ 
                let buff = interleave(ls, rs); 
                for(let c of buff){ ret.push([root.val].concat(c)); } 
            } 
        }
        return ret;
    };
    function interleave(arr1, arr2){ 
        let i = 0; 
        let ret = [[arr1,0]]; 
        while(i<arr2.length){ 
            let cur = arr2[i]; 
            let tmp = []; 
            i++; 
            for(let [r,start] of ret){ 
                for(let j=start; j<=r.length; j++){ 
                    tmp.push([r.slice(0,j).concat([cur]).concat(r.slice(j)),j+1]); 
                } 
            }
            ret = tmp; 
        }
        return ret.map(x=>x[0]); 
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