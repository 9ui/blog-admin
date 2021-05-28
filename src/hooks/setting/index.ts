import type { GlobConfig } from '/#/config';

export const useGlobSetting = (): Readonly<GlobConfig> => {
  // Take global configuration
  const glob: Readonly<GlobConfig> = {
    apiUrl: '/api',
    shortName: '来画',
    urlPrefix: '',
    uploadUrl: '',
  };
  return glob as Readonly<GlobConfig>;
};
