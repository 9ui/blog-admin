import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const mine: AppRouteModule = {
  path: '/team',
  name: 'Team',
  component: LAYOUT,
  redirect: '/team/materials',
  meta: {
    icon: 'bx:bxs-train',
    title: '视觉资产',
  },
  children: [
    {
      path: 'materials',
      name: 'Materials',
      component: () => import('/@/views/team/materials/index.vue'),
      meta: {
        title: '视觉资产',
        affix: true,
      },
    },
    {
      path: 'cooperation',
      name: 'Cooperation',
      component: () => import('/@/views/team/cooperation/index.vue'),
      meta: {
        title: '与我协作',
        affix: true,
      },
    },
    {
      path: 'members',
      name: 'Members',
      component: () => import('/@/views/team/members/index.vue'),
      meta: {
        title: '团队成员',
        affix: true,
      },
    },
  ],
};

export default mine;
