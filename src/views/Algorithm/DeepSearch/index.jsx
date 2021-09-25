import {defineComponent} from 'vue'
// import CardinalitySort from '@/views/Algorithm/img/CardinalitySort.gif' 

export default defineComponent({
    name:'Heap',
    setup(){

        return ()=>(
            <div class='contentCenter'>
                <div>
                    <h3>哈希表布隆过滤器</h3>
                    <p>
                        哈希表是一种设计感极强的数据结构。是根据 键 （Key）而直接访问在记忆体储存位置的 数据结构 。
                        也就是说，它通过计算一个关于键值的函数，将所需查询的数据 映射 到表中一个位置来访问记录，
                        这加快了查找速度。. 这个映射函数称做 散列函数 ，存放记录的数组称做 散列表 。
                        (存储空间与数量有关。)
                        但是在插入表格的时候会有冲突，下面的常用的解决冲突的方法：
                    </p>
                    <ul>
                        <li>开放地址法：用当前冲突的下标每次冲突 +1 ，或者每次下次冲突 n平方n， 计算方式比较灵活。 </li>
                        <li>再哈希法：(字面意思)</li>
                        <li>建立公共溢出区：将冲突的变量放到一个公共区域里</li>
                        <li>链式地址法(拉链法--推荐)：就是在当前存储区域下建立一条链表结构</li>
                    </ul>
                    <p>
                        布隆过滤器是一个很长的二进制向量和一系列随机映射函数。布隆过滤器可以用于检索一个元素是否在一个集合中。
                        它的优点是空间效率和查询时间都比一般的算法要好的多，缺点是有一定的误识别率和删除困难。
                        (存储空间与数量无关。)
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
					<ul>
						<li>leetcode #705. 设计哈希集合</li>
						<li>LeetCode #706. 设计哈希映射</li>
						<li>leetcode #面试题 16.25. LRU 缓存</li>
						<li>LeetCode #187. 重复的DNA序列</li>
						<li>LeetCode #318. 最大单词长度乘积</li>
						<li>LeetCode #240. 搜索二维矩阵 II</li>
						<li>LeetCode #979. 在二叉树中分配硬币</li>
						<li>LeetCode #430. 扁平化多级双向链表</li>
						<li>LeetCode #863. 二叉树中所有距离为 K 的结点</li>
					</ul>
				</div>
				<div>
					<h5 id="path-sum">
						<a href="https://leetcode-cn.com/problems/design-hashset/"
							target="_blank" rel="noopener noreferrer">leetcode 705. 设计哈希集合</a>
					</h5>
					<p>
						思路：... 
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var MyHashSet = function() {
        this.BASE = 100; 
        this.data = new Array(this.BASE).fill(0).map(() => new Array());
    };
    
    MyHashSet.prototype.add = function(key) {
        const h = this.hash(key); 
        for (const element of this.data[h]) { 
            if (element === key) { return; } 
        }
        this.data[h].push(key);
    };
    
    MyHashSet.prototype.remove = function(key) {
        const h = this.hash(key); 
        const it = this.data[h]; 
        for (let i = 0; i < it.length; ++i) { 
            if (it[i] === key) { 
                it.splice(i, 1); 
                return; 
            }
        }
    };
    
    MyHashSet.prototype.contains = function(key) {
        const h = this.hash(key); 
        for (const element of this.data[h]) { 
            if (element === key) { return true; } 
        }
        return false;
    }; 
    MyHashSet.prototype.hash = function(key) { return key % this.BASE; }                  
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/design-hashmap/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 706. 设计哈希映射</a>
					</h5>
					<p>
						思路：。。。 
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var MyHashMap = function() {
        this.BASE = 100; 
        this.data = new Array(this.BASE).fill(0).map(() => new Array());
    };
    
    MyHashMap.prototype.put = function(key, value) {
        const h = this.hash(key); 
        for (const it of this.data[h]) { 
            if (it[0] === key) { it[1] = value; return; } 
        }
        this.data[h].push([key, value]);
    };
    
    MyHashMap.prototype.get = function(key) {
        const h = this.hash(key); 
        for (const it of this.data[h]) { 
            if (it[0] === key) { return it[1]; } 
        }
        return -1;
    };
    
    MyHashMap.prototype.remove = function(key) {
        const h = this.hash(key); 
        for (const it of this.data[h]) { 
            if (it[0] === key) { 
                const idx = this.data[h].indexOf(it); 
                this.data[h].splice(idx, 1); 
                return; 
            } 
        }
    };
    MyHashMap.prototype.hash = function(key) { 
        // 计算得到当前哈希表的，当前待插入值的数据的对应的下标 
        return key % this.BASE; 
    }
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/lru-cache-lcci/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 面试题 16.25. LRU 缓存</a>
					</h5>
					<p>
						思路：...。
						<br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
        var LRUCache = function(capacity) {
            // 最大缓存容量 
            this.capacity = parseInt(capacity, 10); 
            // 数据缓存对象 
            this.cache = {}; 
            // 键名缓存数组,还可提供key的访问时间顺序 
            this.keys = [];
        };
        
        LRUCache.prototype.get = function(key) {
            const idx = this.keys.indexOf(key); 
            if(idx === -1) return -1; 
            // 更新keys的顺序 
            this.keys.push(this.keys.splice(idx, 1)[0]); 
            return this.cache[key];
        };
        
        LRUCache.prototype.put = function(key, value) {
            const idx = this.keys.indexOf(key); 
            if(idx !== -1){ // 更新原有数据和访问时间顺序 
                this.keys.push(this.keys.splice(idx, 1)[0]); 
            }else{
                if(this.keys.length === this.capacity){ // 超出缓存容量 // 删除缓存 
                    this.cache[this.keys.shift()] = null; 
                }
                this.keys.push(key); 
            }
            this.cache[key] = value;
        };                
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/repeated-dna-sequences/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 187. 重复的DNA序列</a>
					</h5>
					<p>
						思路：....
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var findRepeatedDnaSequences = function(s) {
        if (s.length < 11) return []; 
        let n = s.length, map = new Map(), left = 0, right = 10, res= []; 
        while (right <= n) { 
            let cur = s.substring(left, right); 
            map.set(cur, map.has(cur) ? map.get(cur) + 1 : 1); 
            left++; 
            right++; 
        }
        for (let [k, v] of map) { if (v > 1) res.push(k); }
        return res;
    };                       
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/maximum-product-of-word-lengths/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 318. 最大单词长度乘积</a>
					</h5>
					<p>
						思路：。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var maxProduct = function(words) {
        var getCharCodeDiff = function(char) { 
            return char.charCodeAt(0) - 'a'.charCodeAt(0); 
        };
        var n = words.length, lens = [], masks = []; 
        for (var i = 0; i < n; i++) { 
            var len = words[i].length; lens.push(len); 
            var mask = 0; 
            for (var j = 0; j < len; j++) { mask |= 1 << getCharCodeDiff(words[i][j]); }
            masks.push(mask); 
        }
        var max = 0; 
        for (var i = 0; i < n; i++) { 
            for (var j = i+1; j < n; j++) { 
                if ((masks[i] & masks[j]) == 0) { max = Math.max(max, lens[i] * lens[j]); } 
            } 
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
						<a href="https://leetcode-cn.com/problems/search-a-2d-matrix-ii/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 240. 搜索二维矩阵 II</a>
					</h5>
					<p>
						思路：。。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var searchMatrix = function(matrix, target) {
        let i = 0, j = matrix[0].length -1; 
        while(i < matrix.length && j >= 0){ // i, j 等于待查找值 
             if(matrix[i][j] == target) return true; 
             if(matrix[i][j] < target) i += 1; 
             else j -= 1; 
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
						<a href="https://leetcode-cn.com/problems/distribute-coins-in-binary-tree/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 979. 在二叉树中分配硬币</a>
					</h5>
					<p>
						思路：....。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var distributeCoins = function(root) {
        function dfs(root){ 
            if(root == null) return [0,0];//移动的步数，一个是需要的金币的数量 
            let left = dfs(root.left), right = dfs(root.right), read = (right[1] + left[1] + root.val - 1); 
            return [Math.abs(read) + left[0] + right[0],read ] 
        }
        return dfs(root)[0];
    };      
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 430. 扁平化多级双向链表</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var flatten = function(head) {
        if(head == null) return null; // 指针p 
        let p = head,q,k; // 当p不指向空地时候，每次都指向当前地这个节点 
        while(p){ 
            k = null; 
            if(p.child){ 
                //如果当前节点要是有孩子节点，就把孩子节点进行扁平化处理，存到k 里面 
                //k是扁平化之后的链表， 将p跟k进行连接，再移动到k链表的最后一位，k和q进行连接，q 是p的下一位那么就跟q连接 
                k = flatten(p.child); 
                p.child = null; 
                q = p.next; 
                p.next = k; 
                k.prev = p; // 再让p顺着k链表走到最后一位 
                while(p.next) p = p.next; 
                p.next = q; 
                if(q) q.prev = p;//要判断q是否为空，如果q为空，那么这样访问 q.prev是非法的 
             }
             p = p.next; 
         }
         return head; 
     };                       
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/all-nodes-distance-k-in-binary-tree/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode 863. 二叉树中所有距离为 K 的结点</a>
					</h5>
					<p>
						思路：。。。。。。
                        <br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var distanceK = function(root, target, k) {
        if(!root) return []; 
        let targetNode = null; 
        let res = []; 
        let paths = []; // 找到target节点，存储到targetNode中 
        dfs(root, target); // 从当前节点向下寻找 
        getdownDis(targetNode, k); // 从当前节点向上寻找 
        while(targetNode.parent && k>0){ 
            targetNode = targetNode.parent; 
            getdownDis(targetNode, --k); 
        }
        // 辅助函数 
        function dfs(root, target){ 
            if(!root || targetNode) return; 
            if(root.val === target.val){ targetNode = root; }
            if(root.left){ root.left.parent = root; dfs(root.left, target); }
            if(root.right){ root.right.parent = root; dfs(root.right, target); } 
        }
        // 辅助函数 
        function getdownDis(node, k){ 
            if(node === null || paths.indexOf(node) !== -1) return; 
            paths.push(node); 
            if(k>0){ getdownDis(node.left, k-1); 
                getdownDis(node.right, k-1); 
            }else if(k === 0){ res.push(node.val); } 
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