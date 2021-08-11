import type { MenuModule } from '/@/router/types';
const menu: MenuModule = {
  orderNo: 2,
  menu: {
    name: '商品管理',
    path: '/product',
    children: [
      {
        path: 'category',
        name: '商品分类',
      },
      {
        path: 'manage',
        name: '管理商品',
      },
    ],
  },
};
export default menu;
