import {defineComponent} from 'vue'
import MergeSort from '@/views/Algorithm/img/MergeSort.gif' 

export default defineComponent({
    name:'Heap',
    setup(){

        return ()=>(
            <div class='contentCenter'>
                <div>
                    <h3>归并排序</h3>
                    <p>
                        归并排序是排序的一个新的方法，相对快速排序是一个稳定的排序
                        在时间空间复杂度上是O(n)。排序方法是将一个有序或无序数组拆分成两个数组，
                        然后递归拆分，就像一个完美二叉树一样。将最深度的节点的左右两个节点数据进行比较，
                        借助于第三个存储空间排序，把两个节点排序返回上个节点D，这时候D就是一个有序的数组，
                        与他相邻的兄弟节点也是一个有序数组F，再按照之前第三片存储空间G排序，对D和F第一个数据比较，
                        小的从数组里删除放到G里面，这样又返回一个有序数组。 最后将从最深度的节点进行合并排序
                    </p>
                    <img src={MergeSort} alt="归并排序"/>
                </div>
                <div>
                    <h5>归并排序应用场景</h5>
                    <ul>
                        <li>
                            内存2G 对40G文件进行排序
                        </li>
                    </ul>
                </div>
                <div>
					<h5>LeetCode题</h5>
					<ul>
						<li>leetcode 剑指 Offer 51. 数组中的逆序对</li>
						<li>LeetCode #23. 合并K个升序链表</li>
						<li>leetcode #1305. 两棵二叉搜索树中的所有元素</li>
						<li>LeetCode #1508. 子数组和排序后的区间和</li>
						<li>LeetCode #327. 区间和的个数</li>
						<li>LeetCode #315. 计算右侧小于当前元素的个数</li>
						<li>LeetCode #53. 最大子序和</li>
						<li>LeetCode 面试题 04.08. 首个共同祖先</li>
					</ul>
				</div>
				<div>
					<h5 id="path-sum">
						<a href="https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/"
							target="_blank" rel="noopener noreferrer">leetcode 剑指 Offer 51. 数组中的逆序对</a>
					</h5>
					<p>
						思路：...
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
     let temp = [];// 因为用到的是归并排序，归并排序得用到一个额外的存储数叫temp
     var reversePairs = function(nums) {
         // 把temp的存储大小扩展成和nums的一样大
         while(temp.length < nums.length) temp.push(0);
         // 对应下标
         return countReversePairs(nums, 0 , nums.length - 1)// 首尾下标传进去；
         };
     var countReversePairs = function(nums, leftRoot ,rightRoot){
         //待排序数组，从l-r的统计区间
         if(leftRoot >= rightRoot) return 0;
         //空区间/只包含一个元素的区间，的时候，逆序对的个数为0
         let mid = (leftRoot+rightRoot) >> 1;//右移动1位就是除以2；计算中间数的位置
         let ans = 0;
         ans += countReversePairs(nums,leftRoot,mid);//左边逆序对的个数
         ans += countReversePairs(nums, mid+1,rightRoot);//右边逆序对的个数
         // 加上横跨两边的逆序对的数量
         let k = leftRoot,p1 = leftRoot,p2 = mid+1;//分别指向左右区间的第一位；
         while((p1 <= mid) || (p2 <= rightRoot)){ //第一个区间不为空，第二个区间不为空
             if((p2 > rightRoot) ||(p1<= mid && nums[p1] <= nums[p2])){ 
                 //第一个区间的元素放进来
                 temp[k++] = nums[p1++];
             }else{
                 temp[k++] = nums[p2++];//将第二个区间放进来，这个时候就可以统计逆序对的数量
                 ans += (mid - p1 + 1);//左区间剩余的逆序对的数量
             }
         }
         //将temp的元素拷贝到原数组里面，对应下下标，temp是从外面定义的一个全局的元
         //素，nums从l到r，temp也是从l到r,所以这个数组的空间大小是有序的
         for(let i = 0; i <= rightRoot;i++) nums[i] = temp[i];
         return ans;//ans 就是从l -r 的逆序数的数量
     };                     
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/merge-k-sorted-lists/"
							target="_blank" rel="noopener noreferrer">leetcode #23. 合并K个升序链表</a>
					</h5>
					<p>
						思路：。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var mergeKLists = function (lists) { 
        return merge(lists, 0, lists.length - 1); 
    };
    var merge = function (lists, l, r) { 
        if (l == r) return lists[l]; 
        if (l > r) return null; 
        let mid = (l + r) >> 1; 
        return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r)); 
    }
    var mergeTwoLists = function (a, b) { 
        if (a == null || b == null) return a == null ? b : a; 
        let head = new ListNode(0); 
        let tail = head, i = a, j = b; 
        while (i != null && j != null) { 
            if (i.val < j.val) { 
                tail.next = i; i = i.next; 
            } else { 
                tail.next = j; j = j.next; 
            }
            tail = tail.next; 
        }
        tail.next = i == null ? j : i; return head.next; 
    }
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees/"
							target="_blank" rel="noopener noreferrer">leetcode #1305. 两棵二叉搜索树中的所有元素</a>
					</h5>
					<p>
						思路：...。
						<br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
        //二叉搜索树就是二叉排序树的特性：中序遍历最后返回的是一个有序序列，然后就是中序遍历第一棵
        //树，接着遍历中序遍历第二棵树， 将两个有序序列合并成一个有序序列
        var getAllElements = function(root1, root2) {
            let temp = [];//结果数组
            let lnums = [],rnums = [];//l从第一棵树中中序遍历出来的有序序列；R第二棵树
            getNum(root1,lnums);
            getNum(root2,rnums);
            let p1= 0, p2 = 0;//两个指针
            // 当前还有元素没有被合并进去的结果数组的时候
            while(p1 < lnums.length || p2 < rnums.length){
            // 这个时候判断，什么时候把左边放进去，什么时候把右边的放进去
            // 当右边为空 或者 左边还有元素并且
                if((p2 >= rnums.length) || (p1 < lnums.length && lnums[p1] < rnums[p2])){
                    temp.push(lnums[p1++]);
                }else{
                    temp.push(rnums[p2++])//右边元素放到结果数组的末尾
                }
            }
            return temp;
        };
        // 这里来实现中序遍历的过程
        var getNum = function(root,nums){//传两个值，一个是树的根节点地址，一个是结果数组
            if(root == null) return;//当前节点为空
            getNum(root.left,nums);//先中序遍历左子树
            nums.push(root.val);//将当前节点的值放到结果数组的后一位
            getNum(root.right,nums);//中序遍历右子树
            return;
        }                       
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/range-sum-of-sorted-subarray-sums/"
							target="_blank" rel="noopener noreferrer">leetcode #1508. 子数组和排序后的区间和</a>
					</h5>
					<p>
						思路：....
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var rangeSum = function(nums, n, left, right) { 
        let arr=[] // 找子数组和 
        for(let i=0;i<nums.length;i++){ 
            arr.push(nums[i]) 
            let tmp = nums[i] 
            for(let j=i+1;j<nums.length;j++){ 
                tmp = tmp + nums[j] 
                arr.push(tmp) 
            } 
        }// 排序 
        let sArr = arr.sort((a,b)=> a-b) 
        let sum = 0 
        for(let i = left ; i<=right ;i++){ 
            sum = (sum+sArr[i-1])%1000000007 
        }
        return sum 
    };                       
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/count-of-range-sum/"
							target="_blank" rel="noopener noreferrer">leetcode #327. 区间和的个数</a>
					</h5>
					<p>
						思路：。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    const countRangeSumRecursive = (sum, lower, upper, left, right) => { //递归 
        if (left === right) { return 0; } else { const mid = Math.floor((left + right) / 2); 
        const n1 = countRangeSumRecursive(sum, lower, upper, left, mid); 
        const n2 = countRangeSumRecursive(sum, lower, upper, mid + 1, right); 
        let ret = n1 + n2; // 首先统计下标对的数量 
        let i = left; let l = mid + 1; 
        let r = mid + 1; while (i <= mid) { 
            while (l <= right && sum[l] - sum[i] < lower) l++; 
            while (r <= right && sum[r] - sum[i] <= upper) r++; 
            ret += (r - l); i++; }// 随后合并两个排序数组 
            const sorted = new Array(right - left + 1); 
            let p1 = left, p2 = mid + 1;
            let p = 0; while (p1 <= mid || p2 <= right) { 
                if (p1 > mid) { sorted[p++] = sum[p2++]; 
                } else if (p2 > right) { 
                    sorted[p++] = sum[p1++]; 
                } else { 
                    if (sum[p1] < sum[p2]) { sorted[p++] = sum[p1++]; 
                    } else { sorted[p++] = sum[p2++]; } 
                } 
            }
            for (let i = 0; i < sorted.length; i++) { 
                sum[left + i] = sorted[i]; }
                return ret; 
            } 
        }
    var countRangeSum = function(nums, lower, upper) {
        let s = 0; const sum = [0]; 
        for(const v of nums) { s += v; sum.push(s); }
        return countRangeSumRecursive(sum, lower, upper, 0, sum.length - 1);
    
    };                         
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/"
							target="_blank" rel="noopener noreferrer">leetcode #315. 计算右侧小于当前元素的个数</a>
					</h5>
					<p>
						思路：。。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    function countSmaller(nums) {
        if (!nums.length) return []
        let objArr = [] //对象和index
        let resArr = [] //存放次数
        for (let i = 0; i < nums.length; i++) {
          const ele = nums[i]
          let obj = {
            num: ele,
            index: i
          }
          resArr.push(0)
          objArr.push(obj)
        }
        haha(objArr)
        return resArr
        function haha(nums) {
          let mid = nums.length >> 1
          let left = nums.slice(0, mid)
          let right = nums.slice(mid, nums.length)
          if (nums.length === 1) return nums
          return merge(haha(left), haha(right))
        }
        function merge(left, right) {
          let res = []
          // 定义“后有序数组”中一个指针
          let j = 0
          while (left.length && right.length) {
            if (left[0].num > right[0].num) {
              res.push(right[0])
              right.shift()
              j++
            } else {
              // “前有序数组” 的元素出列的时候，数一数 “后有序数组” 已经出列了多少元素
              resArr[left[0].index] += j
              res.push(left[0])
              left.shift()
            }
          }
          while (left.length) {
            // 同理
            resArr[left[0].index] += j
            res.push(left[0])
            left.shift()
          }
          while (right.length) {
            res.push(right[0])
            right.shift()
            j++
          }
          return res
        }
      }                         
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/maximum-subarray/"
							target="_blank" rel="noopener noreferrer">leetcode 53. 最大子序和</a>
					</h5>
					<p>
						思路：....。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var maxSubArray = function(nums) {
        const len = nums.length; 
        let max = nums[0]; 
        let min = 0; 
        let sum = 0; 
        for (let i = 0; i < len; i++) { 
            sum += nums[i]; 
            if (sum - min > max) max = sum - min; 
            if (sum < min) { min = sum; }
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
						<a href="https://leetcode-cn.com/problems/first-common-ancestor-lcci/"
							target="_blank" rel="noopener noreferrer">leetcode 面试题 04.08. 首个共同祖先</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var lowestCommonAncestor = function(root, p, q) {
        if(root == null) return null;
        if(root == p || root == q)return root;
        let rootLeft = lowestCommonAncestor(root.left,p,q) //在左子树找到结果
        let rootRight = lowestCommonAncestor(root.right,p,q)// 在右子树找到结果
        if(rootLeft != null && rootRight != null) return root;
        // 左子树不为空并且右子树也不为空在左子树中找到了一个p跟q,在右子树中找到了一个p跟q，当前
        节点就是最近公共祖先
        if(rootLeft != null) return rootLeft;
        return rootRight;
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/deepest-leaves-sum/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 1302. 层数最深叶子节点的和</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    // 技巧：记录两个值，1个是已经找到的当前节点的最大深度，一个是现在记录到的最大深度的和值
    var deepestLeavesSum = function(root) {
        let ans = [0],maxDepth = [-1];
        getResult(root,ans,0,maxDepth);
        return ans[0];
    };
    var getResult = function(root,ans,depth,maxDepth){
     if(root == null) {
        return;
     }
     if(maxDepth[0] < depth){
        maxDepth[0] = depth;
        ans[0] = root.val;
     }else{
        if(maxDepth[0] == depth){
            ans[0] += root.val;
        }
     }
     getResult(root.left,ans,depth+1,maxDepth);
     getResult(root.right,ans,depth+1,maxDepth);
    }                           
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