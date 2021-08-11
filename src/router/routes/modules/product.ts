import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const product: AppRouteModule = {
  path: '/product',
  name: 'Product',
  component: LAYOUT,
  redirect: '/product/productCategory',
  meta: {
    icon: 'ion:list-outline',
    title: '商品分类',
  },
  children: [
    {
      path: 'category',
      name: 'ProductCategory',
      component: () => import('/@/views/product/category/index.vue'),
      meta: {
        title: '商品分类',
        icon: 'bx:bx-home',
      },
    },
    {
      path: 'manage',
      name: 'ManageProduct',
      component: () => import('/@/views/product/manage/index.vue'),
      meta: {
        title: '管理商品',
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default product;
