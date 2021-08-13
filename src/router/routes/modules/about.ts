import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/about',
  name: 'About',
  component: LAYOUT,
  redirect: '/about',
  meta: {
    icon: 'ion:home-outline',
    title: '关于我',
  },
  children: [
    {
      path: '',
      name: 'About',
      component: () => import('/@/views/about/index.vue'),
      meta: {
        title: '关于我',
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
