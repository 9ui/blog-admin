import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const comp: AppRouteModule = {
  path: '/',
  name: 'Solution',
  component: LAYOUT,
  redirect: '/solution',
  meta: {
    title: '解决方案',
  },
  children: [
    {
      path: 'solution',
      name: 'Solution',
      component: () => import('/@/views/solution/index.vue'),
      meta: {
        title: '解决方案',
      },
    },
  ],
};

export default comp;
