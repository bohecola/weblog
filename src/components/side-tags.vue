<template>
  <div class="mt-10">标签</div>
  <base-tags></base-tags>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseTags from '@/components/base-tags.vue';

export default defineComponent({
  name: 'side-tags',
  components: {
    BaseTags
  }
});
</script>
