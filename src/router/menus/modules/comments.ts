import type { MenuModule } from '/@/router/types';
const menu: MenuModule = {
  orderNo: 3,
  menu: {
    path: '/comments',
    name: '评论',
    children: [
      {
        path: 'index',
        name: '评论列表',
      },
    ],
  },
};
export default menu;
