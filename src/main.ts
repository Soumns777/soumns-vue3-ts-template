import 'element-plus/theme-chalk/dark/css-vars.css';
import { createPersistedState } from 'pinia-persistedstate-plugin';
import App from './App.vue';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

import router from '@/router/index';

const store = createPinia();
store.use(createPersistedState());

createApp(App).use(router).use(store).mount('#app');
