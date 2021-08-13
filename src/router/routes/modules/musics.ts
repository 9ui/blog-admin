import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/musics',
  name: 'Musics',
  component: LAYOUT,
  redirect: '/musics',
  meta: {
    icon: 'ion:home-outline',
    title: '音乐管理',
  },
  children: [
    {
      path: '',
      name: 'Musics',
      component: () => import('/@/views/musics/index.vue'),
      meta: {
        title: '音乐管理',
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
