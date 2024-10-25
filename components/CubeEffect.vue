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
  clip-path: polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%);
}
</style>
