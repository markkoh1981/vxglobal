<script lang="ts" setup>
defineProps({
  is: {
    type: String,
    default: "div",
  },
  borderClass: {
    type: String,
    default: "bg-primary",
  },
  borderWidth: {
    type: Number,
    default: 1,
  },
  class: {
    type: String,
  },
});
</script>
<template>
  <div class="w-full h-full relative flex flex-col lt-md:p-0.25">
    <component
      :is="is"
      class="box z-10 rounded-md"
      :class="class"
    >
      <slot />
    </component>
    <div
      class="absolute inset-0 box rounded-md md:hidden"
      :class="borderClass"
    />
  </div>
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
}

@screen md {
  .box {
    clip-path: var(--mask);
  }
}
</style>
