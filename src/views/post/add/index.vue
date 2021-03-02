<template>
  <div class="p-4">
    <div class="flex justify-end">
      <a-button @click="toggleTheme" class="mb-2 w-30 mr-2" type="primary">黑暗主题</a-button>
      <a-button @click="save" class="mb-2 w-30" type="primary">保存</a-button>
    </div>
    <MarkDown v-model:value="value" ref="markDownRef" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { MarkDown, MarkDownActionType } from '/@/components/Markdown';
  export default defineComponent({
    components: { MarkDown },
    setup() {
      const markDownRef = ref<Nullable<MarkDownActionType>>(null);
      const valueRef = ref(`
# title
# content
`);
      /**
       * @description: 切换主题
       */
      const toggleTheme = () => {
        const markDown = unref(markDownRef);
        if (!markDown) return;
        const vditor = markDown.getVditor();
        vditor.setTheme('dark');
      };
      /**
       * @description：保存文章
       */
      const save = () => {
        console.log('save');
      };

      return {
        value: valueRef,
        toggleTheme,
        save,
        markDownRef,
      };
    },
  });
</script>
