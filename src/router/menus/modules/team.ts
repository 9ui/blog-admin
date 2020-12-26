import type { MenuModule } from '/@/router/types.d';

const menu: MenuModule = {
  orderNo: 3,
  menu: {
    path: '/team',
    name: '团队',
    children: [
      {
        path: '/materials',
        name: '视觉资产',
      },
      {
        path: '/cooperation',
        name: '与我协作',
      },
      {
        path: '/members',
        name: '团队成员',
      },
    ],
  },
};
export default menu;
