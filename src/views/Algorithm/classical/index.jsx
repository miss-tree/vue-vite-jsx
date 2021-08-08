import {defineComponent} from 'vue'
import CardinalitySort from '@/views/Algorithm/img/CardinalitySort.gif' 

export default defineComponent({
    name:'Heap',
    setup(){

        return ()=>(
            <div class='contentCenter'>
                <div>
                    <h3>基数排序</h3>
                    <p>
                        归并排序是排序的一个新的方法，相对快速排序是一个稳定的排序
                        在时间空间复杂度上是O(n)。排序方法是将一个有序或无序数组拆分成两个数组，
                        然后递归拆分，就像一个完美二叉树一样。将最深度的节点的左右两个节点数据进行比较，
                        借助于第三个存储空间排序，把两个节点排序返回上个节点D，这时候D就是一个有序的数组，
                        与他相邻的兄弟节点也是一个有序数组F，再按照之前第三片存储空间G排序，对D和F第一个数据比较，
                        小的从数组里删除放到G里面，这样又返回一个有序数组。 最后将从最深度的节点进行合并排序
                    </p>
                    <img src={CardinalitySort} alt="归并排序"/>
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
						<li>leetcode #207. 课程表</li>
						<li>LeetCode #210. 课程表 II</li>
						<li>leetcode #1122. 数组的相对排序</li>
						<li>LeetCode #164. 最大间距</li>
						<li>LeetCode #274. H 指数</li>
						<li>LeetCode #56. 合并区间</li>
						<li>LeetCode #1288. 删除被覆盖区间</li>
						<li>LeetCode #491. 递增子序列</li>
						<li>LeetCode 面试题 04.12. 求和路径</li>
						<li>LeetCode #239. 滑动窗口最大值</li>
					</ul>
				</div>
				<div>
					<h5 id="path-sum">
						<a href="https://leetcode-cn.com/problems/course-schedule/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 207. 课程表</a>
					</h5>
					<p>
						思路：...
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var canFinish = function(numCourses, prerequisites) {
        const inDegree = new Array(numCourses).fill(0);//入度数组 
        const map = {};//邻接表 
        for(let i = 0; i < prerequisites.length;i++){ 
            inDegree[prerequisites[i][0]]++;//求每一堂课的初始入度值 
            if(map[prerequisites[i][1]]){//当前课已经存在邻街表 
                map[prerequisites[i][1]].push(prerequisites[i][0])//添加依赖它的后续课 
            }else{//当前课不存在邻街表 
                map[prerequisites[i][1]] = [prerequisites[i][0]] 
            } 
        }
        const queue = [];//处理入度为0节点存到队列 
        for(let i = 0; i< inDegree.length; i++){//队列的初始化 
            if(inDegree[i] == 0) queue.push(i); 
        }
        let cnt = 0;//当前选的课程 
        while(queue.length){ 
            const selected = queue.shift(); 
            cnt++; 
            const toEnQueue = map[selected];//当前课程的后续课程 
            if(toEnQueue && toEnQueue.length){ 
                for(let i = 0; i < toEnQueue.length;i++){ 
                    inDegree[toEnQueue[i]]--; 
                    if(inDegree[toEnQueue[i]] == 0){ 
                        queue.push(toEnQueue[i])
                    } 
                } 
            } 
        }
        return cnt == numCourses;//选修了所有的课程
    };                    
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/course-schedule-ii/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode #210. 课程表 II</a>
					</h5>
					<p>
						思路：。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var findOrder = function(numCourses, prerequisites) {
        const inDegree = new Array(numCourses).fill(0);//入度数组 
        const map = {};//邻接表 
        for(let i = 0; i < prerequisites.length;i++){ 
            inDegree[prerequisites[i][0]]++;//求每一堂课的初始入度值 
            if(map[prerequisites[i][1]]){//当前课已经存在邻街表 
                map[prerequisites[i][1]].push(prerequisites[i][0])//添加依赖它的后续课 
            }else{//当前课不存在邻街表 
                map[prerequisites[i][1]] = [prerequisites[i][0]] 
            } 
        }
        const queue = [];//处理入度为0节点存到队列 
        for(let i = 0; i< inDegree.length; i++){//队列的初始化 
            if(inDegree[i] == 0) queue.push(i); 
        }
        let ans = []; 
        while(queue.length){ 
            const selected = queue.shift(); // cnt++; 
            ans.push(selected); 
            const toEnQueue = map[selected];//当前课程的后续课程 
            if(toEnQueue && toEnQueue.length){ 
                for(let i = 0; i < toEnQueue.length;i++){ 
                    inDegree[toEnQueue[i]]--; 
                    if(inDegree[toEnQueue[i]] == 0){ 
                        queue.push(toEnQueue[i]) 
                    } 
                } 
            } 
        }
        if(ans.length == numCourses) return ans; 
        return [];
    };
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/relative-sort-array/"
							target="_blank" rel="noopener noreferrer">leetcode #1122. 数组的相对排序</a>
					</h5>
					<p>
						思路：...。
						<br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
        var relativeSortArray = function(arr1, arr2) {
            // 取值范围是【0-1000】，开个大数据，取一个数1005 
            let arr = new Array(1005).fill(0); 
            let res = []; // 记录数字出现的次数 
            for(let i = 0; i < arr1.length; i++){ arr[arr1[i]] += 1; }// 按照arr2出现的顺序，将arr1重新归置，放到结果数组res里面 
            for(let i = 0; i< arr2.length;i++){ 
                while(arr[arr2[i]]--){ res.push(arr2[i]); } 
            }// 剩余的数字按照从小到大的顺序放到后面 
            for(let i = 0; i < arr.length;i++){ 
                if(arr[i] <= 0) continue; 
                while(arr[i]--){ res.push(i); } 
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
						<a href="https://leetcode-cn.com/problems/maximum-gap/"
							target="_blank" rel="noopener noreferrer">leetcode #164. 最大间距</a>
					</h5>
					<p>
						思路：....
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
        var maximumGap = function(nums) {
            let cnt = new Array(65536).fill(0);//记录下标和 
            let temp = new Array(nums.length);//临时数组 
            for(let i = 0 ; i < nums.length;i++){ cnt[nums[i] & 0xffff] += 1; }//每一个下标的前缀和 
            for(let i =1;i<65536;i++){ cnt[i] += cnt[i-1];}
            // 把数字按照记录的下标放到临时数组 
            for(let i = nums.length-1; i >= 0;i--){ temp[--cnt[nums[i] & 0xffff]] = nums[i]; }// 重置 
            cnt = new Array(65536).fill(0) 
            for(let i = 0; i < temp.length;i++){ cnt[(temp[i] & 0xffff0000) >> 16] += 1; }
            for(let i = 1; i < 65536; i++){ cnt[i] += cnt[i-1]; }
            for(let i = nums.length-1; i >= 0;i--){ nums[--cnt[(temp[i] & 0xffff0000) >> 16]] = temp[i]; }
            let ans= 0; 
            for(let i = 1;i < nums.length; i++){ ans = Math.max(ans,nums[i] - nums[i-1]); }
            return ans;
        };                        
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/h-index/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode #274. H 指数</a>
					</h5>
					<p>
						思路：。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var hIndex = function(citations) {
        // 给的指数数组，按着从小到大进行排序 
        citations = citations.sort((a, b) => a - b); // 定义H指数是合法的1， 
        let h = 1, n = citations.length; 
        // 当前倒数第N位的论文的引用次数 >= h,说明H指数是合法的，h往上加；坐标的合法性判断 
        while( h <= n && citations[n - h] >= h) ++h; // 非法的H指数 
        h -= 1; 
        return h;
    };                         
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/merge-intervals/"
							target="_blank" rel="noopener noreferrer">leetcode #56. 合并区间</a>
					</h5>
					<p>
						思路：。。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var merge = function(intervals) {
        // 如果传递进来的数组长度为0 返回一个空数组 
        if (intervals.length === 0) { return [] }// 创建合并数组 
        var res = [] // 将数组进行升序排序 
        intervals.sort(function (a, b) { return a[0] - b[0] })// 结果数组放进第一个数组 
        res.push(intervals[0]) // 从原数组的第一个元素进行遍历 
        for (var i = 1; i < intervals.length; i++) { // 如果当前区间的左端点 大于 merge数组最后一个元素的右端点 
            if (intervals[i][0] > res[res.length - 1][1]) { // 说明这个数组可以直接放进merge数组中 
                res.push(intervals[i]) 
            } else { // 说明有区间有交集 当前区间的左端点小于等于最后一个元素的右端点 
                // 如果当前区间的右端点 大于 merge 最后一个右端点 
                if (intervals[i][1] > res[res.length - 1][1]) { // 更新右端点为最大值 
                    res[res.length - 1][1] = intervals[i][1] 
                } 
            }
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
						<a href="https://leetcode-cn.com/problems/remove-covered-intervals/"
							target="_blank" rel="noopener noreferrer">leetcode 1288. 删除被覆盖区间</a>
					</h5>
					<p>
						思路：....。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var removeCoveredIntervals = function(intervals) {
        // 首先制定比较规则，[a, b]按照a升序 b降序排列 
        intervals.sort((a, b) => { 
            if (a[0] == b[0]) { return b[1] - a[1]; }
            return a[0] - b[0]; 
        }); 
        let i = 0, len = intervals.length, cnt = 0; 
        while (i < len) { 
            let [m, n] = intervals[i], j = i + 1; // cnt 是 计算被完全包含的区间 
            while (j < len && m <= intervals[j][0] && n >= intervals[j][1]) { cnt++; j++; }
            i = j; 
        }
        return len - cnt;//整体的区间数量 - 被完全包含的/被删除的区间 = 剩余的区间数量
    };        
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/increasing-subsequences/"
							target="_blank" rel="noopener noreferrer">leetcode 491. 递增子序列</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var findSubsequences = function(nums) {
        const res = []; const len = nums.length; 
        const set = new Set(); 
        const dfs = (start, path) => { if (path.length >= 2) { 
            const str = path.toString(); // path数组 转成字符串 
            if (!set.has(str)) { // set中没有存有当前path 
                res.push(path.slice()); // 推入一份path的拷贝 
                set.add(str); // 存入set，记录一下
            } 
        }
        for (let i = start; i < len; i++) { // 枚举出当前所有的选项，从start到末尾 
            const prev = path[path.length - 1]; // 上一个选择，即path数组的末尾元素 
            const cur = nums[i]; // 当前选择 
            if (path.length == 0 || prev <= cur) { // 如果path为空，或满足递增关系，则可选择 
                path.push(cur); // 选择当前的数字 
                dfs(i + 1, path); // 继续往下递归，注意传的是i+1 
                path.pop(); // 撤销选择当前数字，选择别的数字 
            } 
        } 
        };
        dfs(0, []); //递归的入口，从下标0到末尾的数组中选择合适的数加入path，组成解集。初始path是 空数组
        return res;
    };                           
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/paths-with-sum-lcci/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 面试题 04.12. 求和路径</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    //用递归，判断当前根节点的值到底是选择还是不选择，如果从当前根节点的值选择的话，
    //就如果不选择就证 明我接下来递归左子树递归右子树找一个和为22 的 
    // 节点;以当前位置作为起点，找多少和值为22的路径数量; 
    var pathSum = function (root, sum) { // 找到从一个节点开始, 路径和为sum的所有路径 
        const dfs = (root, sum) => { 
            if (root == null) return 0;//根节点为空，空树当中满足条件的路径数量为0； 
            let val = sum - root.val;//root.val == sum 证明找到一条路径 
            return (root.val == sum) + dfs(root.left,val)+ dfs(root.right,val) 
        };
        if (root == null) return 0; //以root为起点查找和值为sum的路径数量，在左子树查找和值为sum的路径数量，
        //在右子树查找和值为 sum的路径数量 
        return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum); 
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