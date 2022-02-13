<template>
  <div class="page-layout">
    <div class="page-layout__topbar">
      <topbar />
    </div>

    <div class="page-layout__container">
      <div class="page-layout__left">
        <img
          class="avatar"
          :src="userInfo.avatar"
          :alt="userInfo.name"
        />
        <div class="username">{{ userInfo.username }}</div>
      </div>

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
import { defineComponent, onMounted, reactive } from "vue";
import Topbar from './topbar/index.vue';
import { getUserInfo } from '@/api/common';

export default defineComponent({
  name: 'Layout',
  components: {
    Topbar
  },
  setup() {

    const userInfo = reactive({});

    onMounted(async () => {
      const res = await getUserInfo();
      Object.assign(userInfo, res.data);
    });

    return {
      userInfo
    }
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
      width: 300px;
    }

    &__left {
      text-align: center;
      left: -10px;
      transform: translateX(-100%);
      height: 350px;
      background-color: #fff;

      .avatar {
        margin: 40px 0 10px;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        object-fit: cover;
      }

      .username {
        color: #999;
      }
    }

    &__right {
      right: -10px;
      transform: translateX(100%);

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