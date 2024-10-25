<script lang="ts" setup>
const [visible, container] = useVisible();
</script>
<template>
  <div
    ref="container"
    :class="{ 'animate-slide-in-left': visible }"
    class="absolute bottom-0 flex flex-col space-y-4 justify-end lt-xl:left-4 md:space-y-8 md:-bottom-8 lt-md:items-center md:px-8 xl  xl:w-7xl xl:self-center"
  >
    <button class="flex items-center animate-slide-in-left md:space-x-2">
      <img
        src="~/assets/icons/ic_scroll.svg"
        width="24"
        height="24"
        alt="scroll"
        class="lt-md:w-6 lt-md:h-6"
      />
      <p class="text-xs md:text-base">Scroll Down</p>
    </button>
    <TextRotateJunk />
  </div>
</template>
