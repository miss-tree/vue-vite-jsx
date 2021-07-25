import {defineComponent} from 'vue'

export default defineComponent({
    name:'Heap',
    setup(){

        return ()=>(
            <div class='contentCenter'>
                <div>
                    <h3>堆与队列</h3>
                    <p>
                        一种基于完全二叉树的结构,堆适合维护集合的最值。常用的结构为大顶堆
                        和小顶堆(。例如学校排名前50名，要维护前50名的顺序，则需要用到小顶堆，
                        每个添加进来的分数和前50名比，比第50名分数小的不用继续比了，大的就把第50名踢出去，
                        再用小顶堆的排序方法将新的分数排到名内比较，将最小的排出来，比每次调用排序好)
                    </p>
                </div>
                <div>
                    <h5>堆与队列应用场景</h5>
                    <ul>
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
						<li >leetcode 剑指 Offer 40 最小的K个数</li>
						<li>LeetCode #1046 最后一块石头的重量</li>
						<li>leetcode #373 查找和最小的K对数字</li>
						<li>LeetCode #215 数组中的第K个最大元素</li>
						<li>LeetCode #692. 前K个高频单词</li>
						<li>LeetCode #1801 积压订单中的订单总数</li>
						<li>LeetCode #264. 丑数 II</li>
						<li>LeetCode #313. 超级丑数</li>
						<li>LeetCode #1753. 移除石子的最大得分</li>
						{/* <li>LeetCode #968. 监控二叉树</li> */}
					</ul>
				</div>
				<div>
					<h5 id="path-sum">
						<a href="https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/"
							target="_blank" rel="noopener noreferrer">leetcode 剑指 Offer 40 最小的K个数</a>
					</h5>
					<p>
						思路：实现一个小顶堆
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var getLeastNumbers = function(arr, k) {
        let len = arr.length; 
        let res = []; 
        if(k===0)return []; 
        if(k===len)return arr; 
        buildHeap(arr); 
        for (let i = 1; i <= k; i++) { 
            res.push(arr[0]); 
            swap(arr, 0, len - i); 
            heapAdjust(arr, 0, len - i); 
        }
        return res;
    };
    
    var buildHeap = function (arr) { 
        let len = arr.length; 
        for (let i = Math.floor(len / 2); i >= 0; i--) {
             heapAdjust(arr, i, len); 
        } 
    }
    
    function swap(arr, i, child) {
        if (i === child) return; 
        arr[i] = arr[child] + arr[i]; 
        arr[child] = arr[i] - arr[child]; 
        arr[i] = arr[i] - arr[child];
    }
    /*
    * params {arr} 数组
    * params {i} 数组
    * params {len} 数组长度
     */
    function heapAdjust(arr, i, len) { 
        let child = i * 2 + 1; 
        while (child < len) { 
            if (child + 1 < len && arr[child] > arr[child + 1]) { 
                child = child + 1; 
            }if (arr[child] < arr[i]) { 
                swap(arr, i, child); 
                i = child; 
                child = i * 2 + 1; 
            } else { 
                break; 
            } 
        }
    }
                               
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				<div>
					<h5>
						<a href="https://leetcode-cn.com/problems/last-stone-weight/"
							target="_blank" rel="noopener noreferrer">leetcode #1046 最后一块石头的重量</a>
					</h5>
					<p>
						思路：使用大顶堆方式
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var lastStoneWeight = function(stones) {
        const maxHeap = new MaxPriorityQueue(); 
        for (let i = 0; i < stones.length; i++) { 
            maxHeap.enqueue('x', stones[i]); 
        }
        while (maxHeap.size() > 1) { 
            const a = maxHeap.dequeue()['priority'];
            const b = maxHeap.dequeue()['priority']; 
            if (a > b) { 
                maxHeap.enqueue('x', a - b); 
            } 
        }
        return maxHeap.isEmpty() ? 0 : maxHeap.dequeue()['priority'];
    }; 
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				<div>
					<h5>
						<a href="https://leetcode-cn.com/problems/find-k-pairs-with-smallest-sums/"
							target="_blank" rel="noopener noreferrer">leetcode #373 查找和最小的K对数字</a>
					</h5>
					<p>
						思路：...。
						<br/>
						 
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
        var kSmallestPairs = function(nums1, nums2, k) {
            const heap = []; 
            for (let i = 0; i < nums1.length; i++) { 
                for (let j = 0; j < nums2.length; j++) { 
                    if (heap.length < k) { 
                        heap.push([nums1[i], nums2[j]]); 
                        shiftUp(heap, heap.length - 1); 
                    } else if ((nums1[i] + nums2[j]) <= sum(heap[0])) { 
                        heap[0] = [nums1[i], nums2[j]]; 
                        shiftDown(heap, 0); 
                    } 
                } 
            }
            return heap.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
        };
        
        function swap(heap, index, parent) { 
            [heap[index], heap[parent]] = [heap[parent], heap[index]] 
        }
        function shiftUp(heap, i) { 
            const parent = (i - 1) / 2 | 0 
            if (sum(heap[i]) > sum(heap[parent])) { 
                swap(heap, i, parent) 
                shiftUp(heap, parent) 
            }
        }
        
        
        function sum(arr) { 
            return arr[0] + arr[1]; 
        }
        function shiftDown(heap, index) { 
            let left = index * 2 + 1; 
            if (left >= heap.length) return; 
            if (left + 1 < heap.length && sum(heap[left]) < sum(heap[left + 1])) { 
                left = left + 1; 
            }
            if (sum(heap[index]) <= sum(heap[left])) { 
                swap(heap, index, left) 
                shiftDown(heap, left) 
            }
        }                 
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/kth-largest-element-in-an-array/"
							target="_blank" rel="noopener noreferrer">leetcode #215 数组中的第K个最大元素</a>
					</h5>
					<p>
						思路：....
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var findKthLargest = function(nums, k) {
        let heap = [, ],
            i = 0;
        while (i < k) {
            heap.push(nums[i++]);
        }
        buildHeap(heap, k);
        for (let i = k; i < nums.length; i++) {
            if (heap[1] < nums[i]) {
                heap[1] = nums[i];
                heapify(heap, k, 1);
            }
        }
        return heap[1];
    };
    
    function heapify(arr, k, i) {
        while (true) {
            let minIndex = i;
            if (2 * i <= k && arr[2 * i] < arr[i]) {
                minIndex = 2 * i;
            }
            if (2 * i + 1 <= k && arr[2 * i + 1] < arr[minIndex]) {
                minIndex = 2 * i + 1;
            }
            if (minIndex !== i) {
                swap(arr, i, minIndex);
                i = minIndex;
            } else {
                break;
            }
        }
    }
    var buildHeap = function (arr, k) {
        if (k === 1) return;
        for (let i = Math.floor(k / 2); i >= 1; i--) {
            heapify(arr, k, i);
        }
    }
    let swap = (arr, i, j) => {
        let temp = arr[i] 
        arr[i] = arr[j] 
        arr[j] = temp
    }                          
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/top-k-frequent-words/"
							target="_blank" rel="noopener noreferrer">leetcode #692. 前K个高频单词</a>
					</h5>
					<p>
						思路：。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var topKFrequent = function (words, k) { 
        let map = new Map(); 
        let heap = []; 
        words.forEach(item => { map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1); 
        })
        let i = 0; 
        map.forEach((value, key) => { 
            if (i < k) {
                heap.push([key, value]); 
                i===k - 1 && buildHeap(map, heap, k); 
            } else if (value> map.get(heap[0][0]) || (value=== map.get(heap[0][0]) && key < heap[0][0])) { 
                heap[0]=[key, value]; 
                heapify(map, heap, k, 0); 
            }
            i++; 
        }); 
        let temp=heap.sort((a, b)=> { 
            if (a[1] > b[1]) { return -1; 
            } else if (a[1] < b[1]) { 
                return 1; 
            } else { 
                if  (a[0]> b[0]) { 
                    return 1; 
                } else if (a[0] < b[0]) { 
                    return -1; 
                } 
            } 
        }); 
        let res=[]; 
        temp.forEach(item=> {
            res.push(item[0]); 
        })
        return res; 
    };
    var buildHeap = function (map, arr, len) { 
        for (let i =Math.floor(len / 2); i >= 0; i--) { 
            heapify(map, arr, len, i); 
        } 
    }
    var heapify = function (map, arr, len, i) { 
        // 次数⼩或者相等情况排序靠前的置于⼩堆顶 
        let l = 2 * i + 1, r = 2 * i + 2, minIndex = i; 
        if (l < len &&(map.get(arr[l][0]) < map.get(arr[minIndex][0]) || 
        (map.get(arr[l][0])===map.get(arr[minIndex][0]) && arr[l][0]> arr[minIndex][0]))) { 
            minIndex = l; 
        }if (r < len && (map.get(arr[r][0]) < map.get(arr[minIndex][0]) || 
        (map.get(arr[r][0])===map.get(arr[minIndex][0])  && arr[r][0]> arr[minIndex][0]))) { 
            minIndex  = r 
        }
        if (minIndex !== i) { 
            swap(arr, minIndex, i); 
            heapify(map, arr, len, minIndex); 
        } 
    }
    var swap = function (arr, i, j) { 
        const temp = arr[i] 
        arr[i] = arr[j] 
        arr[j] = temp 
    }                           
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/maximum-width-of-binary-tree/"
							target="_blank" rel="noopener noreferrer">leetcode 1801 积压订单中的订单总数</a>
					</h5>
					<p>
						思路：。。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var getNumberOfBacklogOrders = function(orders) {
        let mod = 1000000007; 
        let buy = new MaxPriorityQueue({priority:(bid) => bid.price});//采购 
        let sell = new MinPriorityQueue({priority:(bid) => bid.price});//销售 
        let total = 0;//最后的库存 
        for(let [price, amount, orderType] of orders){ 
            if(orderType === 0){//采购 
            while(!sell.isEmpty() && sell.front().priority <= price && amount >0){ 
                let head = sell.dequeue().element; 
                if(amount < head.amount){ 
                    sell.enqueue({price:head.price,amount:head.amount - amount}); 
                    total -= amount; 
                    amount = 0; 
                }else{
                    amount -= head.amount; 
                    total -= head.amount; 
                } 
            }
            if(amount > 0) buy.enqueue({price,amount}),total +=amount; 
            }else{//orderType === 1 销售 
            while(!buy.isEmpty() && buy.front().priority >= price && amount >0){ 
                let head = buy.dequeue().element; 
                if(amount < head.amount){ 
                    buy.enqueue({price:head.price,amount:head.amount - amount}); 
                    total -=amount; amount = 0; 
                }else{
                    amount -= head.amount; 
                    total -= head.amount; 
                } 
            }
            if(amount > 0) sell.enqueue({price,amount}),total += amount; } }
            return total % mod;
    };                         
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/ugly-number-ii/"
							target="_blank" rel="noopener noreferrer">leetcode 264 丑数 II</a>
					</h5>
					<p>
						思路：跟第二课里面第k个数的题一样,素因子这个题，只不过里面的素因子的的值变化了。首先声明几个变
                        量，是用来记录每个素因子的使用次数，接着遍历N次，每次进行素因子相乘，取最小值。最后进行去
                        重，如果有重复的数，就在当前素因子，使用次数上+1。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var nthUglyNumber = function(n) {
        var dp = new Array(); 
        dp[0] = 1; 
        var p2 = 0; 
        var p3 = 0; 
        var p5 = 0; 
        for(let i = 1; i < n;i++){ 
            dp[i] = Math.min(dp[p2]*2,Math.min(dp[p3]*3,dp[p5]*5)); // 去重 
            if(dp[i] === dp[p2]*2) p2++; 
            if(dp[i] === dp[p3]*3) p3++; 
            if(dp[i] === dp[p5]*5) p5++; 
        }
        return dp[n-1];
    };          
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/super-ugly-number/"
							target="_blank" rel="noopener noreferrer">leetcode 313 超级丑数</a>
					</h5>
					<p>
						思路：这道题和丑数2的思路和一样。就是素因子是一个数组，也是得注意去重。这里面注意
                        Math.min.apply(null,arr) 可以求最小值，使用apply的优点是在部分JS引擎中提升性能。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var nthSuperUglyNumber = function(n, primes) {
        const res = [1]; 
        const points = new Array(primes.length).fill(0);
        //创建一个数组，赋值 
        let min,map; 
        for(let i = 1;i < n;i++){ 
            map = primes.map((prime,index) => res[points[index]]* prime ) 
            min = Math.min.apply(null,map);//Math.min.apply，求最小值 // 去重 
            primes.forEach((prime,index)=>{ 
                if(map[index] === min) points[index]++; 
            })
            res.push(min); 
        }
        return res[n-1];
    }; 
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/maximum-score-from-removing-stones/"
							target="_blank" rel="noopener noreferrer">leetcode 1753. 移除石子的最大得分</a>
					</h5>
					<p>
						思路：首先对三个值进行排序，按着从小到大的排序方便我们以后取值。首先干掉第一堆里面，第三根堆比第
                        二堆长的数量。接着判断第一堆里面是否为0，否就是第二堆和第三堆的数量是一样的，分别消掉第一堆
                        里面的二分之一个部分，此时第一堆被削掉了，然后不断地减去第二堆和第三堆的数量。最后返回轮数。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var maximumScore = function(a, b, c) {
        if(a>b) [a,b] = [b,a]; 
        if(a>c) [a,c] = [c,a]; 
        if(b>c) [b,c] = [c,b]; 
        var ans = 0; // step1 
        var cnt1 = Math.min(c-b,a); 
        a -= cnt1; 
        c -= cnt1; 
        ans += cnt1; // step 2 
        if(a !=0){ 
            if( a % 2 ==1) a-=1; 
            b -= a/2 |0; 
            c -= a/2 |0; 
            ans += a; 
        }// step3 
        ans += b; 
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
    },
    render(){
        return (
            <div>hello</div>
        )
    }
    // onclick={goAnchor("path-sum")}
})