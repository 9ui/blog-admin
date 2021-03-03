import { VuexModule, getModule, Module, Mutation } from 'vuex-module-decorators';
import store from '/@/store';

import { LOCK_INFO_KEY } from '/@/enums/cacheEnum';

import { hotModuleUnregisterModule } from '/@/utils/helper/vuexHelper';
import { setLocal, getLocal, removeLocal } from '/@/utils/helper/persistent';

// import { userStore } from './user';

export interface LockInfo {
  pwd: string | undefined;
  isLock: boolean;
}

const NAME = 'lock';
hotModuleUnregisterModule(NAME);
@Module({ dynamic: true, namespaced: true, store, name: NAME })
class Lock extends VuexModule {
  // lock info
  private lockInfoState: LockInfo | null = getLocal(LOCK_INFO_KEY);

  get getLockInfo(): LockInfo {
    return this.lockInfoState || ({} as LockInfo);
  }

  @Mutation
  commitLockInfoState(info: LockInfo): void {
    this.lockInfoState = Object.assign({}, this.lockInfoState, info);
    setLocal(LOCK_INFO_KEY, this.lockInfoState);
  }

  @Mutation
  resetLockInfo(): void {
    removeLocal(LOCK_INFO_KEY);
    this.lockInfoState = null;
  }
}
export const lockStore = getModule<Lock>(Lock);
