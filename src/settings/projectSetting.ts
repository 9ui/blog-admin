import type { ProjectConfig } from '/@/types/config';

import { MenuTypeEnum, MenuModeEnum, TriggerEnum } from '/@/enums/menuEnum';
import { CacheTypeEnum } from '/@/enums/cacheEnum';
import { ContentEnum, PermissionModeEnum, ThemeEnum, RouterTransitionEnum } from '/@/enums/appEnum';
import { primaryColor } from '../../build/config/lessModifyVars';

// ! You need to clear the browser cache after the change
const setting: ProjectConfig = {
  // 是否显示SettingButton
  showSettingButton: false,

  // 权限模式
  permissionMode: PermissionModeEnum.ROLE,

  // Permission-related cache is stored in sessionStorage or localStorage
  permissionCacheType: CacheTypeEnum.LOCAL,

  // 主题色
  themeColor: primaryColor,

  // 网站灰色模式，用于可能悼念的日期开启
  grayMode: false,

  // Color Weakness Mode
  colorWeak: false,

  // Whether to cancel the menu, the top, the multi-tab page display, for possible embedded in other systems
  fullContent: false,

  // content mode
  contentMode: ContentEnum.FULL,

  // Whether to display the logo
  showLogo: true,

  // Whether to show footer
  showFooter: false,

  // locale setting
  locale: {
    show: true,
    // Locale
    lang: 'zh_CN',
    // Default locale
    fallback: 'zh_CN',
    // available Locales
    availableLocales: ['zh_CN', 'en'],
  },

  // 头部配置
  headerSetting: {
    // header bg color
    bgColor: '#ffffff',
    // Fixed at the top
    fixed: true,
    // 是否显示顶部
    show: true,
    // theme
    theme: ThemeEnum.LIGHT,
    // 开启锁屏功能
    useLockPage: false,
    // 显示全屏按钮
    showFullScreen: false,
    // 显示文档按钮
    showDoc: false,
    // 显示消息中心按钮
    showNotice: true,
    // Whether to display the menu search
    showSearch: false,
  },

  // 菜单配置
  menuSetting: {
    // sidebar menu bg color
    bgColor: '#273352',
    //  Whether to fix the left menu
    fixed: true,
    // Menu collapse
    collapsed: false,
    // Whether to display the menu name when folding the menu
    collapsedShowTitle: false,
    // Whether it can be dragged
    // Only limited to the opening of the left menu, the mouse has a drag bar on the right side of the menu
    canDrag: false,
    // Whether to show no dom
    show: true,
    // Whether to show dom
    hidden: false,
    // Menu width
    menuWidth: 210,
    // Menu mode
    mode: MenuModeEnum.HORIZONTAL,
    // Menu type
    type: MenuTypeEnum.TOP_MENU,
    // Menu theme
    theme: ThemeEnum.LIGHT,
    // Split menu
    split: false,
    // Top menu layout
    topMenuAlign: 'start',
    // Fold trigger position
    trigger: TriggerEnum.HEADER,
    // Turn on accordion mode, only show a menu
    accordion: true,
  },

  // 多标签
  multiTabsSetting: {
    // 开启
    show: false,
    // 是否可以拖拽
    canDrag: true,
    // 开启快速操作
    showQuick: true,
    // 是否可以刷新
    showRedo: true,
  },

  // 动画配置
  transitionSetting: {
    //  是否开启切换动画
    enable: true,
    // 动画名
    basicTransition: RouterTransitionEnum.FADE,
    // 是否打开页面切换loading
    openPageLoading: true,
    //是否打开页面切换顶部进度条
    openNProgress: false,
  },

  // 是否开启KeepAlive缓存  开发时候最好关闭,不然每次都需要清除缓存
  openKeepAlive: true,

  // 自动锁屏时间，为0不锁屏。 单位分钟 默认1个小时
  lockTime: 0,

  // 显示面包屑
  showBreadCrumb: false,

  // 显示面包屑图标
  showBreadCrumbIcon: false,

  // 使用error-handler-plugin
  useErrorHandle: false,

  // 开启顶部进度条
  useOpenBackTop: true,

  //  是否可以嵌入iframe页面
  canEmbedIFramePage: true,

  // 切换界面的时候是否删除未关闭的message及notify
  closeMessageOnSwitch: true,

  // 切换界面的时候是否取消已经发送但是未响应的http请求。
  // 如果开启,想对单独接口覆盖。可以在单独接口设置
  removeAllHttpPending: true,
};

export default setting;
