<template>
  <div v-loading="loading" class="page-detail">
    <div v-if="!loading" class="page-detail__head">
      <h2 class="page-detail__title">{{ article.title }}</h2>
      <div class="page-detail__info">
        <el-icon v-if="article.category"><paperclip /></el-icon>
        <span
          @click="$router.push({name: 'CategoryList', query: {categoryId: article.category._id, name: article.category.name}})"
          class="article-category">
          {{ article.category.name }}
        </span>

        <el-icon v-if="article.tags"><price-tag /></el-icon>
        <template v-for="(tag, index) in article.tags" :key="tag.name">
          <span class="article-tags" @click="$router.push({name: 'TagList', query: {tagId: tag._id, name: tag.name}})">
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
import { defineComponent, onBeforeMount, reactive, ref } from 'vue';
import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";
import { getArticleOne } from '@/api/common';
import { IGetAritcleDetail } from '@/types';

export default defineComponent({
  name: 'detail',
  setup() {
    const article: IGetAritcleDetail = reactive({
      _id: '',
      title: '',
      content: '',
      author: '',
      category: {_id: '', name: ''},
      tags: [{_id: '', name: '', color: ''}],
      createdAt: '',
      updatedAt: ''
    });

    let loading = ref(false);

    const route: RouteLocationNormalizedLoaded = useRoute();

    onBeforeMount(async() => {
      try {
        loading.value = true;
        const res = await getArticleOne(route.params.id as string);
        Object.assign(article, res);
        loading.value = false;
      } catch (err) {
        loading.value = false;
      }
    })
    return {
      article,
      loading
    };
  }
});
</script>

<style lang="scss" scoped>
  .page-detail {
    &__head {
      height: 60px;
      margin-bottom: 16px;
      box-sizing: border-box;
      border-bottom: 1px solid #f2f2f2;
    }
    &__title {
      margin: 0;
      font-size: 22px;
      line-height: 22px;
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
    :deep(.vuepress-markdown-body:not(.custom)) {
      padding: 0;
      img {
        max-width: calc(100% - 16px);
      }
    }
  }
</style>