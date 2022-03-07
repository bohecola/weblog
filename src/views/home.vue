<template>
  <div v-loading="loading" class="page-home">
    <div v-if="!loading" class="page-home__tip-board">最近</div>
    <div class="page-home__list">
      <article-item
        v-for="item of docs"
        :key="item._id"
        :item="item">
      </article-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref, toRefs } from 'vue';
import { getArticleList } from '@/api/common';
import { IGetArticleList } from '@/types';

import ArticleItem from '@/components/article-item.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ArticleItem
  },
  setup() {
    const pageData: IGetArticleList = reactive({
      docs: [],
      total: 0,
      limit: 15,
      page: 1,
      pages: 1
    });

    let loading = ref(false);

    onBeforeMount(async() => {
      try {
        loading.value = true;
        const res = await getArticleList({ page: 1, limit: 15 });
        Object.assign(pageData, res);
        loading.value = false;
      } catch(err) {
        loading.value = false;
      }
    });

    return {
      ...toRefs(pageData),
      loading
    };
  }
});
</script>

<style lang="scss" scoped>
.page-home {
  &__tip-board {
    margin-bottom: 10px;
    font-size: 22px;
    color: #cc2a41;
  }

  &__list {
    height: calc(100% - 32px);
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
