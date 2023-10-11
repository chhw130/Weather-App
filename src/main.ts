import './assets/main.css';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from './router';
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import VueDayjs from 'vue3-dayjs-plugin';

const app = createApp(App);

app.use(router).use(Antd).use(VueDayjs);

app.mount('#app');
