<template>
  <div v-loading="loading" class="page-list">
    <div v-if="!loading" class="page-list__tip-board">{{ $route.query.name }}</div>
    <div class="page-list__list">
      <article-item 
        v-for="item of docs"
        :key="item._id"
        :item="item">
      </article-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref, toRefs, watch } from 'vue';
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';
import { getArticleList } from '@/api/common';
import { IGetArticleList } from '@/types';
import ArticleItem from '@/components/article-item.vue';

export default defineComponent({
  name: 'List',
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

    const route = useRoute();
    let loading = ref(false);

    async function fetchData(route: RouteLocationNormalizedLoaded) {
      try {
        if (route.path.includes('category')) {
          const res = await getArticleList({ 'category': route.query.categoryId });
          Object.assign(pageData, res);
        } else if (route.path.includes('tag')) {
          const res = await getArticleList({ 'tag': route.query.tagId });
          Object.assign(pageData, res);
        }
        loading.value = false;
      } catch(err) {
        loading.value = false;
      }
    }

    watch(() => route, async(newVal) => {
      loading.value = true;
      fetchData(newVal);
    }, { deep: true });

    onBeforeMount(async() => {
      loading.value = true;
      fetchData(route);
    });

    return {
      ...toRefs(pageData),
      loading
    };
  }
});
</script>

<style lang="scss" scoped>
.page-list {
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
