<template>
  <span :class="`${prefixCls}-wrapper`">
    <Icon v-if="getIcon" :icon="getIcon" :size="18" :class="`${prefixCls}-wrapper__icon`" />
    <span :class="getNameClass">
      {{ getI18nName }}
      <MenuItemTag v-bind="$props" />
    </span>
  </span>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue';

  import Icon from '/@/components/Icon/index';

  import { useDesign } from '/@/hooks/web/useDesign';
  import { contentProps } from '../props';
  import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';

  export default defineComponent({
    name: 'MenuItemContent',
    components: { Icon, MenuItemTag: createAsyncComponent(() => import('./MenuItemTag.vue')) },
    props: contentProps,
    setup(props) {
      const { prefixCls } = useDesign('basic-menu-item-content');
      const getI18nName = computed(() => props.item?.name);
      const getIcon = computed(() => props.item?.icon);

      const getNameClass = computed(() => {
        const { showTitle } = props;
        return { [`${prefixCls}--show-title`]: showTitle, [`${prefixCls}__name`]: !showTitle };
      });
      return {
        prefixCls,
        getNameClass,
        getI18nName,
        getIcon,
      };
    },
  });
</script>
