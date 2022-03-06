<template>
  <div class="side-info">
    <div class="side-info__user">
      <img
        class="side-info__avatar"
        :src="userInfo.avatar"
        :alt="userInfo.name"
      />
      <div class="side-info__name">{{ userInfo.name }}</div>
      <div class="side-info__desc">
        {{ userInfo.desc }}
      </div>
    </div>
    <div class="side-info__footer">
      <div class="side-info__social">
        <font-awesome-icon :icon="['fab', 'github']" @click="hrefTo('https://github.com/bohecola')" />
      </div>
      <p>© {{userInfo.name}}'s Blog 2020 - {{ new Date().getFullYear() }}</p>
      <p>Designed and developed by {{ userInfo.name }}.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive } from 'vue';
import { getUserInfo } from '@/api/common';
import { IUserInfo } from '@/types';

export default defineComponent({
  name: 'info',
  setup() {
    const userInfo: IUserInfo = reactive({
      name: '',
      avatar: '',
      desc: ''
    });

    onBeforeMount(async() => {
      const res = await getUserInfo();
      Object.assign(userInfo, res);
    });

    const hrefTo = (href: string): void => {
      window.open(href);
    };

    return {
      userInfo,
      hrefTo
    };
  }
});
</script>

<style lang="scss" scoped>
  .side-info {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    text-align: center;
    box-sizing: border-box;

    &__avatar {
      margin-top: 20px;
      margin-bottom: 10px;
      height: 80px;
      width: 80px;
      border-radius: 50%;
      object-fit: cover;
    }

    &__name {
      color: #999;
      margin-bottom: 16px;
    }

    &__desc {
      padding: 0 20px;
      font-size: 14px;
      color: #999;
    }

    &__social {
      margin-bottom: 12px;
      & > svg {
        font-size: 20px;
        color: #999;
        cursor: pointer;
        &:hover { color: #666; }
      }
    }

    &__footer {
      margin-top: auto;
      font-size: 12px;
      color: #bbb;
      p { margin-top: 5px; }
    }
  }
</style>