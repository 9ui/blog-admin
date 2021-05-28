/**
 * Get the configuration file variable name
 * @param env
 */
export const getConfigFileName = () => {
  return `__PRODUCTION__${'来画' || '__APP'}__CONF__`.toUpperCase().replace(/\s/g, '');
};
