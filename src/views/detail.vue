<template>
  <div class="page-detail">
    <div class="page-detail__head">
      <h2 class="page-detail__title">{{ article.title }}</h2>
      <div class="page-detail__info">
        <div class="article-category">
          <el-icon><paperclip /></el-icon>
          <span class="article-category-text">{{ article.category }}</span>
        </div>
        <div class="article-tags">
          <el-icon><price-tag /></el-icon>
          <template v-for="(tag, index) in article.tags" :key="tag.name">
            <span class="article-tags-text">
              {{ tag.name }}
            </span>
            <span v-if="index + 1 !== article.tags.length">,</span>
          </template>
        </div>
      </div>
    </div>
    <v-md-preview :text="article.content"></v-md-preview>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { RouteLocationNormalizedLoaded, Router, useRoute, useRouter } from "vue-router";
import { getArticleOne } from '@/api/common';
import { IArticle } from '@/types';

export default defineComponent({
  name: 'detail',
  setup() {
    const article = reactive({});
    const route = useRoute();
    const router = useRouter();
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
      margin-bottom: 16px;
      padding-bottom: 5px;
      border-bottom: 1px solid #f2f2f2;
    }
    &__title {
      font-weight: 600;
      font-size: 26px;
      margin: 0;
      padding-bottom: 5px;
    }

    &__info {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #999;
      .article-category, .article-tags {
        display: flex;
        align-items: center;
        margin-right: 10px;
        &-text {
          cursor: pointer;
        }
        & > i {
          margin-right: 5px;
        }
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