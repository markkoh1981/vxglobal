<script lang="ts" setup>
type Props = {
  width?: number;
  height?: number;
  class?: string;
  textClass?: string;
};

const props = defineProps<Props>();
</script>
<template>
  <NuxtLink
    href="/"
    class="flex items-center space-x-2"
  >
    <img
      v-bind="props"
      src="~/assets/icons/ic_vxglobal.svg"
      class="z-5"
    />
    <h1
      :class="props.textClass"
      class="flex-1 text-2xl font-semibold font-outfit"
    >
      Vx Global
    </h1>
  </NuxtLink>
</template>
