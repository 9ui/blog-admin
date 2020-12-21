<template>
  <span @click="handleLock">
    <Tooltip title="锁定屏幕" placement="bottom" :mouseEnterDelay="0.5">
      <LockOutlined />
    </Tooltip>
    <LockAction @register="register" />
  </span>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Tooltip } from 'ant-design-vue';

  import { LockOutlined } from '@ant-design/icons-vue';
  import { useModal } from '/@/components/Modal';
  import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';
  export default defineComponent({
    name: 'FullScreen',
    components: {
      LockOutlined,
      Tooltip,
      LockAction: createAsyncComponent(() => import('./LockModal.vue')),
    },

    setup() {
      const [register, { openModal }] = useModal();

      function handleLock() {
        openModal(true);
      }
      return {
        register,
        handleLock,
      };
    },
  });
</script>
