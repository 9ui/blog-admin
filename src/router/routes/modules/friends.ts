import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/friends',
  name: 'Friends',
  component: LAYOUT,
  redirect: '/friends',
  meta: {
    icon: 'ion:home-outline',
    title: '友情链接',
  },
  children: [
    {
      path: '',
      name: 'Friends',
      component: () => import('/@/views/friends/index.vue'),
      meta: {
        title: '友情链接',
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
