<template>
  <div>
    <button class="px-3 py-2 rounded-md" @click="count++"> count is: {{ count }} </button>
    <div class="shadow-2xl .w-1 .h-1"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    setup() {
      const count = ref(0);
      return {
        count,
      };
    },
  });
</script>

<style></style>
