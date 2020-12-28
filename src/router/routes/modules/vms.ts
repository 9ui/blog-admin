import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const animation: AppRouteModule = {
  path: '/',
  name: 'VMS',
  component: LAYOUT,
  redirect: '/vms',
  meta: {
    title: '动画模板',
  },
  children: [
    {
      path: 'vms',
      name: 'VMS',
      component: () => import('/@/views/vms/index.vue'),
      meta: {
        icon: 'bx:bx-abacus',
        title: '视频营销',
      },
    },
  ],
};

export default animation;
