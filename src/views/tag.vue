<template>
  <div class="sider-tags">
    <div class="sider-tags__content">
      <span
        v-for="(item, index) of tags"
        :key="index"
        :style="{
          color: item.color,
          border: `1px solid ${item.color}`,
          '--tagColor': item.color
        }"
        class="sider-tags__item"
        @click="handleTagClick(item._id, item.name)">
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { getTagList } from '@/api/common';
import { Router, useRouter } from 'vue-router';

export default defineComponent({
  name: 'page-tag',
  setup() {
    const pageData = reactive({
      tags: []
    });
    onMounted(async () => {
      const res = await getTagList();
      pageData.tags = res.data;
    });
    const router: Router = useRouter();
    const handleTagClick = (tagId: string, name: string) => {
      router.push({ name: 'TagList', query: { tagId, name } });
    }

    return {
      ...toRefs(pageData),
      handleTagClick
    };
  }
});
</script>

<style lang="scss" scoped>
  .sider-tags {
    height: 100%;
    &__content {
      display: flex;
      flex-wrap: wrap;
      overflow-x: hidden;
      overflow-y: auto;
    }
    &__item {
      position: relative;
      cursor: pointer;
      margin-right: 6px;
      margin-bottom: 6px;
      padding: 0 9px;
      font-size: 12px;
      height: 28px;
      line-height: 28px;
      border-radius: 2px;
      &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 2px;
        border: 1px solid transparent;
        box-sizing: border-box;
        background-color: var(--tagColor);
        opacity: 0.1;
      }
    }
  }
</style>
