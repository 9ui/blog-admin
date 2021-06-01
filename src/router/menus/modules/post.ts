import type { MenuModule } from '/@/router/types';
const menu: MenuModule = {
  orderNo: 2,
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
      {
        path: 'category',
        name: '分类',
      },
      {
        path: 'tag',
        name: '标签',
      },
    ],
  },
};
export default menu;
