/**
 * @description: 登陆参数
 */
export interface LoginParams {
  username: string;
  password: string;
}

/**
 * @description: 退出返回状态
 */
export interface LogouApiResult {
  code: number;
}

/**
 * @description:获取用户id
 */
export interface GetUserInfoByUserIdParams {
  userId: string | number;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description:获取用户信息返回值
 */
export interface GetUserInfoModel {
  access_token: string;
}
