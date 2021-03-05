<template>
  <CollapseContainer title="新增文章">
    <BasicForm
      :labelWidth="100"
      :schemas="schemas"
      :actionColOptions="{ span: 24 }"
      :showSubmitButton="true"
      :showResetButton="false"
      :submitButtonOptions="{ text: '提交' }"
      @submit="handleSubmit"
    />
  </CollapseContainer>
</template>
<script lang="ts">
  import { defineComponent, h } from 'vue';
  //   import { useRouter } from 'vue-router';
  //   import { PageEnum } from '/@/enums/pageEnum';
  //   import { errorStore } from '/@/store/modules/error';
  import { BasicForm, FormSchema } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  //   import { useMessage } from '/@/hooks/web/useMessage';
  import { Tinymce } from '/@/components/Tinymce/index';
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
      rules: [{ required: true }],
      render: ({ model, field }) => {
        return h(Tinymce, {
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
      //   const { createMessage } = useMessage();
      return {
        schemas,
        handleSubmit: async (values: any) => {
          const result = await addPostApi(values);
          //   const { push } = useRouter();
          //   push('/post/list').then(() => {
          //     errorStore.commitErrorListCountState(0);
          //   });
          console.log('result', result);
        },
      };
    },
  });
</script>
