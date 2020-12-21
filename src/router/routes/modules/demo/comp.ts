import type { AppRouteModule } from '/@/router/types';

import { PAGE_LAYOUT_COMPONENT } from '/@/router/constant';

const comp: AppRouteModule = {
  path: '/comp',
  name: 'Comp',
  component: PAGE_LAYOUT_COMPONENT,
  redirect: '/comp/basic',
  meta: {
    icon: 'ant-design:table-outlined',
    title: '组件',
  },
  children: [
    {
      path: '/basic',
      name: 'BasicDemo',
      component: () => import('/@/views/demo/comp/button/index.vue'),
      meta: {
        title: '基础组件',
      },
    },
  ],
};

export default comp;
