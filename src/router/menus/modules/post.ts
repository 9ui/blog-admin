import type { MenuModule } from '/@/router/types';
const menu: MenuModule = {
  orderNo: 10,
  menu: {
    path: '/post',
    name: '文章列表',
    children: [
      {
        path: 'list',
        name: '文章列表',
      },
      {
        path: 'add',
        name: '新增文章',
      },
    ],
  },
};
export default menu;
