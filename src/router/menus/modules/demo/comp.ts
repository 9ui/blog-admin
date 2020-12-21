import type { MenuModule } from '/@/router/types.d';
const menu: MenuModule = {
  orderNo: 30,
  menu: {
    name: '我的',
    path: '/comp',
    children: [
      {
        path: 'basic',
        name: '我的创作',
      },
      {
        path: 'countTo',
        name: '我的素材',
      },
      {
        path: 'transition',
        name: '我的模板',
      },
    ],
  },
};
export default menu;
