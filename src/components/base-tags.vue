<template>
  <div v-loading="loading" class="tags-wrap">
    <span
      v-for="(item, index) of pageData"
      :key="index"
      :style="{
        color: item.color,
        border: `1px solid ${item.color}`
      }"
      class="tags-item"
      @click="handleTagClick(item._id, item.name)">
      {{ item.name }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue';
import { getTagList } from '@/api/common';
import { Router, useRouter } from 'vue-router';
import { ITagDetail } from '@/types';

export default defineComponent({
  name: 'base-tag',
  setup() {
    const pageData: Array<ITagDetail> = reactive([]);
    let loading = ref(false);

    onMounted(async() => {
      try {
        loading.value = true;
        const res = await getTagList();
        Object.assign(pageData, res);
        loading.value = false;
      } catch(err) {
        console.log(err);
        loading.value = false;
      }
    });

    const router: Router = useRouter();

    const handleTagClick = (tagId: string, name: string) => {
      router.push({ name: 'TagList', query: { tagId, name } });
    }

    return {
      pageData,
      loading,
      handleTagClick
    };
  }
});
</script>

<style lang="scss" scoped>
  .tags-wrap {
    display: flex;
    flex-wrap: wrap;
    height: calc(100% - 32px);
    overflow-x: hidden;
    overflow-y: auto;
    .tags-item {
      position: relative;
      cursor: pointer;
      margin-right: 6px;
      margin-bottom: 6px;
      padding: 0 4px;
      font-size: 12px;
      height: 18px;
      line-height: 18px;
      border-radius: 2px;
    }
  }
</style>
