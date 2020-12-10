import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import { setupAntd } from '/@/setup/ant-design-vue';

const app = createApp(App);

// ui
setupAntd(app);

app.mount('#app');
