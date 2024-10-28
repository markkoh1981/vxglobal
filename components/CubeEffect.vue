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
  clip-path: polygon(
    20% 0%,
    88% 0,
    100% 22%,
    100% 100%,
    80% 100%,
    10% 100%,
    0 73%,
    0 0
  );
  -webkit-clip-path: polygon(
    20% 0%,
    88% 0,
    100% 22%,
    100% 100%,
    80% 100%,
    10% 100%,
    0 73%,
    0 0
  );
}

@screen md {
  .box {
    clip-path: var(--mask);
    -webkit-clip-path: var(--mask);
  }
}
</style>
