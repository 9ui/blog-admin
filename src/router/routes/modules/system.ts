import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/account',
  meta: {
    icon: 'ion:settings-outline',
    title: '系统管理',
  },
  children: [
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        title: '账号管理',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/system/account/index.vue'),
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        title: '修改密码',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/system/password/index.vue'),
    },
  ],
};

export default system;
