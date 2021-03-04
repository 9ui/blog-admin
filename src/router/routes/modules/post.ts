import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/post',
  name: 'Post',
  component: LAYOUT,
  redirect: '/post/list',
  meta: {
    icon: 'ion:list-outline',
    title: '文章列表',
  },
  children: [
    {
      path: 'list',
      name: 'List',
      component: () => import('/@/views/post/list/index.vue'),
      meta: {
        title: '文章列表',
        affix: true,
        icon: 'bx:bx-book',
      },
    },
    {
      path: 'add',
      name: 'Add',
      component: () => import('/@/views/post/add/index.vue'),
      meta: {
        title: '新增文章',
        affix: true,
        icon: 'bx:bx-book-add',
      },
    },
  ],
};

export default dashboard;
