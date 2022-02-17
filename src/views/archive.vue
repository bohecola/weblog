<template>
  <div class="page-archive">
    <div 
      class="year-wrap"
      v-for="(yearItem, yearIndex) in list"
      :key="yearIndex">
      <div class="page-archive__year">#{{ yearItem.year }}</div>
      <div
        class="month-wrap"
        v-for="(monthItem, monthIndex) in yearItem.yearList"
        :key="monthIndex">
        <div class="page-archive__month">{{ monthItem.month }}月</div>
        <div class="article" v-for="articleItem of monthItem.monthList" :key="articleItem._id" @click="toDetail(articleItem._id)">
          <h1 class="article-title">{{ articleItem.title }}</h1>
          <div class="article-info">

            <div class="article-date">
              <el-icon style="margin-bottom: 1px"><calendar /></el-icon>
              {{ articleItem.createdAt.slice(0, 10) }}
            </div>

            <div class="article-category">
              <el-icon><paperclip /></el-icon>
              {{ articleItem.category }}
            </div>
            
            <div class="article-tags">
              <el-icon><price-tag /></el-icon>
              <div
                v-for="(tag, index) in articleItem.tags"
                :key="tag.name">
                {{ tag.name }}{{ index + 1 === articleItem.tags.length ? '' : ',' }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getArchiveList } from '@/api/common';
import { IArchiveYearItem } from '@/types';
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { Router, useRouter } from 'vue-router';

export default defineComponent({
  name: 'archive',
  setup() {
    interface IPageData {
      list: Array<IArchiveYearItem>
    }
    const pageData:IPageData = reactive({
      list: []
    });
  
    onMounted(async () => {
      const res = await getArchiveList();
      pageData.list = res.data;
    });
    const router: Router = useRouter();
    const toDetail = (id: string) => {
      router.push(`/detail/${id}`);
    }

    return {
      ...toRefs(pageData),
      toDetail
    }
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
</style>