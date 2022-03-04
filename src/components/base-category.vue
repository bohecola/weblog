<template>
  <ul v-loading="loading" class="category-wrap">
    <li
      v-for="(item, index) of pageData"
      :key="index"
      @click="handleCategoryClick(item._id, item.name)"
      class="category-item">
      <span class="category-item-text">{{item.name}}</span>
      <span class="category-item-num">{{`(${item.count})`}}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import { Router, useRouter } from 'vue-router';
import { getCategoryList } from '@/api/common';
import { ICategoryListItem } from '@/types';

export default defineComponent({
  name: 'base-category',
  setup() {
    const pageData: Array<ICategoryListItem> = reactive([]);

    let loading = ref(false);

    onMounted(async() => {
      try {
        loading.value = true;
        const res = await getCategoryList();
        Object.assign(pageData, res);
        loading.value = false;
      } catch(err) {
        console.log(err);
        loading.value = false;
      }
    });

    const router: Router = useRouter();
    const handleCategoryClick = (categoryId: string, name: string) => {
      router.push({ name: 'CategoryList', query: { categoryId, name } });
    };

    return {
      pageData,
      loading,
      handleCategoryClick
    };
  }
});
</script>

<style lang="scss" scoped>
  .category-wrap {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    .category-item {
      height: 24px;
      &::before {
        color: #ccc;
        content: "▪";
        font-size: 12px;
        margin-right: 6px;
      }
      &-text {
        font-size: 16px;
        text-decoration: underline;
        cursor: pointer;
      }
      &-num {
        font-size: 16px;
        color: #777;
      }
    }
  }
</style>
