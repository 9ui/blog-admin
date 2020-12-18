import type { AppRouteRecordRaw } from '/@/router/types';

// import modules from 'globby!/@/router/routes/modules/**/*.@(ts)';

import { DEFAULT_LAYOUT_COMPONENT } from '../constant';

// const routeModuleList: AppRouteModule[] = [];

// Object.keys(modules).forEach((key) => {
//   routeModuleList.push(modules[key]);
// });

// export const asyncRoutes = [
//   REDIRECT_ROUTE,
//   PAGE_NOT_FOUND_ROUTE,
//   ...genRouteModule(routeModuleList),
// ];

// 主框架根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  // component: DEFAULT_LAYOUT_COMPONENT,
  redirect: '/home',
  meta: {
    title: 'Root',
  },
  children: [],
};

export const HomeRoute: AppRouteRecordRaw = {
  path: '/home',
  name: 'Home',
  component: DEFAULT_LAYOUT_COMPONENT,
  meta: {
    title: '主页',
  },
};

// 基础路由
export const basicRoutes = [RootRoute, HomeRoute];
