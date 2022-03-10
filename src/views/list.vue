<template>
  <article-list></article-list>
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

<style lang="scss" scoped>
.page-list {
  &__tip-board {
    margin-bottom: 10px;
    font-size: 22px;
    color: #cc2a41;
  }
}
</style>
