<template>
  <BasicTable @register="registerTable">
    <template #form-custom></template>
    <template #action="{ record, column }">
      <TableAction
        :actions="[
          {
            label: '删除',
            icon: 'ic:outline-delete-outline',
            popConfirm: {
              title: '是否删除此文章',
              confirm: handleDelete.bind(null, record, column),
            },
          },
          {
            label: '编辑',
            icon: 'bx:bx-edit',
            onClick: handleEdit.bind(null, record, column),
          },
        ]"
      />
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getFormConfig, getBasicColumns } from './tableData';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { postListApi, deletePostApi } from '/@/api/sys/post';
  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const { createMessage } = useMessage();

      const [registerTable, { reload }] = useTable({
        api: postListApi, //  调用api查询表格数据
        columns: getBasicColumns(), // 表列
        useSearchForm: true, // 是否开启搜索功能
        formConfig: getFormConfig(), // 表单配置
        // showTableSetting: true,
        rowSelection: { type: 'checkbox' }, // 显示checkbox
        bordered: true, // 边框
        // 操作栏
        actionColumn: {
          width: 160,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      // 删除文章
      async function handleDelete(record: Recordable) {
        const { id } = await record;
        await deletePostApi({ id: id });
        createMessage.success('删除成功!');
        // 刷新列表
        reload({
          page: 1,
        });
      }
      // 编辑文章
      function handleEdit(record: Recordable) {
        createMessage.info(`点击了编辑${record}`);
      }
      return {
        registerTable,
        handleDelete,
        handleEdit,
      };
    },
  });
</script>
