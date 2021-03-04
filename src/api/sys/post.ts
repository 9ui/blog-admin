import { defHttp } from '/@/utils/http/axios';
import { PostParams, PostListGetResultModel } from './model/postModel';

enum Api {
  POST_LIST = '/article/articleList', // 文章列表
  ADD_POST = '/article/addArticle', // 新增文章
  DEL_POST = '/article/delArticle', // 删除文章
  POST_INFO = '/article/getArticle', // 文章详情
}

/**
 * @description: 获取文章列表
 */
export function postListApi(params: PostParams) {
  return defHttp.request<PostListGetResultModel>({
    url: Api.POST_LIST,
    method: 'GET',
    params,
  });
}

/**
 * @description: 新增文章
 */
export function addPostApi(params: PostParams) {
  return defHttp.request({
    url: Api.ADD_POST,
    method: 'POST',
    params,
  });
}
