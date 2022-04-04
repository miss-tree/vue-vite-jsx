import { defineConfig } from 'vite'
import vueJsx from "@vitejs/plugin-vue-jsx"
import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { resolve }  from 'path'
import copy from 'rollup-plugin-copy' //引入插件

// console.log("vite.config",process.env);
// https://vitejs.dev/config/
export default defineConfig({
    // assetsDir: 'static',
    // parallel: false,
	// publicPath: './',
	base:'./',
	resolve:{
		alias: {
			"@":path.resolve(__dirname,"src"),
			"comps":path.resolve(__dirname,"src/components"),
			"assets":path.resolve(__dirname,"src/assets")
		}
	},
  define:{
    WEBIP: JSON.stringify('http://47.113.195.11/')
  },
	plugins: [
		vue(),
		vueJsx(),
		viteMockServe({
			supportTs:false
		}),
		copy({
			targets: [
			  { src: './index.html', dest: './Index' }, //执行拷贝
			]
		})
	],
	build: {
		// 打包静态资源路径
		assetsDir: "./static",
		
		brotliSize: false,
		// 消除打包大小超过500kb警告
		chunkSizeWarningLimit: 2000,
        terserOptions:{
            compress:{
                drop_console:true
            }
        },
        outDir:'public',   //指定输出路径
		rollupOptions: {
			// 请确保外部化那些你的库中不需要的依赖
			// external: ['vue', 'vue-router'],
			input: {
				// 入口文件
				main: resolve(__dirname, "index.html")
				// 其他入口
				// ,nested: resolve(__dirname, 'xxxx.html')
			},
			output: {
			  // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
			  globals: {
				vue: 'Vue'
			  }
			}
		},
		// lib: {
		//   entry: 'src/packages/nutui.vue.ts',
		//   formats: ['es', 'umd']
		// }
	},
	esbuild: {
	  jsxFactory: 'h',
	  jsxFragment: 'Fragment'
	},
  server:{
    port: 9527
  }
})
