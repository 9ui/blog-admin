import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 2000,
  menu: {
    name: t('routes.demo.system.moduleName'),
    path: '/system',
    // tag: {
    //   content: 'new',
    // },
    children: [
      {
        path: 'account',
        name: t('routes.demo.system.account'),
        tag: {
          content: 'new',
        },
      },
      {
        path: 'changePassword',
        name: t('routes.demo.system.password'),
        tag: {
          content: 'new',
        },
      },
    ],
  },
};
export default menu;
