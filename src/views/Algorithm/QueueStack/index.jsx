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
                        单调队列是维护一个单调递增或递减的队列，也可以看成一个有序数组。在维护一个最小值的数组中，
                        第一个元素永远是最小的值，若新增的元素比最后的元素小那么将依次对比，直到大于前一个元素为止，
                        将新元素放到其后面。而维护一个最大值的数组中，第一个永远是最大的值，
                        新增的元素在队尾依次比较放置到合适的位置。
                    </p>
                    <p>
                        单调栈和单调队列是比较相似的，都是维护递增或递减的数据。只不过是以栈的形式保存。
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
						<li>leetcode #239. 滑动窗口最大值</li>
						<li>LeetCode #剑指 Offer 59 - II. 队列的最大值</li>
						<li>leetcode #862. 和至少为 K 的最短子数组</li>
						<li>LeetCode #1438. 绝对差不超过限制的最长连续子数组</li>
						<li>LeetCode #513. 找树左下角的值</li>
						<li>LeetCode #135. 分发糖果</li>
						<li>LeetCode #365. 水壶问题</li>
						<li>LeetCode #1760. 袋子里最少数目的球</li>
						<li>LeetCode #45. 跳跃游戏 II</li>
						<li>LeetCode #93. 复原 IP 地址</li>
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
						<a href="https://leetcode-cn.com/problems/sliding-window-maximum/"
							target="_blank" rel="noopener noreferrer">leetcode 239. 滑动窗口最大值合</a>
					</h5>
					<p>
						思路：... 
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
						<a href="https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 剑指 Offer 59 - II. 队列的最大值</a>
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
						<a href="hhttps://leetcode-cn.com/problems/shortest-subarray-with-sum-at-least-k/"
							target="_blank" rel="noopener noreferrer">leetcode 862. 和至少为 K 的最短子数组</a>
					</h5>
					<p>
						思路：...。
						<br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
        。。。             
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 1438. 绝对差不超过限制的最长连续子数组</a>
					</h5>
					<p>
						思路：....
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var longestSubarray = function(nums, limit) {
        const queMax = []; 
        const queMin = []; 
        const n = nums.length; 
        let left = 0, right = 0; 
        let ret = 0;
        while (right < n) { 
            while (queMax.length && queMax[queMax.length - 1] < nums[right]) { queMax.pop(); }
            while (queMin.length && queMin[queMin.length - 1] > nums[right]) { queMin.pop(); }
            queMax.push(nums[right]); 
            queMin.push(nums[right]); 
            while (queMax.length && queMin.length && queMax[0] - queMin[0] > limit) { 
                if (nums[left] === queMin[0]) { queMin.shift(); }
                if (nums[left] === queMax[0]) { 
                    queMax.shift(); 
                }
                left++; 
            }
            ret = Math.max(ret, right - left + 1); 
            right++; 
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
						<a href="https://leetcode-cn.com/problems/find-bottom-left-tree-value/"
							target="_blank" rel="noopener noreferrer">leetcode 513. 找树左下角的值</a>
					</h5>
					<p>
						思路：。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    。。。                       
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/candy/"
							target="_blank" rel="noopener noreferrer">leetcode 135. 分发糖果</a>
					</h5>
					<p>
						思路：。。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    。。。                 
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/water-and-jug-problem/"
							target="_blank" rel="noopener noreferrer">leetcode 365. 水壶问题</a>
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
						<a href="https://leetcode-cn.com/problems/minimum-limit-of-balls-in-a-bag/"
							target="_blank" rel="noopener noreferrer">leetcode 1760. 袋子里最少数目的球</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    。。。                       
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/jump-game-ii/"
							target="_blank" rel="noopener noreferrer">leetcode 45. 跳跃游戏 II</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var jump = function(nums) {
        let curIndex = 0 
        let nextIndex = 0 
        let steps = 0 
        for(let i = 0; i < nums.length - 1; i++) { 
            nextIndex = Math.max(nums[i] + i, nextIndex) 
            if(i === curIndex) { 
                curIndex = nextIndex 
                steps++ 
            } 
        }
        return steps
    };                         
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/restore-ip-addresses/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 93. 复原 IP 地址 </a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var restoreIpAddresses = function(s) {
        const SEG_COUNT = 4; 
        const segments = new Array(SEG_COUNT); 
        const ans = [];
    
        const dfs = (s, segId, segStart) => { 
            // 如果找到了 4 段 IP 地址并且遍历完了字符串，那么就是一种答案 
            if (segId === SEG_COUNT) { 
                if (segStart === s.length) { 
                    ans.push(segments.join('.')); 
                }
                return; 
            }
            // 如果还没有找到 4 段 IP 地址就已经遍历完了字符串，那么提前回溯 
            if (segStart === s.length) { return; }
            // 由于不能有前导零，如果当前数字为 0，那么这一段 IP 地址只能为 0 
            if (s.charAt(segStart) === '0') { 
                segments[segId] = 0; 
                dfs(s, segId + 1, segStart + 1); 
            }
            // 一般情况，枚举每一种可能性并递归 
            let addr = 0; 
            for (let segEnd = segStart; segEnd < s.length; ++segEnd) { 
                addr = addr * 10 + (s.charAt(segEnd) - '0'); 
                if (addr > 0 && addr <= 0xFF) { 
                    segments[segId] = addr; 
                    dfs(s, segId + 1, segEnd + 1); 
                } else { break;} 
            } 
        }
        dfs(s, 0, 0); 
        return ans;
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