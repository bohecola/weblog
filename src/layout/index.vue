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
        <user-info />
      </div>

      <div class="page-layout__view" v-if="true">
        <router-view></router-view>
      </div>

      <div class="page-layout__right">
        <div class="page-layout__right-category">
          <category />
        </div>
        <div class="page-layout__right-tag">
          <tag />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Topbar from './topbar/index.vue';
import UserInfo from '@/components/sider/info.vue';
import Category from '@/components/sider/category.vue';
import Tag from '@/components/sider/tag.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    Topbar,
    UserInfo,
    Category,
    Tag
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
      max-width: 960px;
      margin: 0 auto;
      margin-bottom: 10px;
      box-sizing: border-box;
      background-color: #fff;
    }

    &__view {
      height: 100%;
      width: 100%;
      padding: 20px;
      overflow: hidden;
      box-sizing: border-box;

      & > div {
        height: 100%;
      }
    }
    &__left, &__right {
      position: absolute;
      top: 0;
      width: 300px;
    }

    &__left {
      text-align: center;
      left: -10px;
      transform: translateX(-100%);
      height: 350px;
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
        height: 300px;
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
        width: 100%
      }
      .page-layout__left, .page-layout__right {
        display: none;
      }
    }
  }
</style>