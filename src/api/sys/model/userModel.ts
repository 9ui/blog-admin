/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  account: string;
  psw: string;
}

/**
 * @description: Get user information
 */
export interface GetUserInfoByUserIdParams {
  userId: string | number;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  // 用户id
  id: string | number;
  // 账号
  acc: string;
  // 用户名
  nickname: string;
  // 手机
  phone: string | number;
  type: number;
  level: number;
  tmpLevel: number;
  startDay: number | string;
  endDay: number;
  kdxfRemain: number;
  uploadRecordingRemain: number;
  updateWatermarkRemain: number;
  nonWatermarkRemain: number;
  transformRemain: number;
  userClass: number;
  mailAddr: string;
  regtime: number;
  sonAccount: number;
  sex: number;
  headImgUrl: string;
  money: string | number;
  age: number;
  birth: string;
  userType: number;
  sign: null;
  qqId: null;
  weiboId: null;
  wechatId: null;
  qqUserInfo: null;
  weiboUserInfo: null;
  wechatUserInfo: null;
  guidance: null;
  pro: null;
  kdxfTimes: number;
  levelType: number;
  levelName?: string;
  uploadRecording: number; //录音上传
  updateWatermark: number; //自定义水印
  nonWatermark: number; //去水印
  transformRemains: number;
  loginType: string;
}
