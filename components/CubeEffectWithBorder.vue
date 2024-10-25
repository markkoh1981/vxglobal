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
  <div
    class="h-full relative flex flex-col p-0.4"
  >
    <component
      :is="is"
      class="box h-full z-10 rounded-md"
      :class="class"
    >
      <slot />
    </component>
    <div
      class="absolute inset-0 box rounded-md"
      :class="borderClass"
    />
  </div>
</template>

<style scoped>
.box {
  clip-path: polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%);
}
</style>
