import { defineConfig } from 'vite'
import vueJsx from "@vitejs/plugin-vue-jsx"
import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    // assetsDir: 'static',
    // parallel: false,
    // publicPath: './',
	resolve:{
		alias: {
			"@":path.resolve(__dirname,"src"),
			"comps":path.resolve(__dirname,"src/components")
		}
	},
	plugins: [
		vue(),
		vueJsx(),
		viteMockServe({
			supportTs:false
		})
	],
	esbuild: {
	  jsxFactory: 'h',
	  jsxFragment: 'Fragment'
	}
})
