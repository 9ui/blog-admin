import type { MenuModule } from '/@/router/types';
const menu: MenuModule = {
  orderNo: 10,
  menu: {
    path: '/post',
    name: '文章',
    children: [
      {
        path: 'list',
        name: '文章列表',
      },
      {
        path: 'add',
        name: '写文章',
      },
    ],
  },
};
export default menu;
