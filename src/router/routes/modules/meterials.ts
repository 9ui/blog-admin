import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const comments: AppRouteModule = {
  path: '/meterials',
  name: 'Meterials',
  component: LAYOUT,
  redirect: '/meterials/upload',
  meta: {
    icon: 'ion:list-outline',
    title: '媒体',
  },
  children: [
    {
      path: 'upload',
      name: 'Upload',
      component: () => import('/@/views/meterials/upload/index.vue'),
      meta: {
        title: '上传',
        affix: true,
        icon: 'bx:bx-book',
      },
    },
  ],
};

export default comments;
