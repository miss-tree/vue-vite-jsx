import {defineComponent} from 'vue'

export default defineComponent({
    name:'Heap',
    setup(){

        return ()=>(
            <div class='contentCenter'>
                <div>
                    <h3>并查集</h3>
                    <p>
                        并查集可以解决连通性问题,例如微信朋友圈，A与B是朋友，B与C是朋友，
                        那么A、B、C就是一个朋友圈的。
                    </p>
                </div>
                <div>
                    <h5>并查集应用场景</h5>
                    <ul>
                        <li>
                            <div>查找关系</div>
                            <p>
                                例如查找两个人的最短距离关系
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
					<h5>LeetCode题</h5>
					<ul>
						<li>leetcode #547. 省份数量</li>
						<li>LeetCode #200. 岛屿数量</li>
						<li>leetcode #990. 等式方程的可满足性</li>
						<li>LeetCode #684. 冗余连接</li>
						<li>LeetCode #1319. 连通网络的操作次数</li>
						<li>LeetCode #128. 最长连续序列</li>
						<li>LeetCode #947. 移除最多的同行或同列石头</li>
					</ul>
				</div>
				<div>
					<h5 id="path-sum">
						<a href="https://leetcode-cn.com/problems/number-of-provinces/"
							target="_blank" rel="noopener noreferrer">leetcode 547. 省份数量</a>
					</h5>
					<p>
						思路：实现一个并查集并调用
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var findCircleNum = function(isConnected) {
        let circleNum = isConnected.length; 
        let uf = new UnionFind(circleNum); 
        for (let i = 0; i < circleNum; i++) { 
            for (let j = i + 1; j < circleNum; j++) { 
                if (isConnected[i][j] == 1) { 
                    uf.unite(i, j); 
                } 
            } 
        }
         return uf.getCount();
    };
    class UnionFind { 
        constructor(n) { 
            this.parent = new Array(n).fill(0).map((value, index) => index); 
            this.rank = new Array(n).fill(1); 
            this.setCount = n; 
        }
        findSet(index) { 
            if (this.parent[index] != index) { 
                this.parent[index] = this.findSet(this.parent[index]); 
            }
            return this.parent[index]; 
        }
        unite(index1, index2) { 
            let root1 = this.findSet(index1), root2 = this.findSet(index2); 
            if (root1 != root2) { 
                if (this.rank[root1] < this.rank[root2]) { 
                    [root1, root2] = [root2, root1]; 
                }
                this.parent[root2] = root1;
                this.rank[root1] += this.rank[root2]; 
                this.setCount--; 
            } 
        }
        getCount() { 
            return this.setCount; 
        }
        connected(index1, index2) { 
            let root1 = this.findSet(index1), root2 = this.findSet(index2); 
            return root1 == root2; 
        } 
    }                        
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/number-of-islands/"
							target="_blank" rel="noopener noreferrer">leetcode #200. 岛屿数量</a>
					</h5>
					<p>
						思路：。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
     let count;
     var numIslands = function(grid) {
         let m = grid.length; 
         let n = grid[0].length; 
         let uf = new UnionFind(m * n); 
         count = 0; 
         for (let i = 0; i < m; i++) { 
             for (let j = 0; j < n; j++) { 
                 if (grid[i][j] == '1') { count++; } 
             } 
         }  
         // 找当前节点的上下左右是否为1 
         for (let i = 0; i < m; i++) { 
             for (let j = 0; j < n; j++) { 
                 if (grid[i][j] == '1') {//当前岛屿数量加1 
                     if (i - 1 >= 0 && grid[(i - 1)][j] == '1') {// 上 
                         uf.unite(i * n + j, (i - 1) * n + j); 
                     }
                     if (i + 1 < m && grid[i + 1] [j] == '1') {// 下 
                         uf.unite(i * n + j, (i + 1) * n + j); 
                     }
                     if (j - 1 >= 0 && grid[i][j - 1] == '1') {// 左 
                         uf.unite(i * n + j, i * n + j - 1); 
                     }// 
                     if (j + 1 < n && grid[i] [j + 1] == '1') {// 右 
                         uf.unite(i * n + j, i * n + j + 1); 
                     } 
                 } 
             }
         }
         return count;   
     };
     
     class UnionFind { 
         constructor(n) { 
             this.parent = new Array(n).fill(0).map((value, index) => index); 
             this.rank = new Array(n).fill(1); 
             this.setCount = n; 
         }
         findSet(index) { 
             if (this.parent[index] != index) { 
                 this.parent[index] = this.findSet(this.parent[index]); 
             }
             return this.parent[index]; 
         }
         unite(index1, index2) { 
             let root1 = this.findSet(index1), root2 = this.findSet(index2); 
             if (root1 != root2) { 
                 if (this.rank[root1] < this.rank[root2]) { 
                     [root1, root2] = [root2, root1]; 
                 }
                 this.parent[root2] = root1;
                 count--;
                 this.rank[root1] += this.rank[root2]; 
                 this.setCount--; 
             } 
         }
         getCount() { 
             return this.setCount; 
         }
         connected(index1, index2) { 
             let root1 = this.findSet(index1), root2 = this.findSet(index2); 
             return root1 == root2; 
         } 
     }
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
				
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/satisfiability-of-equality-equations/"
							target="_blank" rel="noopener noreferrer">leetcode #990. 等式方程的可满足性</a>
					</h5>
					<p>
						思路：...。
						<br/>
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
        var equationsPossible = function(equations) {
            let size = equations.length; 
            let uf = new UnionFind(26); 
            for (str of equations) {//第一次循环扫描，遇到 “=” 将两边的字符合并。 
                if (str.charAt(1) == '=') {//前端字符不能相减，转下码；97是小a的ASCII码
                    uf.unite(str.charCodeAt(0) - 97, str.charCodeAt(3) - 97);
                    //charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。用于考虑26个小写字母； 
                } 
            }
            for (str of equations) { 
                if (str.charAt(1) == '!') { 
                    if(uf.findSet(str.charCodeAt(0) - 97) == uf.findSet(str.charCodeAt(3) - 97)){
                        //第二次扫描，遇到 “!”,如果两边的字符拥有共同的祖 先，返回false。
                        return false;
                    }
                } 
            }
            return true;        
        };
        
        class UnionFind { 
            constructor(n) { 
                this.parent = new Array(n).fill(0).map((value, index) => index); 
                this.rank = new Array(n).fill(1); 
                this.setCount = n; 
            }
            findSet(index) { 
                if (this.parent[index] != index) { 
                    this.parent[index] = this.findSet(this.parent[index]); 
                }
                return this.parent[index]; 
            }
            unite(index1, index2) { 
                let root1 = this.findSet(index1), root2 = this.findSet(index2); 
                if (root1 != root2) { 
                    if (this.rank[root1] < this.rank[root2]) { 
                        [root1, root2] = [root2, root1]; 
                    }
                    this.parent[root2] = root1;
                    this.rank[root1] += this.rank[root2]; 
                    this.setCount--; 
                } 
            }
            getCount() { 
                return this.setCount; 
            }
            connected(index1, index2) { 
                let root1 = this.findSet(index1), root2 = this.findSet(index2); 
                return root1 == root2; 
            } 
        }                        
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/redundant-connection/submissions/"
							target="_blank" rel="noopener noreferrer">leetcode #684. 冗余连接</a>
					</h5>
					<p>
						思路：....
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var findRedundantConnection = function(edges) {
        let nodesCount = edges.length; 
        let uf = new UnionFind(nodesCount); 
        for (let i = 0; i < nodesCount; i++) { 
            let edge = edges[i]; let node1 = edge[0], node2 = edge[1]; 
            if (uf.findSet(node1) != uf.findSet(node2)) { 
                uf.unite(node1, node2); 
            } else { return edge; } 
        }
        return [0];
    };
    
    
    class UnionFind { 
        constructor(n) { 
            this.parent = new Array(n).fill(0).map((value, index) => index); 
            this.rank = new Array(n).fill(1); 
            this.setCount = n; 
        }
        findSet(index) { 
            if (this.parent[index] != index) this.parent[index] = this.findSet(this.parent[index]) 
            return this.parent[index]; 
        }
        unite(index1, index2) { 
            let root1 = this.findSet(index1), root2 = this.findSet(index2); 
            if (root1 != root2) { 
                if (this.rank[root1] < this.rank[root2]) { 
                    [root1, root2] = [root2, root1]; 
                }
                this.parent[root2] = root1;
                this.rank[root1] += this.rank[root2]; 
                this.setCount--; 
            } 
        }
        getCount() { 
            return this.setCount; 
        }
        connected(index1, index2) { 
            let root1 = this.findSet(index1), root2 = this.findSet(index2); 
            return root1 == root2; 
        } 
    }                         
                                `}
                            </code>
                        </pre>
                    </div>
				</div>
                
                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected/"
							target="_blank" rel="noopener noreferrer">leetcode #1319. 连通网络的操作次数</a>
					</h5>
					<p>
						思路：。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var makeConnected = function(n, connections) {
        if (connections.length < n - 1) {//如果边的数量小于 n-1，则无论怎么样都无法连接所有节点 
            return -1; 
        }
        let uf = new UnionFind(n); 
        for (conn of connections) { 
            uf.unite(conn[0], conn[1]); 
        }
        return uf.getCount()-1;//遍历结束时，算出操作次数 setCount，setCount-1即为最少操作数 
        // 只需改动setCount - 1条边，就能连接所有集合
    };
    
    
    class UnionFind { 
        constructor(n) { 
            this.parent = new Array(n).fill(0).map((value, index) => index); 
            this.rank = new Array(n).fill(1); 
            this.setCount = n; 
        }
        findSet(index) { 
            if (this.parent[index] != index) this.parent[index] = this.findSet(this.parent[index]) 
            return this.parent[index]; 
        }
        unite(index1, index2) { 
            let root1 = this.findSet(index1), root2 = this.findSet(index2); 
            if (root1 != root2) { 
                if (this.rank[root1] < this.rank[root2]) { 
                    [root1, root2] = [root2, root1]; 
                }
                this.parent[root2] = root1;
                this.rank[root1] += this.rank[root2]; 
                this.setCount--; 
            } 
        }
        getCount() { 
            return this.setCount; 
        }
        connected(index1, index2) { 
            let root1 = this.findSet(index1), root2 = this.findSet(index2); 
            return root1 == root2; 
        } 
    }                          
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/longest-consecutive-sequence/"
							target="_blank" rel="noopener noreferrer">leetcode 128. 最长连续序列</a>
					</h5>
					<p>
						思路：。。。。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var longestConsecutive = function(nums) {
        let num_set = new Set(); 
        for (num of nums) {// 第一步，遍历数组，把数组里面的值都放到放到set里面，方便我们查找 
            num_set.add(num); 
        }
        let longestStreak = 0; //记录我们目前找到的 最长的序列长度，初始化为0； 
        for (num of nums) { //接着 遍历这个数组， 
            if (!num_set.has(num - 1)) { //判断是否包含num-1;如果不包含就找到了当前的序列头部 
                let currenNum = num; //接着把这个头部存起来 
                let currenStreak = 1; 
                while (num_set.has(currenNum + 1)) { //判断我们这个集合里面包含num+1 
                    currenNum += 1; // 
                    currenStreak += 1; //找到之后，我们的长度++; 
                } //这个数所在的序列长度 
                longestStreak = Math.max(longestStreak, currenStreak); //两者取一个最大 值 
            } 
        }
        return longestStreak;//最后把长度返回
    };                         
                                `}
                            </code>
                        </pre>
                    </div>
				</div>

                <div>
					<h5>
						<a href="https://leetcode-cn.com/problems/most-stones-removed-with-same-row-or-column/"
							target="_blank" rel="noopener noreferrer">leetcode 947. 移除最多的同行或同列石头</a>
					</h5>
					<p>
						思路：....。
					</p>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    var removeStones = function(stones) {
        let stoneNum = stones.length; // 石头的数量 
        let uf = new UnionFind(stoneNum); //以石头个数为大小的并查集 
        for (let i = 0; i < stoneNum; i++) { // 那第一个石头 
            for (let j = i + 1; j < stoneNum; j++) { // 拿第二块石头 
                let [x1, y1] = stones[i]; // 第一块石头的第0个值，第一个值 
                let [x2, y2] = stones[j]; // 拿一块石头和后面石头的坐标 
                if (x1 == x2 || y1 == y2) { // 证明拿到的这两块石头进行联通 
                    uf.unite(i, j); 
                } 
            } 
        }
        return stoneNum - uf.getCount(); // 原先的石头数量 - 合并完之后的石头数量 = 销毁的石头数量
    };
    
    class UnionFind { 
        constructor(n) { 
            this.parent = new Array(n).fill(0).map((value, index) => index); 
            this.rank = new Array(n).fill(1); 
            this.setCount = n; 
        }
        findSet(index) { 
            if (this.parent[index] != index) { 
                this.parent[index] = this.findSet(this.parent[index]); 
            }
            return this.parent[index]; 
        }
        unite(index1, index2) { 
            let root1 = this.findSet(index1), root2 = this.findSet(index2); 
            if (root1 != root2) { 
                if (this.rank[root1] < this.rank[root2]) { 
                    [root1, root2] = [root2, root1]; 
                }
                this.parent[root2] = root1;
                this.rank[root1] += this.rank[root2]; 
                this.setCount--; 
            } 
        }
        getCount() { 
            return this.setCount; 
        }
        connected(index1, index2) { 
            let root1 = this.findSet(index1), root2 = this.findSet(index2); 
            return root1 == root2; 
        } 
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