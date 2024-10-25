<script lang="ts" setup>
const props = defineProps({
  width: {
    type: Number,
    default: 128,
  },
  height: {
    type: Number,
    default: 32,
  },
  borderColor: {
    type: String,
    default: "#A3A3A3",
  },
  borderWidth: {
    type: Number,
    default: 1,
  },
});
</script>
<template>
  <button class="box flex items-center justify-center">
    <slot />
  </button>
</template>
<style scoped>
.box {
  background: url(~/assets/icons/ic_button_outline.svg) no-repeat;
  background-size: 100% 100%;
}
</style>
