<template>
  <BasicTable @register="registerTable">
    <template #form-custom> custom-slot </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getFormConfig, getBasicColumns } from './tableData';
  import { postListApi } from '/@/api/sys/post';
  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        // title: '',
        api: postListApi,
        columns: getBasicColumns(),
        useSearchForm: true,
        formConfig: getFormConfig(),
        // showTableSetting: true,
        rowSelection: { type: 'checkbox' },
      });
      return {
        registerTable,
      };
    },
  });
</script>
