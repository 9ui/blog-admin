import type { MenuModule } from '/@/router/types.d';
const menu: MenuModule = {
  orderNo: 30,
  menu: {
    name: '组件',
    path: '/comp',
    children: [
      {
        path: 'basic',
        name: '基础组件',
      },
    ],
  },
};
export default menu;
