import { defineComponent, reactive } from 'vue';
// import CardinalitySort from '@/views/Algorithm/img/CardinalitySort.gif' 
import location from "comps/location/index.vue";
// import location from "../../../components/location/index"

export default defineComponent({
  name: 'BinarySearch',
  components: { location },
  setup () {
    const state = reactive({
      list: [
        { name: 'LeetCode #34. 在排序数组中查找元素的第一个和最后一个位置', id: 'sorted-array' },
        { name: 'leetcode #1. 两数之和', id: 'two-sum' },
        { name: 'leetcode #69. x 的平方根', id: 'sqrtx' },
        { name: 'LeetCode #1658. 将 x 减到 0 的最小操作数', id: 'to-zero' },
        { name: 'LeetCode #475. 供暖器', id: 'heaters' },
        { name: 'LeetCode #300. 最长递增子序列', id: 'increasing-subsequence' },
        { name: 'LeetCode #1011. 在 D 天内送达包裹的能力', id: 'ship-packages' },
        { name: 'LeetCode #4. 寻找两个正序数组的中位数', id: 'sorted-arrays' },
        { name: 'LeetCode #35. 搜索插入位置', id: 'search-insert' },
        { name: 'LeetCode #81. 搜索旋转排序数组 II', id: 'rotated-sorted' },
      ]
    })

    return () => (
      <div class='contentCenter'>
        <div>
          <h3>二分查找</h3>
          <p>
            二分查找算法是针对于一个有序算法快速查找的方法，最慢查找次数为32，因为整数型数字最高为32位。
            二分查找原理是将一个有序数据分成A(起点)、B(终点)、C(中点)三个点，待查找数据D在数据内，若D比C大
            则将A点移动到C+1位置，C移动到CB的终点(若中间位置为偶数，则是前一位，特殊情况是起点和终点相邻，
            那么起点和中点是同一个位置)
          </p>
          {/* <img src={CardinalitySort} alt="归并排序"/> */}
        </div>
        <div>
          <h5>二分查找应用场景</h5>
          <ul>
            <li>
              内存2G 对40G文件进行排序
            </li>
          </ul>
        </div>
        <div>
          <h5>LeetCode题</h5>
          <location list={state.list}></location>
        </div>
        <div>
          <h5 id="sorted-array">
            <a href="https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/"
              target="_blank" rel="noopener noreferrer">leetcode 34. 在排序数组中查找元素的第一个和最后一个位置</a>
          </h5>
          <p>
            思路：...(误区：只有两个连续的相同数字，而不是多个)
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    var binarySearch = function(nums,x) { 
        let head = 0,tail = nums.length-1,mid; 
        while(tail - head > 3){ 
            mid = (head + tail) >> 1; 
            if(nums[mid] >= x) tail = mid; 
            else head = mid + 1; 
       }
       // [1,2,3,4,5] x = 9 
       for(let i = head;i <= tail;i++){ 
           if(nums[i] >= x) return i; 
       }
       return nums.length; 
   }
   var searchRange = function(nums, target) {
       let ret = new Array(2); 
       ret[0] = binarySearch(nums,target); 
       if(ret[0] == nums.length || nums[ret[0]] != target){ 
           ret[0] = ret[1] = -1; 
           return ret;
       }
       ret[1] = binarySearch(nums,target + 1) - 1;//最后一个位置 
       return ret;    
   };                    
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='two-sum'>
            <a href="https://leetcode-cn.com/problems/two-sum/submissions/"
              target="_blank" rel="noopener noreferrer">leetcode 1. 两数之和</a>
          </h5>
          <p>
            思路：。。。(将两数之和看作一个终点C，然后将数据中小于C的数进行排序计算)
            1、思路我们遍历到数字 a 时，用 target 减去 a，就会得到 b，若 b 存在于哈希表中，我们就可以直接返回
            结果了。若 b 不存在，那么我们需要将 a 存入哈希表，好让后续遍历的数字使用。
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    var twoSum = function(nums, target) {
        let map = new Map(); 
        for(let i =0;i<nums.length;i++){ 
            if(map.has(target - nums[i])){ 
                return [map.get(target - nums[i]),i]; 
            }else{map.set(nums[i],i); } 
        }
        return [];
    };
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='sqrtx'>
            <a href="https://leetcode-cn.com/problems/sqrtx/submissions/"
              target="_blank" rel="noopener noreferrer">leetcode 69. x 的平方根</a>
          </h5>
          <p>
            思路：...。
            <br />
          </p>
          <div className="code">
            <pre>
              <code>
                {`
        var mySqrt = function(x) {
            // 因为要找最后一个1的位置，假设head指向代表待查找的区间的第一个值， 
            // 求 y = 根号x;y最小是0，最大为x 
            let head = 0,tail = x,mid; tail += 1; 
            for(let i = 0; i < 100;i++){ // 避免计算超界 
                mid = head + ((tail -head) /2.0); 
                if(mid * mid <= x) head = mid; 
                else tail = mid; 
            }
            return Math.floor(head);
        };    
        // 骚操作的处理： 
        // 调整固定次数，为什么调整100次就能找到； 
        // 二分调整一次，就把带查找的区间的缩少一半 
        // 二分调整100次，待调整区间就是2的100次方分之一； 
        // 此时，head和tail就已经挨得很近很近了，所以head和tail之间的误差是可能仅有2的100次方分之一 
        // 可以认为两个是一个值，最后保留head的整数部分                  
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='to-zero'>
            <a href="https://leetcode-cn.com/problems/minimum-operations-to-reduce-x-to-zero/"
              target="_blank" rel="noopener noreferrer">leetcode 1658. 将 x 减到 0 的最小操作数</a>
          </h5>
          <p>
            思路：....
          </p>
          <div className="code">
            <pre>
              <code>
                {`
        var minOperations = function(nums, x) { 
            let sumL = new Array(nums.length + 1); 
            let sumR = new Array(nums.length + 1); 
            sumL[0] = sumR[0] = 0; 
            for(let i = 0;i < nums.length;i++){ 
                sumL[i+1] = sumL[i] + nums[i]; 
            }
            for(let i = nums.length-1;i >= 0;--i){ 
                sumR[nums.length - i] = sumR[nums.length - i-1]+ nums[i]; 
            }
            let ans = -1; 
            for(let i =0; i < sumL.length;i++){ 
                let j = binarySearch(sumR,x-sumL[i]);//查找剩余数量 
                if(j == -1) continue; 
                if(i+j>nums.length) continue; 
                if(ans == -1 || ans > i+j) ans = i+j; 
            }
            return ans; 
        } 
        var binarySearch = function(nums, x) {
            let head = 0,tail = nums.length -1,mid; 
            while(head <= tail){ 
                mid = (head +tail) >>1; 
                if(nums[mid] == x) return mid; 
                if(nums[mid] < x) head = mid +1; 
                else tail = mid -1; 
            }
            return -1;
        };                        
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='heaters'>
            <a href="https://leetcode-cn.com/problems/heaters/submissions/"
              target="_blank" rel="noopener noreferrer">leetcode 475. 供暖器</a>
          </h5>
          <p>
            思路：。。。
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    // 思考，如何去查找最小路径 
    // 实际上就是去，查找第一个大于等于X的位置， 
    // 假设是房子X，供暖器是a1,a2,a3,a4,a5;a4是大于等于x的，那么前面的a3是小于x的 
    // x是落在a3 和 a4中间的，相当于x落在了查找到位置和前一位的中间值 
    // 那么我们只要判断，这两个值哪一个是距离x最近的就行了                            
    var findRadius = function(houses, heaters) {
        heaters.sort((a, b) => a - b) 
        let ans = 0; 
        for(const x of houses){//遍历每一个房子的位置 
            let j = binarySearch(heaters,x);
            //j是第一个大于等于房子位置的，这个二分模型0， 1，前面是小于x的，后面的大于等于x的，找到大于等于x的 
            let a = Math.abs(heaters[j] - x); 
            let b = Math.abs(j ? x - heaters[j - 1] : a + 1);//j 位置前面有多少元素 
            ans = Math.max(ans,Math.min(a,b));//当前x的房子的供暖器的半径最近就是a,b之间的 较小值
        }
        return ans;
    };
    var binarySearch = function(nums,x){ 
        let head = 0, tail = nums.length - 1,mid; 
        while(head < tail){//当头尾坐标不重合 
            mid = (head + tail) >> 1; 
            if(nums[mid] >= x) tail = mid;// 
            else head = mid + 1; 
        }
        return head; 
    }
    // 理解这个程序，有可能返回的是大于等于x的，有可能返回的是数组的最后一个 
    // 那么这个写法呢，就会在合法范围内，尽量返回大于等于X的位置，如果不能返回，就返回小于X的位置                         
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='increasing-subsequence'>
            <a href="https://leetcode-cn.com/problems/longest-increasing-subsequence/submissions/"
              target="_blank" rel="noopener noreferrer">leetcode 300. 最长递增子序列</a>
          </h5>
          <p>
            思路：。。。。
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

        <div>
          <h5 id='ship-packages'>
            <a href="https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/"
              target="_blank" rel="noopener noreferrer">leetcode 1011. 在 D 天内送达包裹的能力</a>
          </h5>
          <p>
            思路：....。
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    var shipWithinDays = function(weights, days) {
        let l = 0,r = 0, mid; 
        for(const x of weights) r += x,l = Math.max(l,x); 
        while(l < r){ 
            mid = (l+r) >> 1; 
            if(check(weights,mid) <= days) r = mid; 
            else l = mid + 1; 
        }
        return l;
    };
    var check = function(nums,x){ 
        let cnt = 1,sum = 0; 
        for(const y of nums){ 
            if(sum + y > x){ cnt += 1; sum = y; }else{sum += y;} 
        }
        return cnt;
    }        
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='sorted-arrays'>
            <a href="https://leetcode-cn.com/problems/median-of-two-sorted-arrays/submissions/"
              target="_blank" rel="noopener noreferrer">leetcode 4. 寻找两个正序数组的中位数</a>
          </h5>
          <p>
            思路：。。。。。。
            <br />
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    var findMedianSortedArrays = function(nums1, nums2) {
        // nums1长度比nums2小 
        if (nums1.length > nums2.length) { [nums1, nums2] = [nums2, nums1]; }
        let m = nums1.length; 
        let n = nums2.length; // 在0～m中查找 
        let left = 0; 
        let right = m; 
        // median1：前一部分的最大值 
        // median2：后一部分的最小值 
        let median1 = 0; 
        let median2 = 0;
        while(left <= right) { 
            // 前一部分包含 nums1[0 .. i-1] 和 nums2[0 .. j-1] 
            // 后一部分包含 nums1[i .. m-1] 和 nums2[j .. n-1] 
            const i = left + Math.floor((right - left) / 2); 
            const j = Math.floor((m + n + 1) / 2) - i; 
            const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1]; 
            const minRight1 = i === m ? Infinity : nums1[i]; 
            const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1]; 
            const minRight2 = j === n ? Infinity : nums2[j]; 
            if (maxLeft1 <= minRight2) { 
                median1 = Math.max(maxLeft1, maxLeft2); 
                median2 = Math.min(minRight1, minRight2); 
                left = i + 1; 
            } else{ right = i - 1; } 
        }
        return (m + n) % 2 == 0 ? (median1 + median2) / 2 : median1;
    };                          
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='search-insert'>
            <a href="https://leetcode-cn.com/problems/search-insert-position/"
              target="_blank" rel="noopener noreferrer">leetcode 35. 搜索插入位置</a>
          </h5>
          <p>
            思路：。。。。。。
            <br />
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    var searchInsert = function(nums, target) {
        let head = 0,tail = nums.length,mid; 
        while(head < tail){ 
            mid = (head + tail) >> 1; 
            if(nums[mid] < target) head = mid + 1; 
            else tail = mid; 
        }
        return head;
    };                          
                                `}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h5 id='rotated-sorted'>
            <a href="https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/"
              target="_blank" rel="noopener noreferrer">leetcode 81. 搜索旋转排序数组 II</a>
          </h5>
          <p>
            思路：。。。。。。
            <br />
          </p>
          <div className="code">
            <pre>
              <code>
                {`
    var search = function(nums, target) {
        // 首先确定两头的值等不等于target,存在返回true 
        if(nums[0] == target || nums[nums.length - 1] == target) return true; 
        // 如果不等于的话，就把两头相等的值给他去掉,设置左右区间 
        let mid, l = 0,r = nums.length - 1,head,tail; 
        // 因为去掉两头相等的值，保证待查找区间的头的值大于尾部的值，二分到中间值的时候 方便做判断 
        while(l < nums.length && nums[l] == nums[0]) ++l; 
        while( r >= 0 && nums[r] == nums[0]) --r; 
        head = l, tail = r; 
        while(l <= r){//证明当前待查找区间还有数 
            mid = (l + r) >> 1; 
            if(nums[mid] == target) return true;
            //首先第一层判断，中间值在前半段有序区间还是 在后半段的有序区间中 
            if(nums[mid] <= nums[tail]){//在后半段的有序区间中 
                if(target > nums[mid] && target <= nums[tail]) l = mid + 1; 
                else r = mid - 1; 
            }else{//在前半段的有序区间中 
                if(target < nums[mid] && target >= nums[head]) r = mid - 1; 
                else l = mid + 1; 
            } 
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
  }
})