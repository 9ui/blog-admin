<template>
  <Tooltip
    :title="t('layout.header.tooltipErrorLog')"
    placement="bottom"
    :mouseEnterDelay="0.5"
    @click="handleToErrorList"
  >
    <Badge :count="getCount" :offset="[0, 10]" dot :overflowCount="99">
      <BugOutlined />
    </Badge>
  </Tooltip>
</template>
<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { Tooltip, Badge } from 'ant-design-vue';

  import { BugOutlined } from '@ant-design/icons-vue';
  import { errorStore } from '/@/store/modules/error';
  import { PageEnum } from '/@/enums/pageEnum';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'ErrorAction',
    components: { BugOutlined, Tooltip, Badge },

    setup() {
      const { push } = useRouter();

      const getCount = computed(() => {
        return errorStore.getErrorListCountState;
      });

      function handleToErrorList() {
        push(PageEnum.ERROR_LOG_PAGE).then(() => {
          errorStore.commitErrorListCountState(0);
        });
      }

      return {
        getCount,
        handleToErrorList,
      };
    },
  });
</script>
