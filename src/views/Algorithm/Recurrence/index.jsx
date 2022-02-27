import {defineComponent} from 'vue'
// import CardinalitySort from '@/views/Algorithm/img/CardinalitySort.gif' 

export default defineComponent({
    name:'Recurrence',
    setup(){
        return ()=>(
            <div class='contentCenter'>
                <div>
                    <h3>递推</h3>
                    <p>
                    </p>
                    {/* <img src={CardinalitySort} alt="归并排序"/> */}
                </div>
                <div>
                    <h5>递推应用场景</h5>
                    <ul>
                        <li>
                           。。。
                        </li>
                    </ul>
                </div>
                <div>
					<h5>LeetCode题</h5>
					<ul>
						<li>leetcode #70. 爬楼梯</li>
						<li>LeetCode #746. 使用最小花费爬楼梯</li>
						<li>leetcode #120. 三角形最小路径和</li>
						<li>LeetCode #119. 杨辉三角 II</li>
						<li>LeetCode #152. 乘积最大子数组</li>
						<li>LeetCode #53. 最大子数组和</li>
						<li>LeetCode #122. 买卖股票的最佳时机 II</li>
						<li>LeetCode #198. 打家劫舍</li>
						<li>LeetCode #322. 零钱兑换</li>
						<li>LeetCode #300. 最长递增子序列</li>
					</ul>
				</div>
				<div>
					<h5 id="path-sum">
						<a href="https://leetcode-cn.com/problems/climbing-stairs/"
							target="_blank" rel="noopener noreferrer">leetcode 70. 爬楼梯</a>
					</h5>
					<p>
						思路：... 
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var climbStairs = function(n) {
        let f = new Array(n + 1).fill(0); f[0] = 1,f[1] = 1; 
        for(let i = 2; i <= n;i++) f[i] = f[i - 1] + f[ i - 2]; 
        return f[n];
    };              
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/min-cost-climbing-stairs/"
							target="_blank" rel="noopener noreferrer">leetcode 746. 使用最小花费爬楼梯</a>
					</h5>
					<p>
						思路：。。。 
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var minCostClimbingStairs = function(cost) {
        let n = cost.length; 
        let dp = new Array(n + 1).fill(0); 
        // 根据题意添加元素0 
        cost.push(0); // 初始华边界条件 
        dp[0] = cost[0],dp[1] = cost[1];
        for(let i = 2;i <= n;i++) dp[i] = Math.min(dp[i - 1],dp[i - 2]) + cost[i]; 
        return dp[n];
    };
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/triangle/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 120. 三角形最小路径和</a>
					</h5>
					<p>
						思路：...。
						<br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
        var minimumTotal = function(triangle) {
            const n = triangle.length; 
            // 初始化dp数组 
            const dp = new Array(n); 
            for (let i = 0; i < n; i++) { 
                dp[i] = new Array(triangle[i].length); 
            }
            for (let i = n - 1; i >= 0; i--) { // 自底而上遍历 
                for (let j = 0; j < triangle[i].length; j++) { // 同一层的 
                    if (i == n - 1) { // base case 最底层 
                        dp[i][j] = triangle[i][j]; 
                    } else { // 状态转移方程，上一层由它下面一层计算出 
                        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]; 
                    } 
                } 
            }
            return dp[0][0];
        };            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/pascals-triangle-ii/"
							target="_blank" rel="noopener noreferrer">leetcode 119. 杨辉三角 II</a>
					</h5>
					<p>
						思路：....
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var getRow = function(rowIndex) {
        const res = new Array(rowIndex + 1); 
        res[0] = 1; 
        for (let i = 1; i < rowIndex + 1; i++) { 
            res[0] = res[i] = 1; for (let j = i - 1; j >= 1; j--) { 
                res[j] = res[j] + res[j - 1]; 
            } 
        }
        return res;
    };                    
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/maximum-product-subarray/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 152. 乘积最大子数组</a>
					</h5>
					<p>
						思路：。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var maxProduct = function(nums) {
        // ans:当前找到的连续子数组的最大值，max_num：前一个最大值，min_num：
        // 前一个最小值，因为 是乘法关系，所以初始化为1 
        let ans = -Infinity,max_num = 1,min_num = 1; 
        for(const x of nums){ // 大小关系发生颠倒 
            if(x < 0){ 
                let temp; 
                temp = max_num; max_num = min_num; min_num = temp; 
            }
            max_num = Math.max(x * max_num,x); 
            min_num = Math.min(x * min_num,x); 
            ans = Math.max(ans,max_num); 
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
						<a href="https://leetcode-cn.com/problems/maximum-subarray/"
							target="_blank" rel="noopener noreferrer">leetcode 53. 最大子数组和</a>
					</h5>
					<p>
						思路：。。。。
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
						<a href="https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/"
							target="_blank" rel="noopener noreferrer">leetcode 122. 买卖股票的最佳时机 II</a>
					</h5>
					<p>
						思路：....。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var maxProfit = function(prices) {
        let ans = 0; 
        for(let i = 1;i < prices.length;i++){ 
            if(prices[i] > prices[i - 1]) ans += prices[i] - prices[i-1]; 
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
						<a href="https://leetcode-cn.com/problems/house-robber/"
							target="_blank" rel="noopener noreferrer">leetcode 198. 打家劫舍</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var rob = function(nums) {
        let n = nums.length; // 状态数组 
        // i：每一间屋子 x：当前屋子不偷的金额 y：当前屋子偷的金额 
        // 二维数组 dp[i][x，y] 
        let dp = new Array(n).fill(0).map(item => item = new Array(2)); 
        // 0: 不偷 1: 偷 第一间屋子偷 或者 不偷 赋值 
        dp[0][0] = 0, dp[0][1] = nums[0]; 
        for(let i = 1; i < n;i++){ 
            // 当前屋子不偷，那上一间屋子可以偷，也可以不偷，所以取上间屋子两者最大值 
            dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]); 
            // 当前屋子偷，那上一间屋子就不能偷，不偷的值 + 当前屋子的值 
            dp[i][1] = dp[i - 1][0] + nums[i]; 
        } 
        // 取 最后一项偷或者不偷的最大值 
        return Math.max(dp[n-1][0],dp[n-1][1]);
    };                    
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/coin-change/"
							target="_blank" rel="noopener noreferrer">leetcode 322. 零钱兑换</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var coinChange = function(coins, amount) {
        let dp = new Array(amount + 1); 
        dp[0] = 0; // 用现有硬币无法拼凑面额 
        for(let i = 1; i <= amount;i++) dp[i] = -1; 
        for(let i = 1; i <= amount;i++){ 
            for(const x of coins){ // 当前硬币用不上 
                if(i < x) continue; // 前序状态时非法的 
                if(dp[i - x] == -1) continue; // 等于-1，或者 
                if(dp[i] == -1 || dp[i] > dp[i - x] + 1) dp[i] = dp[i - x] + 1; 
            } 
        }
        return dp[amount];
    };                        
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/longest-increasing-subsequence/"
							target="_blank" rel="noopener noreferrer">leetcode 300. 最长递增子序列 </a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var lengthOfLIS = function(nums) {
        let head = 1, tail = nums.length 
        if (tail === 0) return 0 
        let d = [] 
        d[head] = nums[0] 
        for (let i = 1; i < tail; ++i) {
            if (nums[i] > d[head]) { d[++head] = nums[i]; } 
            else { 
                let l = 1, r = head, flag = 0; 
                // 如果找不到说明所有的数都比 nums[i] 大， 此时要更新 d[1]，所以这里将 flag 设为 0 
                while (l <= r) { 
                    let mid = (l + r) >> 1; 
                    if (d[mid] < nums[i]) { flag = mid; l = mid + 1; } 
                    else { r = mid - 1; } 
                }
                d[flag + 1] = nums[i]; 
            } 
        }
        return head;
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