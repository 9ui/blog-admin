import { createApp } from 'vue';
import router, { setupRouter } from '/@/router';

import { setApp } from './useApp';

import App from './App.vue';

import './index.css';

import { setupAntd } from '/@/setup/ant-design-vue';

const app = createApp(App);

// ui
setupAntd(app);

// router
setupRouter(app);

router.isReady().then(() => {
  app.mount('#app');
});

setApp(app);
