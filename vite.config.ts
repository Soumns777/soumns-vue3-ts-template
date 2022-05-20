import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import path from 'path';
const pathSrc = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true, // 可以支持 $ref 语法糖
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/sass/index.scss";`, // 这里结尾需要添加一个 ;
      },
    },
  },
  server: {
    host: '0.0.0.0',
    open: false, // 是否自动在浏览器打开
    // 反向代理解决跨域
    proxy: {
      '/api': {
        target: 'http://v.juhe.cn',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
