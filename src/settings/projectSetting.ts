import type { ProjectConfig } from '/@/types/config';

import { MenuTypeEnum, MenuModeEnum, TriggerEnum } from '/@/enums/menuEnum';
import { CacheTypeEnum } from '/@/enums/cacheEnum';
import { ContentEnum, PermissionModeEnum, ThemeEnum, RouterTransitionEnum } from '/@/enums/appEnum';
import { primaryColor } from '../../build/config/lessModifyVars';

// ! 改动后需要清空浏览器缓存
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

  // 色弱模式
  colorWeak: false,

  // 是否取消菜单,顶部,多标签页显示, 用于可能内嵌在别的系统内
  fullContent: false,

  // 主题内容宽度
  contentMode: ContentEnum.FULL,

  // 是否显示logo
  showLogo: true,

  // 是否显示底部信息 copyright
  showFooter: false,

  // 多语言配置
  locale: {
    show: true,
    // 当前语言
    lang: 'zh_CN',
    // 默认语言
    fallback: 'zh_CN',
    //允许的语言
    availableLocales: ['zh_CN', 'en'],
  },

  // 头部配置
  headerSetting: {
    // 背景色
    bgColor: '#ffffff',
    // 固定头部
    fixed: true,
    // 是否显示顶部
    show: true,
    // 主题
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
    showSearch: true,
  },

  // 菜单配置
  menuSetting: {
    // 背景色
    bgColor: '#273352',
    // 是否固定住菜单
    fixed: true,
    // 菜单折叠
    collapsed: false,
    // 折叠菜单时候是否显示菜单名
    collapsedShowTitle: false,
    // 是否可拖拽
    canDrag: false,
    // 是否显示
    show: true,
    // Whether to show dom
    hidden: false,
    // 菜单宽度
    menuWidth: 210,
    // 菜单模式
    mode: MenuModeEnum.INLINE,
    // 菜单类型
    type: MenuTypeEnum.SIDEBAR,
    // 菜单主题
    theme: ThemeEnum.DARK,
    // 分割菜单
    split: false,
    // 顶部菜单布局
    topMenuAlign: 'start',
    // 折叠触发器的位置
    trigger: TriggerEnum.HEADER,
    // 手风琴模式，只展示一个菜单
    accordion: false,
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
  showBreadCrumb: true,

  // 显示面包屑图标
  showBreadCrumbIcon: true,

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
