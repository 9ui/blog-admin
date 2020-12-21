import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: LAYOUT,
  redirect: '/home/welcome',
  meta: {
    title: '主页',
  },
  children: [
    {
      path: 'welcome',
      name: 'Welcome',
      component: () => import('/@/views/dashboard/welcome/index.vue'),
      meta: {
        title: '主页',
        affix: true,
      },
    },
  ],
};

export default dashboard;
