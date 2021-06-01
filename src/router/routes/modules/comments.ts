import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const comments: AppRouteModule = {
  path: '/comments',
  name: 'Comments',
  component: LAYOUT,
  redirect: '/comments',
  meta: {
    icon: 'ion:list-outline',
    title: '评论',
  },
  children: [
    {
      path: 'index',
      name: 'Comments',
      component: () => import('/@/views/comments/index.vue'),
      meta: {
        title: '评论列表',
        affix: true,
        icon: 'bx:bx-book',
      },
    },
  ],
};

export default comments;
