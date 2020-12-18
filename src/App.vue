<template>
  <ConfigProvider :locale="zhCN">
    <router-view />
  </ConfigProvider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import moment from 'moment';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  moment.locale('zh-cn');
  export default defineComponent({
    name: 'App',
    setup() {
      return {
        zhCN,
      };
    },
  });
</script>
