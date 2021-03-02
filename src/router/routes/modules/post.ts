import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const mine: AppRouteModule = {
  path: '/post',
  name: 'Post',
  component: LAYOUT,
  redirect: '/post',
  meta: {
    icon: 'bx:bxs-user',
    title: '文章列表',
  },
  children: [
    {
      path: 'list',
      name: 'List',
      component: () => import('/@/views/post/list/index.vue'),
      meta: {
        title: '文章列表',
        affix: true,
      },
    },
    {
      path: 'add',
      name: 'Add',
      component: () => import('/@/views/post/add/index.vue'),
      meta: {
        title: '新增文章',
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
