<script lang="ts" setup>
type Props = {
  class: string;
};

defineProps<Props>();
</script>
<template>
  <button class="relative flex flex-col">
    <div class="absolute inset-0">
      <img
        src="~/assets/icons/ic_button_fill.svg"
        class="w-full h-full"
      />
    </div>
    <div
      :class="class"
      class="text-nowrap flex items-center justify-center z-10"
    >
      <slot />
    </div>
  </button>
</template>
<style scoped>
.box {
  background: url(~/assets/icons/ic_button_fill.svg) no-repeat;
  background-size: 100% 100%;
}
</style>
