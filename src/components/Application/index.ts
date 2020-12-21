import { withInstall } from '../util';
import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';
import AppLogo from './src/AppLogo.vue';

export const AppProvider = createAsyncComponent(() => import('./src/AppProvider.vue'));
export const AppSearch = createAsyncComponent(() => import('./src/search/AppSearch.vue'), {
  loading: true,
});
// export const AppLogo = createAsyncComponent(() => import('./src/AppLogo.vue'));

withInstall(AppLogo, AppProvider, AppSearch);

export { useAppProviderContext } from './src/useAppContext';
export { AppLogo };
