import {defineComponent} from 'vue'
import Binary01 from '@/views/Algorithm/img/Binary01.png'
import queue04 from '@/views/Algorithm/img/queue04.png'

export default defineComponent({
    name:'BinaryTree',
    setup(){
        return ()=>(
            <div class='contentCenter'>
                <div>
                    <h3>二叉树</h3>
                    <p>
                        二叉树（Binary tree）是树形结构的一个重要类型。
                        二叉树是n个有限元素的集合，该集合或者为空、或者由一个称为根（root）
                        的元素及两个不相交的、被分别称为左子树和右子树的二叉树组成，是有序树。
                        当集合为空时，称该二叉树为空二叉树。在二叉树中，一个元素也称作一个结点。
                    </p>
                    <div class="line">
                        下面是常见的二叉树类型：
                    </div> 
                    <img src={Binary01} alt="二叉树"/>
                    <ul>
                        <li>
                            完全二叉树：只有在二叉树右兄弟最右边不满的情况下才能称为完成二叉树
                        </li>
                        <li>
                            满二叉树：每一个根节点都有两个子节点
                        </li>
                        <li>
                            完美二叉树：二叉树每一层都是满的
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
})