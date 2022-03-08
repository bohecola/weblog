<template>
  <div v-loading="loading" class="page-home">
    <div v-if="!loading" class="page-home__tip-board">最近</div>
    <div class="page-home__list">
      <article-item
        v-for="item of docs"
        :key="item._id"
        :item="item">
      </article-item>
      <el-pagination
        v-model:currentPage="currentPage"
        background
        class="custom-pagination"
        layout="prev, pager, next"
        :small="true"
        :total="total"
        :page-sizes="[10, 20, 50, 100]"
        @current-change="handleCurrentChange">
      </el-pagination>
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
      page: 0,
      pages: 0
    });

    let loading = ref(false);

    const query = reactive({
      currentPage: 1,
      pageSize: 10
    });

    onBeforeMount(() => {
      getData();
    });

    const getData = async() => {
      try {
        loading.value = true;
        const res = await getArticleList({ page: query.currentPage, limit: query.pageSize });
        Object.assign(pageData, res);
        loading.value = false;
      } catch(err) {
        loading.value = false;
      }
    };

    const handleCurrentChange = (val: number) => {
      query.currentPage = val;
      getData();
    };

    return {
      ...toRefs(pageData),
      ...toRefs(query),
      loading,
      handleCurrentChange
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
}
</style>
