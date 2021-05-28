import { defHttp } from '/@/utils/http/axios';
import {
  PostParams,
  PostListGetResultModel,
  deteltePostByIdParams,
  DeletePostResult,
} from './model/postModel';

enum Api {
  POST_LIST = '/article/articleList', // 文章列表
  ADD_POST = '/article/addArticle', // 新增文章
  DEL_POST = '/article/delArticle', // 删除文章
  POST_INFO = '/article/getArticle', // 文章详情
}

/**
 * @description: 获取文章列表
 * @param params 查询参数
 * @returns 返回文章列表
 */
export function postListApi(params: PostParams) {
  return defHttp.post<PostListGetResultModel>({
    url: Api.POST_LIST,
    params,
  });
}

/**
 * @description: 新增文章
 * @param params 文章信心
 * @returns 返回添加状态
 */
export function addPostApi(params: PostParams) {
  return defHttp.post({
    url: Api.ADD_POST,
    params,
  });
}

/**
 * 删除文章
 * @param params 文章id
 * @returns 返回删除状态
 */
export function deletePostApi(params: deteltePostByIdParams): Promise<DeletePostResult | null> {
  return defHttp.post({
    url: Api.DEL_POST,
    params,
  });
}
