import type { MenuModule } from '/@/router/types.d';

const menu: MenuModule = {
  orderNo: 3,
  menu: {
    path: '/post',
    name: '文章',
    children: [
      {
        path: '/list',
        name: '文章列表',
      },
      {
        path: '/demonstration',
        name: '演示视频',
      },
      {
        path: '/material',
        name: '我的素材',
      },
      {
        path: '/templates',
        name: '我的模板',
      },
      {
        path: '/videotools',
        name: '视频办公宝',
      },
    ],
  },
};
export default menu;
