import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: 请求列表接口参数
 */
export type PostParams = BasicPageParams;

export interface getPostByIdParams {
  id: number | string;
}

export interface deteltePostByIdParams {
  id: number | string;
}

export interface PostListItem {
  id: string;
  author: string;
  banner: string;
  comment_num: number;
  content_html: string;
  praise_num: number;
  read_num: number;
  sort: null;
  thumbnail: null;
  updated_at: string;
  created_at: string;
  category: string;
  tag: string;
  title: string;
  top: boolean;
  version: number;
}

/**
 * @description: 请求列表返回值
 */
export type PostListGetResultModel = BasicFetchResult<PostListItem>;

export interface AppPostResult {
  message: string;
  code: number;
}

export interface DeletePostResult {
  message: string;
  code: number;
}
