<template>
  <h2 class="mt-10">分类</h2>
  <base-category></base-category>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseCategory from '@/components/base-category.vue';

export default defineComponent({
  components: {
    BaseCategory
  }
});
</script>