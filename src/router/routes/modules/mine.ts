import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const mine: AppRouteModule = {
  path: '/mine',
  name: 'Mine',
  component: LAYOUT,
  redirect: '/mine/creation',
  meta: {
    icon: 'bx:bxs-user',
    title: '我的创作',
  },
  children: [
    {
      path: 'creation',
      name: 'Creation',
      component: () => import('/@/views/mine/creation/index.vue'),
      meta: {
        title: '我的创作',
        affix: true,
      },
    },
    {
      path: 'demonstration',
      name: 'Demonstration',
      component: () => import('/@/views/mine/demonstration/index.vue'),
      meta: {
        title: '演示视频',
        affix: true,
      },
    },
    {
      path: 'material',
      name: 'Material',
      component: () => import('/@/views/mine/material/index.vue'),
      meta: {
        title: '我的素材',
        affix: true,
      },
    },
    {
      path: 'templates',
      name: 'Templates',
      component: () => import('/@/views/mine/templates/index.vue'),
      meta: {
        title: '我的模板',
        affix: true,
      },
    },
    {
      path: 'videotools',
      name: 'Videotools',
      component: () => import('/@/views/mine/videotools/index.vue'),
      meta: {
        title: '视频办公宝',
        affix: true,
      },
    },
  ],
};

export default mine;
