import type { MenuModule } from '/@/router/types';
const menu: MenuModule = {
  orderNo: 4,
  menu: {
    path: '/meterials',
    name: '媒体',
    children: [
      {
        path: 'upload',
        name: '上传',
        tag: {
          content: 'new',
        },
      },
    ],
  },
};
export default menu;
