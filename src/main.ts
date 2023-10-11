import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from './router';
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import VueDayjs from 'vue3-dayjs-plugin';

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(Antd).use(VueDayjs).use(pinia);

app.mount('#app');
