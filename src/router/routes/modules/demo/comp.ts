import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const comp: AppRouteModule = {
  path: '/comp',
  name: 'Comp',
  component: LAYOUT,
  redirect: '/comp/basic',
  meta: {
    title: '我的',
  },
  children: [
    {
      path: 'basic',
      name: 'BasicDemo',
      component: () => import('/@/views/demo/comp/button/index.vue'),
      meta: {
        title: '我的创作',
      },
    },
    {
      path: 'transition',
      name: 'transitionDemo',
      component: () => import('/@/views/demo/comp/transition/index.vue'),
      meta: {
        title: '我的素材',
      },
    },
    {
      path: 'countTo',
      name: 'CountTo',
      component: () => import('/@/views/demo/comp/count-to/index.vue'),
      meta: {
        title: '我的模板',
      },
    },
  ],
};

export default comp;
