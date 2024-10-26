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
  <div class="w-full h-full relative flex flex-col md:p-0.5">
    <component
      :is="is"
      class="box w-full h-full z-10 rounded-md"
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
  clip-path: polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 10% 100%, 0% 90%);
}

@screen md {
  .box {
    clip-path: var(--mask);
  }
}
</style>
