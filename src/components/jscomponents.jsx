import { defineComponent, reactive } from "vue";
export default defineComponent({
	name: 'jsxcomponents',
	props: {
		initValue: Number,
	},
	setup (prop) {
		const state = reactive({
			count: prop.initValue,
			newVal: 0,
		});
		const inc = () => state.newVal++;
		const dec = () => state.count--;
		return () => (
			<div>
				<p>{state.newVal}</p>
				<div>{state.count}</div>
				<button onClick={inc}>inc</button>
				<button onClick={dec}>dec</button>
			</div>
		);
	},
});