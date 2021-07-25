import { defineComponent } from 'vue'

export default defineComponent({
    name:"vuePlugin",
    setup(){
        return()=>(
            <div>
                <div>vuePlugin</div>
                    <div className="code">
                        <pre>
                            <code>
                                {`
    import {defineComponent,defineAsyncComponent} from 'vue'
    
    components:{
		// comp1: defineAsyncComponent(() => import('./components/comp1')),
        // comp2: defineAsyncComponent(() => import('./components/comp2'))
	},
                               
                                `}
                            </code>
                        </pre>
                    </div>
            </div>
        )
    }
})