import type { LoginParams, GetUserInfoModel } from '/@/api/sys/model/userModel';

import store from '/@/store/index';
import { VuexModule, Module, getModule, Mutation, Action } from 'vuex-module-decorators';
import { hotModuleUnregisterModule } from '/@/utils/helper/vuexHelper';

import { PageEnum } from '/@/enums/pageEnum';
import { RoleEnum } from '/@/enums/roleEnum';
import { CacheTypeEnum, ROLES_KEY, TOKEN_KEY, USER_INFO_KEY } from '/@/enums/cacheEnum';

import { useMessage } from '/@/hooks/web/useMessage';

import router from '/@/router';

import { loginApi, logoutApi } from '/@/api/sys/user';

import { setLocal, getLocal, getSession, setSession } from '/@/utils/helper/persistent';
import { useProjectSetting } from '/@/hooks/setting';

import { ErrorMessageMode } from '/@/utils/http/axios/types';

export type UserInfo = Omit<GetUserInfoModel, 'roles'>;

const NAME = 'user';
hotModuleUnregisterModule(NAME);

const { permissionCacheType } = useProjectSetting();

function getCache<T>(key: string) {
  const fn = permissionCacheType === CacheTypeEnum.LOCAL ? getLocal : getSession;
  return fn(key) as T;
}

function setCache(USER_INFO_KEY: string, info: any) {
  if (!info) return;
  // const fn = permissionCacheType === CacheTypeEnum.LOCAL ? setLocal : setSession;
  setLocal(USER_INFO_KEY, info, true);
  // TODO
  setSession(USER_INFO_KEY, info, true);
}

@Module({ namespaced: true, name: NAME, dynamic: true, store })
class User extends VuexModule {
  // user info
  private userInfoState: UserInfo | null = null;

  // token
  private tokenState = '';

  // roleList
  private roleListState: RoleEnum[] = [];

  get getUserInfoState(): UserInfo {
    return this.userInfoState || getCache<UserInfo>(USER_INFO_KEY) || {};
  }

  get getTokenState(): string {
    return this.tokenState || getCache<string>(TOKEN_KEY);
  }

  get getRoleListState(): RoleEnum[] {
    return this.roleListState.length > 0 ? this.roleListState : getCache<RoleEnum[]>(ROLES_KEY);
  }

  @Mutation
  commitResetState(): void {
    this.userInfoState = null;
    this.tokenState = '';
    this.roleListState = [];
  }

  @Mutation
  commitUserInfoState(info: UserInfo): void {
    this.userInfoState = info;
    setCache(USER_INFO_KEY, info);
  }

  @Mutation
  commitRoleListState(roleList: RoleEnum[]): void {
    this.roleListState = roleList;
    setCache(ROLES_KEY, roleList);
  }

  @Mutation
  commitTokenState(info: string): void {
    this.tokenState = info;
    setCache(TOKEN_KEY, info);
  }

  /**
   * @description: 登录
   */
  @Action
  async login(
    params: LoginParams & {
      goHome?: boolean;
      mode?: ErrorMessageMode;
    }
  ): Promise<GetUserInfoModel | null> {
    try {
      const { goHome = true, mode, ...loginParams } = params;
      const data = await loginApi(loginParams, mode);
      // get user info
      this.commitUserInfoState(data);
      // save token
      this.commitTokenState(data.acc);
      goHome && (await router.push(PageEnum.BASE_HOME));
      return data;
    } catch (error) {
      return null;
    }
  }

  //   @Action
  //   async getUserInfoAction({ userId }: GetUserInfoByUserIdParams) {
  //     const userInfo = await getUserInfoById({ userId });
  //     const { role } = userInfo;
  //     const roleList = [role.value] as RoleEnum[];
  //     this.commitUserInfoState(userInfo);
  //     this.commitRoleListState(roleList);
  //     return userInfo;
  //   }

  /**
   * @description: 退出
   */
  @Action
  loginOut(goLogin = false): void  {
    goLogin && router.push(PageEnum.BASE_LOGIN);
  }

  /**
   * @description: Confirm before logging out
   */
  @Action
  async confirmLoginOut() {
    const { createConfirm } = useMessage();

    createConfirm({
      iconType: 'warning',
      title: '温馨提醒',
      content: '是否确认退出系统',
      cancelText: '取消',
      okText: '确认',
      onOk: async () => {
        await logoutApi();
        await this.loginOut(true);
      },
    });
  }
}
export const userStore = getModule<User>(User);
