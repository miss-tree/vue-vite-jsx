import { defineComponent, reactive } from 'vue'
import Binary01 from '@/views/Algorithm/img/Binary01.png'
import Binary02 from '@/views/Algorithm/img/Binary02.png'
import Binary03 from '@/views/Algorithm/img/Binary03.png'
import Binary04 from '@/views/Algorithm/img/Binary04.png'
import Binary06 from '@/views/Algorithm/img/Binary06.png'
import location from "comps/location/index.vue";

export default defineComponent({
  name: 'BinaryTree',
  methods () {
    goAnchor = (selector) => {
      var anchor = document.querySelector(selector); // 参数为要跳转到的元素id
      document.body.scrollTop = anchor.offsetTop; // chrome
      document.documentElement.scrollTop = anchor.offsetTop; // firefox
    }
  },
  components: { location },
  setup () {
    const state = reactive({
      list: [
        { name: 'leetcode #112 路径总和', id: 'path-sum' },
        { name: 'LeetCode #589 N 叉树的前序遍历', id: 'submissions' },
        { name: 'leetcode #105 从前序与中序遍历序列构造二叉树', id: 'inorder-traversal' },
        { name: 'LeetCode 剑指 Offer 54. 二叉搜索树的第k大节点', id: 'dian-lcof' },
        { name: 'LeetCode 剑指 Offer 26. 树的子结构', id: 'gou-lcof' },
        { name: 'LeetCode #662 二叉树最大宽度', id: 'maximum-width' },
        { name: 'LeetCode #144 二叉树的前序遍历', id: 'preorder-traversal' },
        { name: 'LeetCode #226 翻转二叉树', id: 'invert-binary' },
        { name: 'LeetCode 剑指 Offer 32 - II. 从上到下打印二叉树 II', id: 'shang-dao' },
        { name: 'leetcode #107. 二叉树的层序遍历 II', id: 'tree-level' },
        { name: 'leetcode #110. 平衡二叉树', id: 'balanced-binary' },
        { name: 'leetcode #222. 完全二叉树的节点个数', id: 'count-complete' },
        { name: 'leetcode #968. 监控二叉树', id: 'tree-cameras' },
      ]
    })

    return () => (
      <div class='contentCenter'>
        <div>
          <h3>二叉树</h3>
          <p>
            二叉树（Binary tree）是树形结构的一个重要类型。
            二叉树是n个有限元素的集合，该集合或者为空、或者由一个称为根（root）
            的元素及两个不相交的、被分别称为左子树和右子树的二叉树组成，是有序树。
            当集合为空时，称该二叉树为空二叉树。在二叉树中，一个元素也称作一个结点。
          </p>
          <div class="line">
            下面是常见的二叉树类型：
          </div>
          <img src={Binary01} alt="二叉树" />
          <ul>
            <li>
              完全二叉树：只有在二叉树右兄弟最右边不满的情况下才能称为完成二叉树
            </li>
            <li>
              满二叉树：每一个根节点都有两个子节点
            </li>
            <li>
              完美二叉树：二叉树每一层都是满的
            </li>
          </ul>
          <img src={Binary03} alt="二叉树" />
          <div class="line">
            二叉树遍历方式
          </div>
          <img src={Binary04} alt="二叉树遍历方式" />
          <img src={Binary06} alt="二叉树遍历方式" />
        </div>
        <div>
          <h5>二叉树应用场景</h5>
          <ul>
            <li>
              <div>常用</div>
              <img src={Binary02} alt="二叉树场景" />
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
          <location list={state.list}></location>
        </div>
        <div>
          <h5 id="path-sum">
            <a href="https://leetcode-cn.com/problems/path-sum/"
              target="_blank" rel="noopener noreferrer">leetcode #112 路径总和</a>
          </h5>
          <p>
            思路：使用递归思路解决问题。
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    var hasPathSum = function(root, targetSum) {
        if (!root) return false;  // 遍历到null节点
        if (!root.left && !root.right) return root.val == targetSum; 
        targetSum -= root.val; 
        // 当前递归问题 拆解成 两个子树的问题，其中一个true了就行
        return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum); 
    };
                               
                                `}
              </code>
            </pre>
          </div>
        </div>
        <div>
          <h5 id='submissions'>
            <a href="https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/submissions/"
              target="_blank" rel="noopener noreferrer">leetcode #589 N 叉树的前序遍历</a>
          </h5>
          <p>
            思路：使用快慢指针的方式。
            <br />
            主要思路看下面，调用递归。
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    var preorder = function(root) {
        if (root === null) {
            return []
        }
        let array = []
        let stack = [root]
        while (stack.length) {
            let len = stack.length
            let node = stack.shift() // 弹出栈中第一个，先进先出
            array.push(node.val)
            if (node.children.length > 0) {
                stack = node.children.concat(stack) 
                // 这里有别于层序遍历，用node.children 连接 queue，
                // 而不是 queue.concat(node.children)  这样就实现了前序遍历的效果
            }
        }
        return array
    }; 
                                `}
              </code>
            </pre>
          </div>
        </div>
        <div>
          <h5 id='inorder-traversal'>
            <a href="https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
              target="_blank" rel="noopener noreferrer">leetcode #105 从前序与中序遍历序列构造二叉树</a>
          </h5>
          <p>
            思路：首先明白前序与中序遍历序的顺序，前序遍历：根左右，中序遍历：左根右。
            <br />

          </p>
          <div className="code">
            <pre>
              <code>
                {`
        const map = new Map(); 
        for (let i = 0; i < inorder.length; i++) { 
            map.set(inorder[i], i); 
        }
        const helper = (pStart, pEnd, iStart, iEnd) => { 
            if (pStart > pEnd) return null; 
            let rootVal = preorder[pStart]; 
            let root = new TreeNode(rootVal); 
            let mid = map.get(rootVal); 
            let leftNum = mid - iStart; 
            root.left = helper(pStart + 1, pStart + leftNum, iStart, mid - 1); 
            root.right = helper(pStart + leftNum + 1, pEnd, mid + 1, iEnd); 
            return root; 
        }
        return helper(0, preorder.length - 1, 0, inorder.length - 1);                       
                                `}
              </code>
            </pre>
          </div>
        </div>
        <div>
          <h5 id='dian-lcof'>
            <a href="https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/submissions/"
              target="_blank" rel="noopener noreferrer">leetcode 剑指 Offer 54. 二叉搜索树的第k大节点</a>
          </h5>
          <p>
            思路：首先明白前序与中序遍历序的顺序，前序遍历：根左右，中序遍历：左根右。
            <br />
            统计右子树的结点个数 cntr，递归处理即可。如果 k = cntr + 1，那么是根
            结点，如果 k ≤ cntr，那么在右子树中且是第 k 大，否则在左子树中且是第
            k cntr 1 大。
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    var kthLargest = function(root, k) {
        if(!root) return null; 
        let max = 0; 
        var dfs = function(root){ 
            if(!root) return null; 
            dfs(root.right); //是否有又节点
            // 如果没有下一个节点 返回当前值
            if(!--k) return max = root.val; 
            dfs(root.left); 
        }
        dfs(root); 
        return max
    };                           
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='gou-lcof'>
            <a href="https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/solution/"
              target="_blank" rel="noopener noreferrer">leetcode 剑指 Offer 26 树的子结构</a>
          </h5>
          <p>
            思路：首先判断节点B是否在节点A中，就要将节点A遍历，就要不断调用一个方法去对比。所以要用到递归。
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    var isSubStructure = function(A, B) {
        return (!!A && !!B) && (recur(A,B)||isSubStructure(A.left,B)
        ||isSubStructure(A.right,B))
    };
    var recur = function(A,B){ // 判断两者是否相等
        if(B == null) return true; 
        if(A == null || A.val != B.val) return false; 
        return recur(A.left, B.left) && recur(A.right, B.right); 
    }                           
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='maximum-width'>
            <a href="https://leetcode-cn.com/problems/maximum-width-of-binary-tree/"
              target="_blank" rel="noopener noreferrer">leetcode 662. 二叉树最大宽度</a>
          </h5>
          <p>
            思路：首先根据题意可知是满二叉树，不会出现左边三层，右边没有节点的情况。
            <br />
            寻找出当前二叉树的层数，通过层数得到最后的节点个数
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    var widthOfBinaryTree = function(root) {
        if (!root) return 0; 
        let max= 1n, que = [[0n, root]]; 
        while (que.length) { 
            const width = que[que.length - 1][0] - que[0][0] + 1n; 
            if (width > max) max= width; 
            let temp= []; 
            for (const [i, q] of que) { 
                q.left && temp.push([i * 2n, q.left]); 
                q.right && temp.push([i * 2n + 1n, q.right]); 
            }
            que = temp; 
        }
        return Number(max);
    };                         
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='preorder-traversal'>
            <a href="https://leetcode-cn.com/problems/binary-tree-preorder-traversal/"
              target="_blank" rel="noopener noreferrer">leetcode 144 二叉树的前序遍历</a>
          </h5>
          <p>
            思路：。。。。。。
            <br />
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    // 迭代
    var preorderTraversal = (root) => {
        const list = [];
        const stack = [];
     // 当根节点不为空的时候，将根节点入栈
        if(root) stack.push(root)
        while(stack.length > 0) {
            const curNode = stack.pop()
            // 第一步的时候，先访问的是根节点
            list.push(curNode.val)
            // 我们先打印左子树，然后右子树
            // 所以先加入栈的是右子树，然后左子树
            if(curNode.right !== null) {
                stack.push(curNode.right)
            }
            if(curNode.left !== null) {
                stack.push(curNode.left)
            }
        }
     return list
    }            
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='invert-binary'>
            <a href="https://leetcode-cn.com/problems/invert-binary-tree/"
              target="_blank" rel="noopener noreferrer">leetcode 226. 翻转二叉树</a>
          </h5>
          <p>
            思路：。。。。。。
            <br />
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    const invertTree = (root) => {
        if (!root)  return null
        let nowRoot = [root];
        while (nowRoot.length) {
            const nextRoot = [];
            for (let i = 0; i < nowRoot.length; i++) {
                if (nowRoot[i].left || nowRoot[i].right) {
                    [nowRoot[i].left, nowRoot[i].right] = [nowRoot[i].right, nowRoot[i].left];
                    if (nowRoot[i].left) {
                        nextRoot.push(nowRoot[i].left);
                    }
                    if (nowRoot[i].right) {
                        nextRoot.push(nowRoot[i].right);
                    }
                }
            }
            nowRoot = nextRoot;
        }
        return root;
    };          
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='shang-dao'>
            <a href="https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/"
              target="_blank" rel="noopener noreferrer">leetcode 剑指 Offer 32 - II. 从上到下打印二叉树 II</a>
          </h5>
          <p>
            思路：。。。。。。
            <br />
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    var levelOrder = function(root) {
            let ans = new Array();
            getResult(root,0,ans);
            return ans;
       };
       var getResult = function(root,k,ans){
            if(!root) return null;
            if(k==ans.length) ans.push(new Array());
            ans[k].push(root.val);
            getResult(root.left,k+1,ans);
            getResult(root.right,k+1,ans);
       }         
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='tree-level'>
            <a href="https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/"
              target="_blank" rel="noopener noreferrer">leetcode #107. 二叉树的层序遍历 II</a>
          </h5>
          <p>
            思路：。。。。。。
            <br />
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    var levelOrderBottom = function (root) {
            let ans = new Array();
            getResult(root, 0, ans);
            for (let i = 0, j = ans.length - 1; i < j; i++, j--) {
            [ans[i], ans[j]] = [ans[j], ans[i]];
            }
            return ans;
       };
       var getResult = function (root, k, ans) {
            if (!root) return null;
            if (k == ans.length) ans.push(new Array());
            ans[k].push(root.val);
            getResult(root.left, k + 1, ans);
            getResult(root.right, k + 1, ans);
       }       
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='balanced-binary'>
            <a href="https://leetcode-cn.com/problems/balanced-binary-tree/"
              target="_blank" rel="noopener noreferrer">leetcode #110. 平衡二叉树</a>
          </h5>
          <p>
            思路：。。。。。。
            <br />
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    var isBalanced = function (root) {
            return getHeight(root) >= 0;
       };
       var getHeight = function (root) {
            if (!root) return 0;
            let l = getHeight(root.left);
            let r = getHeight(root.right);
            if (l < 0 || r < 0) return -2;
            if (Math.abs(l - r) > 1) return -2;
            return Math.max(l, r) + 1;
       }    
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='count-complete'>
            <a href="https://leetcode-cn.com/problems/count-complete-tree-nodes/"
              target="_blank" rel="noopener noreferrer">leetcode #222. 完全二叉树的节点个数</a>
          </h5>
          <p>
            思路：。。。。。。
            <br />
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    var countNodes = function(root) {
        if (!root) return 0; 
        return countNodes(root.left) + countNodes(root.right) + 1;
    };   
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='tree-cameras'>
            <a href="https://leetcode-cn.com/problems/binary-tree-cameras/"
              target="_blank" rel="noopener noreferrer">leetcode #968. 监控二叉树</a>
          </h5>
          <p>
            思路：。。。。。。
            <br />
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    var minCameraCover = function(root) {
        const dfs = (root) => { 
            if (!root) return [Math.floor(Number.MAX_SAFE_INTEGER / 2), 0, 0]; 
            const [la, lb, lc] = dfs(root.left); 
            const [ra, rb, rc] = dfs(root.right); 
            let a = lc + rc + 1; 
            let b = Math.min(a, Math.min(la + rb, lb + ra)); 
            let c = Math.min(a, lb + rb); return [a, b, c]; 
        }
        return dfs(root)[1];
    };  
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5>
            <a href="https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/submissions/"
              target="_blank" rel="noopener noreferrer">leetcode </a>
          </h5>
          <p>
            思路：。。。。。。
            <br />
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
  },
  render () {
    return (
      <div>hello</div>
    )
  }
})