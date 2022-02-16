<template>
  <div class="sider-category">
    <ul class="sider-category__content">
      <li
        v-for="(item, index) of categories"
        :key="index"
        @click="handleCategoryClick(item._id)"
        class="sider-category__item">
        <span class="sider-category__item-text">{{ item.name }}</span>
        <span class="sider-category__item-num">{{ `(${item.articles && item.articles.length })` }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { Router, useRouter } from 'vue-router';
import { getCategoryList } from '@/api/common';

export default defineComponent({
  name: 'page-category',
  setup() {
    const pageData = reactive({
      categories: []
    });
    onMounted(async () => {
      const res = await getCategoryList();
      pageData.categories = res.data;
    });
    const router: Router = useRouter();
    const handleCategoryClick = (id: string) => {
      router.push(`/category/${id}`);
    }


    return {
      ...toRefs(pageData),
      handleCategoryClick
    };
  }
});
</script>

<style lang="scss" scoped>
  .sider-category {
    &__content {
      overflow-x: hidden;
      overflow-y: auto;
    }
    &__item {
      height: 32px;
      &::before {
        color: #ccc;
        content: "▪";
        font-size: 12px;
        margin-right: 6px;
        transition: .2s ease;
      }
      &-text {
        font-size: 18px;
        text-decoration: underline;
        cursor: pointer;
      }
      &-num {
        font-size: 18px;
        color: #777;
      }
    }
  }
</style>
