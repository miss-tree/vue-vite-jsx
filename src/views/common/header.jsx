import { defineComponent } from 'vue'
import "./scss/header.scss"

export default defineComponent({
	name: 'pheader',
	components: {},
	setup() {
		return () => (
			<div class='banner'>
				<router-link to='/'>首页</router-link>
				<router-link to='/vite'>VITE</router-link>
				<router-link to='/vueModules'>VUE3</router-link>
				<router-link to='/Algorithm'>算法</router-link>
				<router-link to='/Mobile'>移动端</router-link>
			</div>
		)
	},
})
