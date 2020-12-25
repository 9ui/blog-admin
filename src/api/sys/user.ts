import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  GetUserInfoByUserIdParams,
  GetUserInfoModel,
  LogouApiResult,
} from './model/userModel';
import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  Login = '/login',
  Logout = '/logout',
  GetUserInfoById = '/getUserInfoById',
  GetPermCodeByUserId = '/getPermCodeByUserId',
}

/**
 * @description: 登录操作
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.request<GetUserInfoModel>(
    {
      url: Api.Login,
      method: 'POST',
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}
/**
 * @description: 退出登录
 * @param mode
 */
export function logoutApi(mode: ErrorMessageMode = 'modal') {
  return defHttp.request<LogouApiResult>(
    { url: Api.Logout, method: 'PUT' },
    { errorMessageMode: mode }
  );
}

/**
 * @description: getUserInfoById
 */
// export function getUserInfoById(params: GetUserInfoByUserIdParams) {
//   return defHttp.request<GetUserInfoByUserIdModel>({
//     url: Api.GetUserInfoById,
//     method: 'GET',
//     params,
//   });
// }

export function getPermCodeByUserId(params: GetUserInfoByUserIdParams) {
  return defHttp.request<string[]>({
    url: Api.GetPermCodeByUserId,
    method: 'GET',
    params,
  });
}
