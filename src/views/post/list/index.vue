<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleReloadCurrent"> 新增 </a-button>
        <a-button type="primary" @click="handleReload"> 刷新并返回第一页 </a-button>
      </template>
      <template #id="{ record }"> ID: {{ record.id }} </template>
      <template #no="{ record }"
        ><Tag color="green">{{ record.no }}</Tag>
      </template>
      <template #img>
        <TableImg
          :imgList="['https://picsum.photos/id/66/346/216', 'https://picsum.photos/id/67/346/216']"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableImg } from '/@/components/Table';
  import { Tag } from 'ant-design-vue';
  import { demoListApi } from '/@/api/demo/table';
  const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      //   slots: { customRender: 'id' },
    },
    {
      title: '发布时间',
      dataIndex: 'created_at',
      width: 120,
    },
    {
      title: '文章标题',
      dataIndex: 'title',
      width: 120,
      //   slots: { customRender: 'img' },
    },
    {
      title: '是否置顶',
      dataIndex: 'top',
      //   slots: { customRender: 'no' },
    },
    {
      title: '更新时间',
      dataIndex: 'updated_at',
      //   slots: { customRender: 'no' },
    },
    {
      title: '点赞数',
      dataIndex: 'praise_num',
    },

    {
      title: '评论数',
      dataIndex: 'comment_num',
    },
    {
      title: '作者',
      dataIndex: 'author',
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableImg, Tag },
    setup() {
      const [registerTable] = useTable({
        title: '文章列表',
        api: demoListApi,
        columns: columns,
      });

      return {
        registerTable,
      };
    },
  });
</script>
