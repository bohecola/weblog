<template>
  <div class="sider-category">
    <div class="sider-category__title">分类</div>
    <ul class="sider-category__content">
      <li
        v-for="(item, index) of categories"
        :key="index"
        class="sider-category__item">
        <span class="sider-category__item-text">{{ item.name }}</span>
        <span class="sider-category__item-num">{{ `(${item.articles && item.articles.length })` }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { getCategoryList } from '@/api/common';

export default defineComponent({
  name: 'category',
  setup() {
    const pageData = reactive({
      categories: []
    });
    onMounted(async () => {
      const res = await getCategoryList();
      pageData.categories = res.data;
    })

    return {
      ...toRefs(pageData)
    };
  }
});
</script>

<style lang="scss" scoped>
  .sider-category {
    height: 100%;
    &__title {
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 16px;
    }
    &__content {
      height: calc(100% - 32px);
      overflow-x: hidden;
      overflow-y: auto;
    }
    &__item {
      font-size: 14px;
      height: 25px;
      &::before {
        color: #ccc;
        content: "▪";
        font-size: 12px;
        margin-right: 6px;
        transition: .2s ease;
      }
      &-text {
        text-decoration: underline;
        cursor: pointer;
      }
      &-num {
        color: #777;
      }
    }
  }
</style>
