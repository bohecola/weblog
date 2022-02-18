<template>
  <div v-loading="loading" class="sider-category">
    <ul class="sider-category__content">
      <li
        v-for="(item, index) of categories"
        :key="index"
        @click="handleCategoryClick(item._id, item.name)"
        class="sider-category__item">
        <span class="sider-category__item-text">{{ item.name }}</span>
        <span class="sider-category__item-num">{{ `(${item.articles && item.articles.length })` }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
import { Router, useRouter } from 'vue-router';
import { getCategoryList } from '@/api/common';

export default defineComponent({
  name: 'page-category',
  setup() {
    const pageData = reactive({
      categories: []
    });
    let loading = ref(false);
    onMounted(async () => {
      try {
        loading.value = true;
        const res = await getCategoryList();
        pageData.categories = res.data
        loading.value = false;
      } catch(err) {
        console.log(err);
        loading.value = false;
      }
    });
    const router: Router = useRouter();
    const handleCategoryClick = (categoryId: string, name: string) => {
      router.push({ name: 'CategoryList', query: { categoryId, name } });
    }


    return {
      ...toRefs(pageData),
      loading,
      handleCategoryClick
    };
  }
});
</script>

<style lang="scss" scoped>
  .sider-category {
    &__content {
      overflow-x: hidden;
      overflow-y: auto;
    }
    &__item {
      height: 32px;
      &::before {
        color: #ccc;
        content: "▪";
        font-size: 12px;
        margin-right: 6px;
        transition: .2s ease;
      }
      &-text {
        font-size: 18px;
        text-decoration: underline;
        cursor: pointer;
      }
      &-num {
        font-size: 18px;
        color: #777;
      }
    }
  }
</style>
