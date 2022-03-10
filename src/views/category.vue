<template>
  <base-category />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseCategory from '@/components/base-category.vue'

export default defineComponent({
  name: 'page-category',
  components: {
    BaseCategory
  }
});
</script>
