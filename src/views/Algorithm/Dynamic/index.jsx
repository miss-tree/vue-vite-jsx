import {defineComponent} from 'vue'
// import CardinalitySort from '@/views/Algorithm/img/CardinalitySort.gif' 

export default defineComponent({
    name:'Dynamic',
    setup(){
        return ()=>(
            <div class='contentCenter'>
                <div>
                    <h3>动态规划</h3>
                    <p>
                    </p>
                    {/* <img src={CardinalitySort} alt="归并排序"/> */}
                </div>
                <div>
                    <h5>动态规划应用场景</h5>
                    <ul>
                        <li>
                           。。。
                        </li>
                    </ul>
                </div>
                <div>
					<h5>LeetCode题</h5>
					<ul>
						<li>leetcode #1143. 最长公共子序列</li>
						<li>LeetCode #132. 分割回文串 II</li>
						<li>leetcode #416. 分割等和子集</li>
						<li>LeetCode #72. 编辑距离</li>
						<li>LeetCode #714. 买卖股票的最佳时机含手续费</li>
						<li>LeetCode #213. 打家劫舍 II</li>
						<li>LeetCode #474. 一和零</li>
						<li>LeetCode #494. 目标和</li>
						<li>LeetCode #518. 零钱兑换 II</li>
						<li>LeetCode #377. 组合总和 Ⅳ</li>
                        
						<li>LeetCode # </li>
					</ul>
				</div>
				<div>
					<h5 id="path-sum">
						<a href="https://leetcode-cn.com/problems/longest-common-subsequence/"
							target="_blank" rel="noopener noreferrer">leetcode 1143. 最长公共子序列</a>
					</h5>
					<p>
						思路：... 
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var longestCommonSubsequence = function(text1, text2) {
        const m = text1.length,n = text2.length; 
        const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)); 
        // dp[i][j]表示text1前i位和text2前j位的最长公共子序列的长度 
        for(let i = 1; i <= m;i++){ 
            const c1 = text1[i - 1]; 
            for(let j = 1; j <= n;j++){ 
                const c2 = text2[j - 1]; 
                if(c1 === c2){ dp[i][j] = dp[i-1][j-1] + 1 }
                else{dp[i][j] = Math.max(dp[i - 1][j],dp[i][j - 1]); } 
            } 
        }
        return dp[m][n];
    };               
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/palindrome-partitioning-ii/"
							target="_blank" rel="noopener noreferrer">leetcode 132. 分割回文串 II</a>
					</h5>
					<p>
						思路：。。。 
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var minCut = function(s) {
        const n = s.length;
        const dp = new Array(n).fill(0).map(() => new Array(n).fill(true)); 
        for(let i = n -1;i >= 0;--i){ 
            for(let j = i + 1;j < n;++j){ 
                dp[i][j] = s[i] == s[j] && dp[i+1][j-1] 
            } 
        }
        const f = new Array(n).fill(Number.MAX_SAFE_INTEGER);
        for(let i = 0; i < n; i++){ 
            if(dp[0][i]){ f[i] = 0; }
            else{
                for(let j = 0;j < i;j++){ 
                    if(dp[j+1][i]){ f[i] = Math.min(f[i],f[j] + 1); } 
                } 
            } 
        }return f[n - 1];
    };
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/partition-equal-subset-sum/"
							target="_blank" rel="noopener noreferrer">leetcode 416. 分割等和子集</a>
					</h5>
					<p>
						思路：...。
						<br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
        var canPartition = function(nums) {
            const n = nums.length; 
            if(n < 2){ return false; }
            let sum = 0,maxNum = 0; 
            for(const num of nums){ 
                sum += num; 
                maxNum = maxNum > num ? maxNum : num; 
            }
            if(sum & 1){ return false;}
            const target = Math.floor(sum / 2); 
            if(maxNum > target){ return false; }// 二维数组放置状态的时候，正确的写法 
            const dp = new Array(n).fill(0).map(()=> new Array(target + 1).fill(false)); 
            // console.log(dp) 
            for(let i = 0; i <n;i++){ dp[i][0] = true; }
            dp[0][nums[0]] = true; 
            for(let i = 1;i < n;i++){ 
                const num = nums[i]; 
                for(let j = 1;j <= target;j++){ 
                    if(j >= num){ 
                        dp[i][j] = dp[i-1][j] | dp[i-1][j-num]; 
                    }else{dp[i][j] = dp[i-1][j]; } 
                } 
            }
            return dp[n - 1][target];
        };             
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/edit-distance/"
							target="_blank" rel="noopener noreferrer">leetcode 72. 编辑距离</a>
					</h5>
					<p>
						思路：....
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
						<a href="https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/"
							target="_blank" rel="noopener noreferrer">leetcode 714. 买卖股票的最佳时机含手续费</a>
					</h5>
					<p>
						思路：。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var maxProfit = function(prices, fee) {
        const n = prices.length; 
        const dp = new Array(n).fill(0).map(v => new Array(2).fill(0)); 
        dp[0][0] = 0,
        // dp[0][0]:代表第0天不持有股票的最大收益 就是0 
        dp[0][1] = -prices[0];
        // dp[0][1]:代表第0天持有股票的最大收益，第0天就是最开始那天的 收益，只能是买入股票的收益就是股票的价格 
        // 数学归纳法：从k[i] 到 k[i+1]的算法 
        for (let i = 1; i < n; ++i) { 
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee); 
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]); 
        }
        // 在两者取一个最大值，分别是最后一天持有股票和不持有股票的最大值 
        return Math.max(dp[n - 1][0], dp[n - 1][1] );
    };                      
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/house-robber-ii/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 213. 打家劫舍 II</a>
					</h5>
					<p>
						思路：。。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var rob = function(nums) {
        let n = nums.length; 
        if(n == 1) return nums[0];//如果只有一个房子也可以偷 
        const dp = new Array(n).fill(0).map(v => new Array(2).fill(0)); 
        // 先求不偷最后一间屋子的最大价值 
        dp[0][0] = 0,//不偷就是0 
        dp[0][1] = nums[0];//第i间房子偷的最大价值 
        for(let i = 1;i < n;i++){ 
            dp[i][0] = Math.max(dp[i-1][1],dp[i-1][0]);
            //不偷当前房间，那么前一间屋子可偷 可不偷 
            dp[i][1] = dp[i-1][0] + nums[i];
            //偷当前房间，那么前一间房间就不能偷；前一间房间 不偷的最大价值 + 当前房子 
        }
        // 记录第一个最大值：不偷最后一间获得的最大值 
        let ans1 = dp[n-1][0]; // 规定：不偷第一间屋子 
        dp[0][0] = 0, dp[0][1] = 0;//不管第一间房子偷或者不偷，都让小偷无功而返 
        for(let i = 1;i < n;i++){ 
            dp[i][0] = Math.max(dp[i-1][1],dp[i-1][0]); 
            dp[i][1] = dp[i-1][0] + nums[i]; 
        }
        // 到这，第一件房子没偷，所以最后一件房子可以偷/也可以不偷，所以获取在最后一间房子偷或者不 偷的最大值 
        let ans2 = Math.max(dp[n-1][0],dp[n-1][1]); 
        return Math.max(ans1,ans2);
    };                 
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/ones-and-zeroes/"
							target="_blank" rel="noopener noreferrer">leetcode 474. 一和零</a>
					</h5>
					<p>
						思路：....。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var findMaxForm = function(strs, m, n) {
        const dp = new Array(m+1).fill(0).map(v => new Array(n+1).fill(0)); 
        // 去扫描每一个字符串 
        for(const x of strs){ // 分别计算0的数量和1的数量
            let cnt0 = 0,cnt1 = 0; 
            for(const y of x){ 
                if(y == "0") cnt0 += 1;//0的数量+1 
                else cnt1 += 1; //1的数量+1 
            }
            // 采用刷表法：倒着刷表 
            for(let i = m;i >= cnt0;--i){ 
                for(let j = n;j >= cnt1;--j){ 
                    dp[i][j] = Math.max(dp[i][j],dp[i - cnt0][j - cnt1] + 1) 
                } 
            } 
        }
        return dp[m][n];
    };     
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/target-sum/"
							target="_blank" rel="noopener noreferrer">leetcode 494. 目标和</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var findTargetSumWays = function(nums, target) {
        let sum = nums.reduce((t,v) => t + v);
        if((sum - target) % 2 !== 0 || sum - target < 0) return 0;
        let result = parseInt((sum - target) / 2);
        let dp = new Array(result + 1).fill(0);
        dp[0] = 1;
        let n = nums.length;
        for(let i = 0; i < n;i++){
            for(let j = result;j >= nums[i];j--){
                dp[j] = dp[j] + dp[j-nums[i]];
            }
        }
        return dp[result];
    };                       
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/coin-change-2/"
							target="_blank" rel="noopener noreferrer">leetcode 518. 零钱兑换 II</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var change = function(amount, coins) {
        const dp = new Array(amount + 1).fill(0);
        dp[0] = 1;
        // 正向刷表
        for(const x of coins){
            for(let j = x;j <= amount;j++){
                dp[j] += dp[j - x]
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
						<a href="https://leetcode-cn.com/problems/combination-sum-iv/"
							target="_blank" rel="noopener noreferrer">leetcode 377. 组合总和 Ⅳ </a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var combinationSum4 = function(nums, target) {
        const dp = new Array(target + 1).fill(0);
        dp[0] = 1;
        for(let i =1;i <= target;i++){
            for(const num of nums){
                if(num <= i){
                    dp[i] += dp[i - num];
                }
            }
        }
        return dp[target];
    };                            
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/maximum-subarray-min-product/"
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