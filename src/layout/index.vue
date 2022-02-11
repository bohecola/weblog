<template>
  <div class="page-layout">
    <div class="page-layout__topbar">
      <topbar />
    </div>

    <div class="page-layout__container">
      <div class="page-layout__left"></div>

      <div class="page-layout__view" v-if="true">
        <router-view></router-view>
      </div>

      <div class="page-layout__right">
        <div class="page-layout__right-category"></div>
        <div class="page-layout__right-tag"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Topbar from './topbar/index.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    Topbar
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

    &__container {
      position: relative;
      height: calc(100% - 70px);
      max-width: 960px;
      margin: 0 auto;
      margin-bottom: 10px;
      box-sizing: border-box;
      background-color: #fff;
    }

    &__view {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      overflow: hidden;

      & > div {
        height: 100%;
      }
    }
    &__left, &__right {
      position: absolute;
      top: 0;
      width: 350px;
    }

    &__left {
      left: -360px;
      height: 350px;
      background-color: #fff;
    }

    &__right {
      right: -360px;

      &-category {
        width: 100%;
        height: 400px;
        margin-bottom: 10px;
        background-color: #fff;
      }

      &-tag {
        width: 100%;
        height: 300px;
        background-color: #fff;
      }
    }

    @media only screen and (max-width: 768px) {
      .page-layout__container {
        width: 100%
      }
      .page-layout__left, .page-layout__right {
        display: none;
      }
    }

    @media only screen and (min-width: 768px) {
     .page-layout__container {
        width: 70%;
      }
    }
  }
</style>