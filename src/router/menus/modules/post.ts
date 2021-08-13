import type { MenuModule } from '/@/router/types';

const menu: MenuModule = {
  orderNo: 2,
  menu: {
    name: '文章管理',
    path: '/post',
    children: [
      {
        path: 'category',
        name: '分类管理',
      },
      {
        path: 'manage',
        name: '文章管理',
      },
    ],
  },
};
export default menu;
