<template>
  <div class="page-layout">
    <div class="page-layout__topbar">
      <topbar />
    </div>

    <div class="page-layout__icp">
      <a href="https://beian.miit.gov.cn" target="_blank">陕ICP备2022001579号-1</a>
      <!-- <a href="http://www.beian.gov.cn" target="_blank">陕公网安备 号</a> -->
    </div>

    <div class="page-layout__container">
      <div class="page-layout__left">
        <side-info />
      </div>

      <div class="page-layout__view" v-if="true">
        <router-view></router-view>
      </div>

      <div class="page-layout__right">
        <div class="page-layout__right-category">
          <side-category />
        </div>
        <div class="page-layout__right-tag">
          <side-tags />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Topbar from './topbar.vue';
import SideInfo from '@/components/side-info.vue';
import SideCategory from '@/components/side-category.vue';
import SideTags from '@/components/side-tags.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    Topbar,
    SideInfo,
    SideCategory,
    SideTags
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .page-layout {
    background-color: #f7f7f7;
    height: 100%;
    width: 100%;
    overflow: hidden;

    &__topbar {
      margin-bottom: 10px;
    }

    &__icp {
      position: fixed;
      padding: 10px;
      bottom: 0;
      right: 0;
      box-sizing: border-box;

      & > a {
        display: block;
        margin-top: 5px;
        font-size: 12px;
        color: #999;
        text-decoration: none;
      }
    }

    &__container {
      position: relative;
      height: calc(100% - 70px);
      width: 50%;
      margin: 0 auto;
      margin-bottom: 10px;
      box-sizing: border-box;
      background-color: #fff;
    }

    &__view {
      width: 100%;
      height: 100%;
      padding: 20px;
      box-sizing: border-box;

      & > div {
        width: 100%;
        height: 100%;
        padding-right: 10px;
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
    &__left, &__right {
      position: absolute;
      top: 0;
      width: 280px;
    }

    &__left {
      text-align: center;
      left: -10px;
      transform: translateX(-100%);
      height: 320px;
      background-color: #fff;
    }

    &__right {
      right: -10px;
      transform: translateX(100%);
      &-category, &-tag {
        padding: 20px;
        box-sizing: border-box;
      }
      &-category {
        width: 100%;
        height: 260px;
        margin-bottom: 10px;
        background-color: #fff;
      }

      &-tag {
        width: 100%;
        height: 200px;
        background-color: #fff;
      }
    }

    @media only screen and (max-width: 992px) {
      .page-layout__container {
        width: 100%;
      }
      .page-layout__left, .page-layout__right {
        display: none;
      }
    }
  }
</style>