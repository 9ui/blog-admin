import { FormProps, FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '文章标题',
      dataIndex: 'title',
      width: 250,
      //   slots: { customRender: 'img' },
    },
    {
      title: '缩略图',
      dataIndex: 'img',
      width: 250,
      slots: { customRender: 'no' },
    },
    {
      title: '是否置顶',
      dataIndex: 'top',
      slots: { customRender: 'no' },
    },
    {
      title: '发布时间',
      dataIndex: 'created_at',
      width: 260,
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
}

export const getAdvanceSchema = (): FormSchema[] => {
  return [
    {
      field: 'title',
      label: '标题',
      component: 'Input',
      colProps: {
        xl: 12,
        xxl: 8,
      },
    },
  ];
};
export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      ...getAdvanceSchema(),
      //   {
      //     field: `field11`,
      //     label: `字段33`,
      //     component: 'Select',
      //     defaultValue: '1',
      //     slot: 'custom',
      //     componentProps: {
      //       options: [
      //         {
      //           label: '选项1',
      //           value: '1',
      //         },
      //         {
      //           label: '选项2',
      //           value: '2',
      //         },
      //       ],
      //     },
      //     colProps: {
      //       xl: 12,
      //       xxl: 8,
      //     },
      //   },
    ],
  };
}
