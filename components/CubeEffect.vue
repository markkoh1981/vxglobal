<script lang="ts" setup>
defineProps({
  is: {
    type: String,
    default: "div",
  },
});
</script>
<template>
  <component
    :is="is"
    class="box"
  >
    <slot />
  </component>
</template>

<style scoped>
.box {
  background: var(--mask)  no-repeat;
  background-size: 100% 100%;
}
</style>
