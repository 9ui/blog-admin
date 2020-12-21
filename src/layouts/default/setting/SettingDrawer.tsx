import { defineComponent, computed, unref } from 'vue';
import { BasicDrawer } from '/@/components/Drawer/index';
import { Divider } from 'ant-design-vue';
import {
  TypePicker,
  ThemePicker,
  SettingFooter,
  SwitchItem,
  SelectItem,
  InputNumberItem,
} from './components';

import { MenuTypeEnum } from '/@/enums/menuEnum';

import { useRootSetting } from '/@/hooks/setting/useRootSetting';
import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';
import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
import { useMultipleTabSetting } from '/@/hooks/setting/useMultipleTabSetting';
import { useTransitionSetting } from '/@/hooks/setting/useTransitionSetting';

import { baseHandler } from './handler';

import {
  HandlerEnum,
  contentModeOptions,
  topMenuAlignOptions,
  menuTriggerOptions,
  routerTransitionOptions,
  menuTypeList,
} from './enum';

import { HEADER_PRESET_BG_COLOR_LIST, SIDE_BAR_BG_COLOR_LIST } from '/@/settings/colorSetting';

export default defineComponent({
  name: 'SettingDrawer',
  setup(_, { attrs }) {
    const {
      getContentMode,
      getShowFooter,
      getShowBreadCrumb,
      getShowBreadCrumbIcon,
      getShowLogo,
      getFullContent,
      getColorWeak,
      getGrayMode,
      getLockTime,
    } = useRootSetting();

    const {
      getOpenPageLoading,
      getBasicTransition,
      getEnableTransition,
      getOpenNProgress,
    } = useTransitionSetting();

    const {
      getIsHorizontal,
      getShowMenu,
      getMenuType,
      getTrigger,
      getCollapsedShowTitle,
      getMenuFixed,
      getCollapsed,
      getCanDrag,
      getTopMenuAlign,
      getAccordion,
      getMenuWidth,
      getMenuBgColor,
      getIsTopMenu,
      getSplit,
    } = useMenuSetting();

    const {
      getShowHeader,
      getFixed: getHeaderFixed,
      getHeaderBgColor,
      getShowSearch,
    } = useHeaderSetting();

    const { getShowMultipleTab, getShowQuick, getShowRedo } = useMultipleTabSetting();

    const getShowMenuRef = computed(() => {
      return unref(getShowMenu) && !unref(getIsHorizontal);
    });

    function renderSidebar() {
      return (
        <>
          <TypePicker
            menuTypeList={menuTypeList}
            handler={(item: typeof menuTypeList[0]) => {
              baseHandler(HandlerEnum.CHANGE_LAYOUT, {
                mode: item.mode,
                type: item.type,
                split: unref(getIsHorizontal) ? false : undefined,
              });
            }}
            def={unref(getMenuType)}
          />
          <SwitchItem
            title="分割菜单"
            event={HandlerEnum.MENU_SPLIT}
            def={unref(getSplit)}
            disabled={!unref(getShowMenuRef) || unref(getMenuType) !== MenuTypeEnum.MIX}
          />
        </>
      );
    }

    function renderHeaderTheme() {
      return (
        <ThemePicker
          colorList={HEADER_PRESET_BG_COLOR_LIST}
          def={unref(getHeaderBgColor)}
          event={HandlerEnum.HEADER_THEME}
        />
      );
    }

    function renderSiderTheme() {
      return (
        <ThemePicker
          colorList={SIDE_BAR_BG_COLOR_LIST}
          def={unref(getMenuBgColor)}
          event={HandlerEnum.MENU_THEME}
        />
      );
    }

    /**
     * @description:
     */
    function renderFeatures() {
      return (
        <>
          <SwitchItem
            title="侧边菜单拖拽"
            event={HandlerEnum.MENU_HAS_DRAG}
            def={unref(getCanDrag)}
            disabled={!unref(getShowMenuRef)}
          />
          <SwitchItem
            title="菜单搜索"
            event={HandlerEnum.HEADER_SEARCH}
            def={unref(getShowSearch)}
            disabled={!unref(getShowHeader)}
          />
          <SwitchItem
            title="侧边菜单手风琴模式"
            event={HandlerEnum.MENU_ACCORDION}
            def={unref(getAccordion)}
            disabled={!unref(getShowMenuRef)}
          />
          <SwitchItem
            title="折叠菜单"
            event={HandlerEnum.MENU_COLLAPSED}
            def={unref(getCollapsed)}
            disabled={!unref(getShowMenuRef)}
          />
          <SwitchItem
            title="折叠菜单显示名称"
            event={HandlerEnum.MENU_COLLAPSED_SHOW_TITLE}
            def={unref(getCollapsedShowTitle)}
            disabled={!unref(getShowMenuRef) || !unref(getCollapsed)}
          />
          <SwitchItem
            title="固定header"
            event={HandlerEnum.HEADER_FIXED}
            def={unref(getHeaderFixed)}
            disabled={!unref(getShowHeader)}
          />
          <SwitchItem
            title="固定Sidebar"
            event={HandlerEnum.MENU_FIXED}
            def={unref(getMenuFixed)}
            disabled={!unref(getShowMenuRef)}
          />
          <SelectItem
            title="顶部菜单布局"
            event={HandlerEnum.MENU_TOP_ALIGN}
            def={unref(getTopMenuAlign)}
            options={topMenuAlignOptions}
            disabled={!unref(getShowHeader) || (!unref(getIsTopMenu) && !unref(getSplit))}
          />
          <SelectItem
            title="菜单折叠按钮"
            event={HandlerEnum.MENU_TRIGGER}
            def={unref(getTrigger)}
            options={menuTriggerOptions}
            disabled={!unref(getShowMenuRef)}
          />
          <SelectItem
            title="内容区域宽度"
            event={HandlerEnum.CONTENT_MODE}
            def={unref(getContentMode)}
            options={contentModeOptions}
          />
          <InputNumberItem
            title="自动锁屏"
            min={0}
            event={HandlerEnum.LOCK_TIME}
            defaultValue={unref(getLockTime)}
            formatter={(value: string) => {
              return parseInt(value) === 0 ? '不自动锁屏' : '分钟';
            }}
          />
          <InputNumberItem
            title="菜单展开宽度"
            max={600}
            min={100}
            step={10}
            event={HandlerEnum.MENU_WIDTH}
            disabled={!unref(getShowMenuRef)}
            defaultValue={unref(getMenuWidth)}
            formatter={(value: string) => `${parseInt(value)}px`}
          />
        </>
      );
    }

    function renderContent() {
      return (
        <>
          <SwitchItem
            title="面包屑"
            event={HandlerEnum.SHOW_BREADCRUMB}
            def={unref(getShowBreadCrumb)}
            disabled={!unref(getShowHeader)}
          />

          <SwitchItem
            title="面包屑图标"
            event={HandlerEnum.SHOW_BREADCRUMB_ICON}
            def={unref(getShowBreadCrumbIcon)}
            disabled={!unref(getShowHeader)}
          />

          <SwitchItem
            title="标签页"
            event={HandlerEnum.TABS_SHOW}
            def={unref(getShowMultipleTab)}
          />

          <SwitchItem
            title="标签页刷新按钮"
            event={HandlerEnum.TABS_SHOW_REDO}
            def={unref(getShowRedo)}
            disabled={!unref(getShowMultipleTab)}
          />

          <SwitchItem
            title="标签页快捷按钮"
            event={HandlerEnum.TABS_SHOW_QUICK}
            def={unref(getShowQuick)}
            disabled={!unref(getShowMultipleTab)}
          />

          <SwitchItem
            title="左侧菜单"
            event={HandlerEnum.MENU_SHOW_SIDEBAR}
            def={unref(getShowMenu)}
            disabled={unref(getIsHorizontal)}
          />

          <SwitchItem title="头部" event={HandlerEnum.HEADER_SHOW} def={unref(getShowHeader)} />
          <SwitchItem title="Logo" event={HandlerEnum.SHOW_LOGO} def={unref(getShowLogo)} />
          <SwitchItem title="底部" event={HandlerEnum.SHOW_FOOTER} def={unref(getShowFooter)} />
          <SwitchItem
            title="全屏内容"
            event={HandlerEnum.FULL_CONTENT}
            def={unref(getFullContent)}
          />

          <SwitchItem title="灰色模式" event={HandlerEnum.GRAY_MODE} def={unref(getGrayMode)} />

          <SwitchItem title="色弱模式" event={HandlerEnum.COLOR_WEAK} def={unref(getColorWeak)} />
        </>
      );
    }

    function renderTransition() {
      return (
        <>
          <SwitchItem
            title="顶部进度条"
            event={HandlerEnum.OPEN_PROGRESS}
            def={unref(getOpenNProgress)}
          />
          <SwitchItem
            title="切换Loading"
            event={HandlerEnum.OPEN_PAGE_LOADING}
            def={unref(getOpenPageLoading)}
          />

          <SwitchItem
            title="切换动画"
            event={HandlerEnum.OPEN_ROUTE_TRANSITION}
            def={unref(getEnableTransition)}
          />

          <SelectItem
            title="动画类型"
            event={HandlerEnum.ROUTER_TRANSITION}
            def={unref(getBasicTransition)}
            options={routerTransitionOptions}
            disabled={!unref(getEnableTransition)}
          />
        </>
      );
    }

    return () => (
      <BasicDrawer {...attrs} title="项目配置" width={330} wrapClassName="setting-drawer">
        {{
          default: () => (
            <>
              <Divider>{() => '导航栏模式'}</Divider>
              {renderSidebar()}
              <Divider>{() => '顶栏主题'}</Divider>
              {renderHeaderTheme()}
              <Divider>{() => '菜单主题'}</Divider>
              {renderSiderTheme()}
              <Divider>{() => '界面功能'}</Divider>
              {renderFeatures()}
              <Divider>{() => '界面显示'}</Divider>
              {renderContent()}
              <Divider>{() => '动画'}</Divider>
              {renderTransition()}
              <Divider />
              <SettingFooter />
            </>
          ),
        }}
      </BasicDrawer>
    );
  },
});
