import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const product: AppRouteModule = {
  path: '/post',
  name: 'POst',
  component: LAYOUT,
  redirect: '/post/postCategory',
  meta: {
    icon: 'ion:list-outline',
    title: '商品分类',
  },
  children: [
    {
      path: 'category',
      name: 'postCategory',
      component: () => import('/@/views/post/category/index.vue'),
      meta: {
        title: '文章分类',
        icon: 'bx:bx-home',
      },
    },
    {
      path: 'manage',
      name: 'ManagePost',
      component: () => import('/@/views/post/manage/index.vue'),
      meta: {
        title: '管理文章',
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default product;
