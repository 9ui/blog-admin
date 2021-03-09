<template>
  <CollapseContainer title="新增文章">
    <BasicForm
      :labelWidth="100"
      :schemas="schemas"
      :actionColOptions="{ span: 24 }"
      :showSubmitButton="true"
      :showResetButton="false"
      @submit="handleSubmit"
    />
  </CollapseContainer>
</template>
<script lang="ts">
  import { defineComponent, h } from 'vue';
  import { useGo } from '/@/hooks/web/usePage';
  import { BasicForm, FormSchema } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { MarkDown } from '/@/components/Markdown';
  import { PageWrapper } from '/@/components/Page';
  import { addPostApi } from '/@/api/sys/post';
  const schemas: FormSchema[] = [
    {
      field: 'title',
      component: 'Input',
      label: '标题',
      defaultValue: 'defaultValue',
      rules: [{ required: true }],
    },
    {
      field: 'content_html',
      component: 'Input',
      label: '内容',
      defaultValue: '请输入内容',
      rules: [{ required: true, trigger: 'blur' }],
      render: ({ model, field }) => {
        return h(MarkDown, {
          value: model[field],
          onChange: (value: string) => {
            model[field] = value;
          },
        });
      },
    },
  ];
  export default defineComponent({
    components: { BasicForm, CollapseContainer, PageWrapper },
    setup() {
      const { createMessage } = useMessage();
      const go = useGo();
      return {
        schemas,
        handleSubmit: async (values: any) => {
          const params = Object.assign(values, { created_at: new Date(), updated_at: new Date() });
          await addPostApi(params);
          createMessage.success('添加成功!');
          go();
          go('/post/list');
        },
      };
    },
  });
</script>
