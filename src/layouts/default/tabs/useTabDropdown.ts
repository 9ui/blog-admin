import type { TabContentProps } from './types';
import type { DropMenu } from '/@/components/Dropdown';

import { computed, unref, reactive } from 'vue';
import { TabContentEnum, MenuEventEnum } from './types';
import { tabStore } from '/@/store/modules/tab';
import router from '/@/router';
import { RouteLocationNormalized } from 'vue-router';
import { useTabs } from '/@/hooks/web/useTabs';

import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';

export function useTabDropdown(tabContentProps: TabContentProps) {
  const state = reactive({
    current: null as Nullable<RouteLocationNormalized>,
    currentIndex: 0,
  });

  const { currentRoute } = router;

  const { getShowMenu, setMenuSetting } = useMenuSetting();
  const { getShowHeader, setHeaderSetting } = useHeaderSetting();

  const isTabs = computed(() => tabContentProps.type === TabContentEnum.TAB_TYPE);

  const getCurrentTab = computed(
    (): RouteLocationNormalized => {
      return unref(isTabs) ? tabContentProps.tabItem : unref(currentRoute);
    }
  );

  const getIsScale = computed(() => {
    return !unref(getShowMenu) && !unref(getShowHeader);
  });

  /**
   * @description: drop-down list
   */
  const getDropMenuList = computed(() => {
    if (!unref(getCurrentTab)) return;
    const { meta } = unref(getCurrentTab);
    const { path } = unref(currentRoute);

    // Refresh button
    const curItem = state.current;
    const index = state.currentIndex;
    const refreshDisabled = curItem ? curItem.path !== path : true;
    // Close left
    const closeLeftDisabled = index === 0;

    const disabled = tabStore.getTabsState.length === 1;

    // Close right
    const closeRightDisabled =
      index === tabStore.getTabsState.length - 1 && tabStore.getLastDragEndIndexState >= 0;
    const dropMenuList: DropMenu[] = [
      {
        icon: 'ion:reload-sharp',
        event: MenuEventEnum.REFRESH_PAGE,
        text: '刷新',
        disabled: refreshDisabled,
      },
      {
        icon: 'clarity:close-line',
        event: MenuEventEnum.CLOSE_CURRENT,
        text: '关闭',
        disabled: meta?.affix || disabled,
        divider: true,
      },
      {
        icon: 'line-md:arrow-close-left',
        event: MenuEventEnum.CLOSE_LEFT,
        text: '关闭左侧',
        disabled: closeLeftDisabled,
        divider: false,
      },
      {
        icon: 'line-md:arrow-close-right',
        event: MenuEventEnum.CLOSE_RIGHT,
        text: '关闭右侧',
        disabled: closeRightDisabled,
        divider: true,
      },
      {
        icon: 'dashicons:align-center',
        event: MenuEventEnum.CLOSE_OTHER,
        text: '关闭其他',
        disabled: disabled,
      },
      {
        icon: 'clarity:minus-line',
        event: MenuEventEnum.CLOSE_ALL,
        text: '关闭所有',
        disabled: disabled,
      },
    ];

    if (!unref(isTabs)) {
      const isScale = unref(getIsScale);
      dropMenuList.unshift({
        icon: isScale ? 'codicon:screen-normal' : 'codicon:screen-full',
        event: MenuEventEnum.SCALE,
        text: isScale ? '收起' : '展开',
        disabled: false,
      });
    }

    return dropMenuList;
  });

  const getTrigger = computed(() => {
    return unref(isTabs) ? ['contextmenu'] : ['click'];
  });

  function handleContextMenu(tabItem: RouteLocationNormalized) {
    return (e: Event) => {
      if (!tabItem) return;
      e?.preventDefault();
      const index = tabStore.getTabsState.findIndex((tab) => tab.path === tabItem.path);
      state.current = tabItem;
      state.currentIndex = index;
    };
  }

  function scaleScreen() {
    const isScale = !unref(getShowMenu) && !unref(getShowHeader);
    setMenuSetting({
      show: isScale,
    });
    setHeaderSetting({
      show: isScale,
    });
  }

  // Handle right click event
  function handleMenuEvent(menu: DropMenu): void {
    const { refreshPage, closeAll, closeCurrent, closeLeft, closeOther, closeRight } = useTabs();
    const { event } = menu;
    switch (event) {
      case MenuEventEnum.SCALE:
        scaleScreen();
        break;
      case MenuEventEnum.REFRESH_PAGE:
        // refresh page
        refreshPage();
        break;
      // Close current
      case MenuEventEnum.CLOSE_CURRENT:
        closeCurrent();
        break;
      // Close left
      case MenuEventEnum.CLOSE_LEFT:
        closeLeft();
        break;
      // Close right
      case MenuEventEnum.CLOSE_RIGHT:
        closeRight();
        break;
      // Close other
      case MenuEventEnum.CLOSE_OTHER:
        closeOther();
        break;
      // Close all
      case MenuEventEnum.CLOSE_ALL:
        closeAll();
        break;
    }
  }
  return { getDropMenuList, handleMenuEvent, handleContextMenu, getTrigger, isTabs };
}
