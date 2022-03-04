<template>
  <div v-loading="loading" class="page-archive">
    <div 
      class="year-wrap"
      v-for="(yearItem, yearIndex) in pageData"
      :key="yearIndex">
      <div class="page-archive__year">#{{ yearItem.year }}</div>
      <div
        class="month-wrap"
        v-for="(monthItem, monthIndex) in yearItem.yearList"
        :key="monthIndex">
        <div class="page-archive__month">{{ monthItem.month }}月</div>
        <article-item
          v-for="item of monthItem.monthList"
          :key="item._id"
          :item="item">
        </article-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref } from 'vue';
import { getArchiveList } from '@/api/common';
import { IArchiveYearItem } from '@/types';
import ArticleItem from '@/components/article-item.vue';

export default defineComponent({
  name: 'archive',
  components: {
    ArticleItem
  },
  setup() {
    const pageData: Array<IArchiveYearItem> = reactive([]);
    
    let loading = ref(false);

    onBeforeMount(async() => {
      try {
        loading.value = true;
        const res = await getArchiveList();
        Object.assign(pageData, res);
        loading.value = false;
      } catch (err) {
        loading.value = false;
      }
    });

    return {
      pageData,
      loading
    };
  }
});
</script>

<style lang="scss" scoped>
  .page-archive {
    overflow-x: hidden;
    overflow-y: auto;
    .year-wrap {
      margin-bottom: 10px;
      &:last-child { margin-bottom: 0; }
    }
    .month-wrap {
      margin-bottom: 10px;
      &:last-child { margin-bottom: 0; }
    }
    &__year {
      font-size: 22px;
      color: #cc2a41;
      margin-bottom: 16px;
    }
    &__month {
      font-size: 20px;
      color: #cc2a41;
      margin-bottom: 4px;
    }
  }
</style>