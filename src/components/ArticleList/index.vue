<template>
  <div v-loading="loading" class="article-list">
    <div class="tip-board">{{ title }}</div>
    <article-item
      v-for="item of docs"
      :key="item._id"
      :item="item">
    </article-item>
  </div>
  <el-pagination
    v-model:currentPage="currentPage"
    background
    class="custom-pagination"
    layout="prev, pager, next"
    :small="true"
    :total="total"
    @current-change="handleCurrentChange">
  </el-pagination>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive, toRefs, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getArticleList } from '@/api/common';
import { IGetArticleList } from '@/types';

import ArticleItem from './item.vue';

export default defineComponent({
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  setup() {
    const pageData: IGetArticleList = reactive({
      docs: [],
      total: 0,
      limit: 15,
      page: 0,
      pages: 0
    });

    onMounted(() => {
      fetchData();
    });

    const route = useRoute();

    const title = computed(() => {
      const hasQuery = Object.keys(route.query).length > 0;
      
      if (hasQuery) {
        if (route.query.categoryName) {
          return route.query.categoryName;
        }

        if (route.query.tagName) {
          return route.query.tagName;
        }
      }
      return '最近';
    });

    watch(() => route.path, (newVal, oldVal) => {
      if (newVal === oldVal) {
        fetchData();
      }
    }, { deep: true });

    const query = reactive({
      currentPage: 1,
      pageSize: 6
    });
    
    let loading = ref(false);
    const fetchData = async() => {
      try {
        loading.value = true;
        const res = await getArticleList({
          tagId: route.query.tagId as string,
          categoryId: route.query.categoryId as string,
          page: query.currentPage,
          limit: query.pageSize
        });
        Object.assign(pageData, res);
        loading.value = false;
      } catch(err) {
        loading.value = false;
      }
    };

    const handleCurrentChange = (val: number) => {
      query.currentPage = val;
      fetchData();
    };

    return {
      ...toRefs(pageData),
      ...toRefs(query),
      title,
      loading,
      handleCurrentChange
    };
  }
});
</script>
