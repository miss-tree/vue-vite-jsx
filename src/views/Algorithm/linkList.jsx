import { defineComponent, reactive } from "vue";
export default defineComponent({
	name: 'linkList',
	setup (prop) {
		const state = reactive({
			count: prop.initValue,
			newVal: 0,
		});
		return () => (
			<div>
				<div>
					<h3>链表应用</h3>
				</div>
				<div>
					
				</div>
			</div>
		);
	},
});