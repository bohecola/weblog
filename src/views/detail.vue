<template>
  <div class="page-detail">
    <div class="page-detail__head">
      <h2 class="page-detail__title">{{ article.title }}</h2>
      <div class="page-detail__info">
        <el-icon><paperclip /></el-icon>
        <span
          @click="$router.push({ name: 'CategoryList', query: { categoryId: article.category._id, name: article.category.name } })"
          class="article-category">
          {{ article.category?.name }}
        </span>

        <el-icon><price-tag /></el-icon>
        <template v-for="(tag, index) in article.tags" :key="tag.name">
          <span class="article-tags" @click="$router.push({ name: 'TagList', query: { tagId: tag._id, name: tag.name } })">
            {{ tag.name }}
          </span>
          <span v-if="index + 1 !== article.tags.length">,</span>
        </template>
      </div>
    </div>
    <div class="page-detail__content">
      <v-md-preview :text="article.content"></v-md-preview>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";
import { getArticleOne } from '@/api/common';
// import { IArticle } from '@/types';

export default defineComponent({
  name: 'detail',
  setup() {
    const article = reactive({});
    const route: RouteLocationNormalizedLoaded = useRoute();
    onMounted(async () => {
      const res = await getArticleOne(route.params.id as string);
      Object.assign(article, res.data);
    })
    return {
      article
    }
  }
});
</script>

<style lang="scss" scoped>
  .page-detail {
    &__head {
      height: 64px;
      margin-bottom: 16px;
      box-sizing: border-box;
      border-bottom: 1px solid #f2f2f2;
    }
    &__title {
      margin: 0;
      font-size: 26px;
      line-height: 26px;
      color: #333;
      font-weight: normal;
    }

    &__info {
      display: flex;
      align-items: center;
      font-weight: lighter;
      margin-top: 14px;
      font-size: 14px;
      line-height: 14px;
      color: #999;

      & > i {
        margin-right: 5px;
      }

      .article-category, .article-tags {
        cursor: pointer;
        &:hover { color: #666; }
      }
      .article-category {
        margin-right: 10px;
      }
    }

    &__content {
      height: calc(100% - 80px);
      word-break: break-all;
      overflow-y: auto;
      overflow-x: hidden;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    ::v-deep .vuepress-markdown-body:not(.custom) {
      padding: 0;
      img {
        // display: block;
        // margin-top: 16px;
        // margin-bottom: 16px;
        // margin-left: auto;
        // margin-right: auto;
        // box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
        max-width: calc(100% - 16px);
      }
    }
  }
</style>