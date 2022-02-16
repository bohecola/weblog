<template>
  <div class="sider-tags">
    <div class="sider-tags__title">标签</div>
    <div class="sider-tags__content">
      <span
        v-for="(item, index) of tags"
        :key="index"
        :style="{
          color: item.color,
          border: `1px solid ${item.color}`,
          '--tagColor': item.color
        }"
        class="sider-tags__item">
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { getTagList } from '@/api/common';

export default defineComponent({
  name: 'tag',
  setup() {
    const pageData = reactive({
      tags: []
    });
    onMounted(async () => {
      const res = await getTagList();
      pageData.tags = res.data;
    })

    return {
      ...toRefs(pageData)
    };
  }
});
</script>

<style lang="scss" scoped>
  .sider-tags {
    height: 100%;
    &__title {
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 16px;
    }
    &__content {
      display: flex;
      flex-wrap: wrap;
      height: calc(100% - 32px);
      overflow-x: hidden;
      overflow-y: auto;
    }
    &__item {
      position: relative;
      cursor: pointer;
      margin-right: 6px;
      margin-bottom: 6px;
      padding: 0 4px;
      font-size: 12px;
      height: 18px;
      line-height: 18px;
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
