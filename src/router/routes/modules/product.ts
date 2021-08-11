import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const product: AppRouteModule = {
  path: '/product',
  name: 'Product',
  component: LAYOUT,
  redirect: '/product/category',
  meta: {
    icon: 'ion:list-outline',
    title: '商品分类',
  },
  children: [
    {
      path: 'category',
      name: 'Category',
      component: () => import('/@/views/product/category/index.vue'),
      meta: {
        title: '商品分类',
        affix: true,
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default product;
