// Load on demand

import type { App } from 'vue';

import { Button } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

export function setupAntd(app: App<Element>) {
  // Here are the components required before registering and logging in
  app.use(Button);
}
