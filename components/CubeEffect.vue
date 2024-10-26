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
  clip-path: polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 10% 100%, 0% 90%);
}

@screen md {
  .box {
    clip-path: var(--mask);
  }
}
</style>
