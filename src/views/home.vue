<template>
  <div class="page-home">
    <div class="page-home__tip-board">最近</div>
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

<style lang="scss" scoped>
.page-home {
  &__tip-board {
    margin-bottom: 10px;
    font-size: 22px;
    color: #cc2a41;
  }
}
</style>
