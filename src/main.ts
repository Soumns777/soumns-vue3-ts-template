import { createApp } from 'vue';
import App from './App.vue';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

import router from '@/router/index';

createApp(App).use(router).mount('#app');
