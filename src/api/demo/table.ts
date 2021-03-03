import { defHttp } from '/@/utils/http/axios';
import { DemoParams, DemoListGetResultModel } from './model/tableModel';

enum Api {
  DEMO_LIST = '/article/articleList',
}

/**
 * @description: 获取文章列表
 */
export function demoListApi(params: DemoParams) {
  return defHttp.request<DemoListGetResultModel>({
    url: Api.DEMO_LIST,
    method: 'GET',
    params,
  });
}
