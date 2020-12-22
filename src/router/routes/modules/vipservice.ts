import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const comp: AppRouteModule = {
  path: '/',
  name: 'VipService',
  component: LAYOUT,
  redirect: '/vipservice',
  meta: {
    title: '企业服务',
  },
  children: [
    {
      path: 'vipservice',
      name: 'VipService',
      component: () => import('/@/views/vipservice/index.vue'),
      meta: {
        title: '企业服务',
      },
    },
  ],
};

export default comp;
