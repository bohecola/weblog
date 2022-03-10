<template>
  <div class="article-item" @click="toDetail(item._id)">
    <h1 class="article-item__title">{{ item.title }}</h1>
    <div class="article-item__info">
      <div class="article-item__date">
        <el-icon style="margin-bottom: 1px"><calendar /></el-icon>
        {{ item.createdAt && item.createdAt.slice(0, 10) }}
      </div>

      <div class="article-item__category">
        <el-icon><folder /></el-icon>
        {{ item.category }}
      </div>
      
      <div class="article-item__tags">
        <el-icon><price-tag /></el-icon>
        <div
          v-for="(tag, index) in item.tags"
          :key="tag.name">
          {{ tag.name }}{{ index + 1 === item.tags.length ? '' : ',' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Router, useRouter } from 'vue-router';
import { IArticle } from '@/types';

export default defineComponent({
  name: 'article-item',
  props: {
    item: {
      type: Object as PropType<IArticle>,
      default: () => ({})
    }
  },
  setup() {
    const router: Router = useRouter();
    const toDetail = (id: string) => router.push(`/detail/${id}`);

    return {
      toDetail
    };
  }
})
</script>

<style lang="scss" scoped>
  .article-item {
    cursor: pointer;
    padding: 12px 0;
    margin: 0;
    box-sizing: border-box;
    border-bottom: 1px solid #f2f2f2;

    &:hover {
      background: #f7f7f7;
    }

    &__title {
      color: #333;
      font-size: 18px;
      font-weight: normal;
      line-height: 30px;
      margin-bottom: 10px;
    }
    &__info {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #999;

      & > div {
        margin-right: 12px;
      }
    }
    &__date, &__category, &__tags {
      display: flex;
      align-items: center;

      & > i {
        margin-right: 5px;
      }
    }
  }
</style>
