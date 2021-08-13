import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/tags',
  name: 'Tags',
  component: LAYOUT,
  redirect: '/tags',
  meta: {
    icon: 'ion:home-outline',
    title: '标签管理',
  },
  children: [
    {
      path: '',
      name: 'Tags',
      component: () => import('/@/views/tags/index.vue'),
      meta: {
        title: '标签管理',
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
