import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 2,
  menu: {
    name: '商品管理',
    path: '/product',
    children: [
      {
        path: 'category',
        name: '商品分类',
      },
      {
        path: 'manage',
        name: '管理商品',
        },
            {
        path: 'account',
        name: t('routes.demo.system.account'),
      },
      {
        path: 'changePassword',
        name: t('routes.demo.system.password'),
      },
    ],
  },
};
export default menu;
