<template>
  <div v-loading="loading" class="page-home">
    <div v-if="!loading" class="page-home__tip-board">最近</div>
    <div class="page-home__list">
      <div class="article" v-for="item of docs" :key="item._id" @click="toDetail(item._id)">
        <h1 class="article-title">{{ item.title }}</h1>
        <div class="article-info">

          <div class="article-date">
            <el-icon style="margin-bottom: 1px"><calendar /></el-icon>
            <!-- {{ item.createdAt && item.createdAt.slice(0, 10) }} -->
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
import { defineComponent, onBeforeMount, reactive, ref, toRefs } from 'vue';
import { Router, useRouter } from 'vue-router';
import { getArticleList } from '@/api/common';
import { IGetArticleList } from '@/types';

export default defineComponent({
  name: 'Home',
  setup() {
    const pageData: IGetArticleList = reactive({
      docs: [],
      total: 0,
      limit: 15,
      page: 1,
      pages: 1
    });

    let loading = ref(false);
    onBeforeMount(async() => {
      try {
        loading.value = true;
        const res = await getArticleList();
        Object.assign(pageData, res);
        loading.value = false;
      } catch(err) {
        loading.value = false;
      }
    });

    const router: Router = useRouter();
    const toDetail = (id: string): void => {
      router.push(`/detail/${id}`)
    }

    return {
      ...toRefs(pageData),
      loading,
      toDetail
    }
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

  &__list {
    height: calc(100% - 32px);
    overflow-x: hidden;
    overflow-y: auto;
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
