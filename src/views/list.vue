<template>
  <div class="page-list">
    <div class="page-list__tip-board">{{ type === 'category' ? '分类' : '标签' }}</div>
    <div class="page-list__list">
      <div class="article" v-for="item of list" :key="item._id" @click="toDetail(item._id)">
        <h1 class="article-title">{{ item.title }}</h1>
        <div class="article-info">

          <div class="article-date">
            <el-icon style="margin-bottom: 1px"><calendar /></el-icon>
            {{ item.createdAt.slice(0, 10) }}
          </div>

          <div class="article-category">
            <el-icon><paperclip /></el-icon>
            {{ item.category }}
          </div>
          
          <div class="article-tags">
            <el-icon><price-tag /></el-icon>
            <div
              v-for="(tag, index) in item.tags"
              :key="tag.name">
              {{ tag.name }}{{ index + 1 === item.tags.length ? '' : ',' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue';
import { Router, useRouter, useRoute } from 'vue-router';
import { getArticleList } from '@/api/common';
import { IArticle } from '@/types';

export default defineComponent({
  name: 'List',
  setup() {
    interface IPageData {
      list: Array<IArticle>,
      type?: string
    }
    const pageData: IPageData = reactive({
      list: []
    });
    const router: Router = useRouter();
    const route = useRoute();

    watch(() => route, async (newVal) => {
      
      if (newVal.path.includes('category')) {
        const res = await getArticleList({ 'category': newVal.params.id });
        pageData.list = res.data;
        pageData.type = 'category';
      } else if (newVal.path.includes('tag')) {
        const res = await getArticleList({ 'tag': newVal.params.id });
        pageData.list = res.data;
        pageData.type = 'tag';
      }
    }, { deep: true })

    onMounted(async () => {
      const res = await getArticleList();
      pageData.list = res.data;
    });

    const toDetail = (id: string): void => {
      router.push(`/detail/${id}`)
    }

    return {
      ...toRefs(pageData),
      toDetail
    }
  }
});
</script>

<style lang="scss" scoped>
.page-list {
  &__tip-board {
    margin-bottom: 10px;
    font-size: 22px;
    color: #cc2a41;
  }

  &__list {
    .article {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      height: 96px;
      margin: 0;
      box-sizing: border-box;
      border-bottom: 1px solid #f2f2f2;

      &:hover {
        background: #f7f7f7;
      }

      &-title {
        margin: 16px 0 0 0;
        margin-bottom: 20px;
        color: #333;
        font-size: 24px;
        font-weight: normal;
        line-height: 30px;
      }
      &-info {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #999;

        & > div {
          margin-left: 12px;
          &:first-of-type {
            margin-left: 0;
          }
        }
      }
      &-date, &-category, &-tags {
        display: flex;
        align-items: center;

        & > i {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
