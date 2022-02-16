<template>
  <div class="app-topbar">
    <!-- 导航 -->
    <ul class="app-topbar__nav">
      <li
        v-for="(item, index) in nav"
        :key="index"
        :class="{active: curIdx === index}"
        @click="handleNavClick(item, index)"
      >{{ item.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Router, useRouter } from 'vue-router';

export default defineComponent({
  name: 'topbar',
  setup() {
    const nav = [
      {
        name: '首页',
        path: '/home'
      },
      {
        name: '分类',
        path: '/categories'
      },
      {
        name: '标签',
        path: '/tags'
      },
      {
        name: '归档',
        path: '/archive'
      },
      {
        name: '关于',
        path: '/about'
      }
    ];
    const curIdx = ref(0);
    const router: Router = useRouter();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleNavClick = function (item: any, index: number): void {
      curIdx.value = index;
      router.push(item.path);
    }
    return {
      nav,
      curIdx,
      handleNavClick
    }
  }
});
</script>

<style lang="scss" scoped>
.app-topbar {
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #fff;

  &__nav {
    width: 50%;
    max-width: 960px;
    margin: 0 auto;

    & > li {
      display: inline-block;
      white-space: nowrap;
      margin: 0 16px;
      cursor: pointer;
      border-bottom: 1px solid transparent;
      // &.active {
      //   border-bottom: 1px solid #000;
      // }

      &:hover {
        border-bottom: 1px solid #000;
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .app-topbar__nav {
      width: 70%;
      & > li {
        margin: 0 10px;
      }
    }
  }
}
</style>