<template>
  <div class="page-home">
    <article-list></article-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ArticleList from '@/components/ArticleList/index.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ArticleList
  },
});
</script>
