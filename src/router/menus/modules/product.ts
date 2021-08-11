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
    ],
  },
};
export default menu;
