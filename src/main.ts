import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './assets/css/reset.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Calendar, Paperclip, PriceTag } from '@element-plus/icons-vue'

import VMdPreview from '@kangc/v-md-editor/lib/preview.js';
import '@kangc/v-md-editor/lib/style/preview.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

VMdPreview.use(vuepressTheme, {
  Prism,
  extend(md: any) {
    // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
    // md.set(option).use(plugin);
  }
});

library.add(fab);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('calendar', Calendar);
app.component('paperclip', Paperclip);
app.component('price-tag', PriceTag);

app.use(router);
app.use(store);
app.use(ElementPlus);
app.use(VMdPreview);

app.mount('#app');