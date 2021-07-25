import {defineComponent} from 'vue'
import QuickSort from '@/views/Algorithm/img/QuickSort.gif' 

export default defineComponent({
    name:'Heap',
    setup(){

        return ()=>(
            <div class='contentCenter'>
                <div>
                    <h3>快速排序</h3>
                    <p>
                        将无序的数组快速排序，首先要选定一个基准值A，比A大的放到A的右边数组ArrayR，
                        比A小的放到左边数组ArrayL,然后将方法递归排序数组，最后将数组连接起来。
                        但是快速排序是一个不稳定的排序，若是取值不好，或者本身是一个有序的数组，在时间空间复杂度上
                        可能就是一个nlog(n)。
                    </p>
                    <img src={QuickSort} alt="快速排序"/>
                </div>
                <div>
                    <h5>快速排序应用场景</h5>
                    <ul>
                        <li>
                            ....
                        </li>
                    </ul>
                </div>
                <div>
					<h5>LeetCode题</h5>
					<ul>
						<li>leetcode #148. 排序链表</li>
						<li>LeetCode #912. 排序数组</li>
						<li>leetcode 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面</li>
						<li>LeetCode 面试题 17.14. 最小K个数</li>
						<li>LeetCode #75. 颜色分类</li>
						<li>LeetCode #95. 不同的二叉搜索树 II</li>
						<li>LeetCode #394. 字符串解码</li>
						<li>LeetCode #11. 盛最多水的容器</li>
						<li>LeetCode #470. 用 Rand7() 实现 Rand10()</li>
						<li>LeetCode #239. 滑动窗口最大值</li>
					</ul>
				</div>
				<div>
					<h5 id="path-sum">
						<a href="https://leetcode-cn.com/problems/sort-list/"
							target="_blank" rel="noopener noreferrer">leetcode 148. 排序链表</a>
					</h5>
					<p>
						思路：...
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var sortList = function(head) {
        return toSortList(head, null);
    };
    // 归并排序 
    const merge = (head1, head2) => { 
        const dummyHead = new ListNode(0); 
        let temp = dummyHead, temp1 = head1, temp2 = head2; 
        while (temp1 !== null && temp2 !== null) { 
            if (temp1.val <= temp2.val) { 
                temp.next = temp1; 
                temp1 = temp1.next; 
            } else { 
                temp.next = temp2; 
                temp2 = temp2.next; 
            }
            temp = temp.next; 
        }
        if (temp1 !== null) { 
            temp.next = temp1; 
        } else if (temp2 !== null) { 
            temp.next = temp2; 
        }
        return dummyHead.next; 
    }
    const toSortList = (head, tail) => { 
        if (head === null) { 
            return head;     
        }
        if (head.next === tail) { 
            head.next = null; 
            return head; 
        }
        let slow = head, fast = head; 
        while (fast !== tail) { 
            slow = slow.next; 
            fast = fast.next;
            if (fast !== tail) { fast = fast.next; } 
        }
        const mid = slow; 
        return merge(toSortList(head, mid), toSortList(mid, tail)); 
    }                       
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/sort-an-array/"
							target="_blank" rel="noopener noreferrer">leetcode #912. 排序数组</a>
					</h5>
					<p>
						思路：。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var sortArray = function(nums) {
        const sort = function (arr, left, right) { 
            if (left > right) return 
            let i = left, j = right 
            const pivot = arr[i] 
            while (i < j) { 
                while (i < j && arr[j] >= pivot) { j-- }
                arr[i] = arr[j] 
                while (i < j && arr[i] <= pivot) { i++ }
                arr[j] = arr[i] 
            }
            arr[i] = pivot 
            sort(arr, left, i - 1) 
            sort(arr, i + 1, right) 
        }
        sort(nums, 0, nums.length - 1) 
        return nums
    };
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="hhttps://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/"
							target="_blank" rel="noopener noreferrer">leetcode 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面</a>
					</h5>
					<p>
						思路：...。
						<br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
        var exchange = function(nums) {
            let numsLength = nums.length    
            let left = 0 // 左指针     
            let right = numsLength - 1 // 右指针 
            let temp    
            while(left <= right){ // 循环遍历
                // 左指针寻找偶数，如果是奇数，指针进 1 
                if(nums[left] % 2 === 1){ 
                    left ++ 
                    continue 
                }// 右指针寻找奇数，如果是偶数，指针退 1 
                if(nums[right] % 2 === 0){ 
                    right -- 
                    continue 
                }// 如果左指针指着偶数，右指针指着奇数，对应的值互换 
                temp = nums[left] 
                nums[left] = nums[right] 
                nums[right] = temp // 值互换后，同时移动左右指针 
                right -- 
                left ++ 
            }
            return nums
        };                       
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/smallest-k-lcci/"
							target="_blank" rel="noopener noreferrer">leetcode 面试题 17.14. 最小K个数</a>
					</h5>
					<p>
						思路：....
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var smallestK = function(arr, k) {
        if (k >= arr.length) return arr; 
        function build(heap, i = 0) { 
            let n = heap.length; 
            while (i < n) { 
                let temp = i, left = 2 * i + 1, right = left + 1; 
                if (left < n && heap[left] > heap[temp]) { temp = left; }
                if (right < n && heap[right] > heap[temp]) { temp = right; }
                if (temp === i) break; 
                [ heap[temp], heap[i] ] = [ heap[i], heap[temp] ]; i = temp; 
            } 
        }
        let heap = arr.slice(0, k), i = k, n = arr.length; 
        for (let i = Math.floor(k / 2) - 1; i >= 0; i--) { build(heap, i); }
        while (i < n) { 
            if (arr[i] < heap[0]) { 
                heap[0] = arr[i];
                build( heap ); 
            }
            i++; 
        }
        return heap;
    };                        
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/sort-colors/"
							target="_blank" rel="noopener noreferrer">leetcode 75. 颜色分类</a>
					</h5>
					<p>
						思路：。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var sortColors = function(nums) {
        const swap = (list, p1, p2) => [list[p1], list[p2]] = [list[p2], list[p1]] 
        let red = 0, blue = nums.length - 1,//一开始是没有存的，所有从最后一位； 
        p = 0
        while (p <= blue) {
            switch (nums[p]) { 
                case 0: 
                    swap(nums, red++, p) 
                    p++ 
                break; 
                case 1: 
                    p++ 
                break; 
                case 2: 
                    swap(nums, blue--, p) 
                    break; 
                default: break; 
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
						<a href="https://leetcode-cn.com/problems/unique-binary-search-trees-ii/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 95. 不同的二叉搜索树 II</a>
					</h5>
					<p>
						思路：。。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var generateTrees = function(n) {
        if(n===0) return []; 
        let getBSTnum = (left,right) =>{ 
            if(left>right) return [null]; //这里子树为的null很重要，二叉树最重要一点就是右 子树的值一定比左子树的值大，所以 
            if(left>right) return [null]; 
            //当左右子树值相等时，说明这 个值就是父节点 这里return [new TreeNode(left 或者 right)] 都是可以的 
            if(left===right) return [new TreeNode(left)]; 
            let res = []; 
            for(let i = left;i<=right;i++){ //当父节点从1到n的情况 
                let leftBst = getBSTnum(left,i-1); //这里左子树的值肯定比父节点小，所以 范围是 [1,i-1] 
                //这里右子树的值肯定比父节点大，所 以范围是 [i+1,n] 这里主要就是构建递归二叉树 
                let rightBst = getBSTnum(i+1,right); 
                for(let leftKey of leftBst){ 
                    for(let rightKey of rightBst){ //这里注意，用的for...of，即使是 [null]，也可以遍历 
                        let root = new TreeNode(i); 
                        root.left = leftKey; 
                        root.right = rightKey; 
                        res.push(root); 
                    } 
                } 
            } 
            return res; 
        }
        return getBSTnum(1,n) ;
    };                         
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/decode-string/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 394. 字符串解码</a>
					</h5>
					<p>
						思路：....。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var decodeString = function(s) {
        let numStack = []; // 存倍数的栈 
        let strStack = []; // 存 待拼接的str 的栈 
        let num = 0; // 倍数的“搬运工” 
        let result = ''; // 字符串的“搬运工” 
        for (const char of s) { // 逐字符扫描 
            if (!isNaN(char)) { // 遇到数字 
                num = num * 10 + Number(char); // 算出倍数 
            } else if (char == '[') { // 遇到 [ 
                strStack.push(result); // result串入栈 
                result = ''; // 入栈后清零 
                numStack.push(num); // 倍数num进入栈等待 
                num = 0; // 入栈后清零 
            } else if (char == ']') { // 遇到 ]，两个栈的栈顶出栈 
                let repeatTimes = numStack.pop(); // 获取拷贝次数 
                result = strStack.pop() + result.repeat(repeatTimes); // 构建子串 
            } else { 
                result += char; // 遇到字母，追加给result串 
            } 
        }
        return result;
    };        
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/container-with-most-water/"
							target="_blank" rel="noopener noreferrer">leetcode 11. 盛最多水的容器</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var maxArea = function(height) {
        let res = 0, i = 0, j = height.length - 1; 
        while (i < j) { 
            res = Math.max(res, Math.min(height[i], height[j]) * (j - i)) 
            if (height[i] < height[j]) { i++ } else { j-- } 
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
						<a href="https://leetcode-cn.com/problems/implement-rand10-using-rand7/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 470. 用 Rand7() 实现 Rand10()</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var rand10 = function() {
        while(true){ // let num =''; 
            let num = (rand7() - 1) * 7 + rand7(); 
            if (num <= 40) return num % 10 + 1; 
            num = (num - 40 - 1) * 7 + rand7(); 
            if (num <= 60) return num % 10 + 1; 
            num = (num - 60 - 1) * 7 + rand7(); 
            if (num <= 20) return num % 10 + 1; 
        }
        return num;  
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/sliding-window-maximum/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 239. 滑动窗口最大值</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var maxSlidingWindow = function(nums, k) {
        const n = nums.length; const q = []; 
        for (let i = 0; i < k; i++) { 
            while (q.length && nums[i] >= nums[q[q.length - 1]]) { q.pop(); }
            q.push(i); 
        }
        const ans = [nums[q[0]]]; 
        for (let i = k; i < n; i++) { 
            while (q.length && nums[i] >= nums[q[q.length - 1]]) { q.pop(); }
            q.push(i); 
            while (q[0] <= i - k) { q.shift(); }
            ans.push(nums[q[0]]); 
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