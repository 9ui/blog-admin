import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const animation: AppRouteModule = {
  path: '/',
  name: 'Animation',
  component: LAYOUT,
  redirect: '/animation',
  meta: {
    title: '动画模板',
  },
  children: [
    {
      path: 'animation',
      name: 'Animation',
      component: () => import('/@/views/animation/templates.vue'),
      meta: {
        icon: 'bx:bx-abacus',
        title: '动画模板',
      },
    },
  ],
};

export default animation;
