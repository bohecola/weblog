<template>
  <div class="page-list">
    <article-list></article-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArticleList from '@/components/ArticleList/index.vue';

export default defineComponent({
  name: 'List',
  components: {
    ArticleList
  },
});
</script>
