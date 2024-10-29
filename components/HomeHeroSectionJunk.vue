<script lang="ts" setup>
const [visible, container] = useVisible();
</script>
<template>
  <div
    ref="container"
    :class="visible ? 'animate-slide-in-left visible' : 'invisible'"
    class="absolute bottom-0 flex flex-col space-y-8 justify-end lt-md:left-0 md:-bottom-8 xl:bottom-24 lt-md:items-center lt-md:px-4 lt-2xl:px-16 md:space-y-16 2xl:w-9/10 2xl:self-center 2xl:-bottom-24"
  >
    <button class="flex items-center md:space-x-2">
      <img
        src="~/assets/icons/ic_scroll.svg"
        width="24"
        height="24"
        alt="scroll"
        class="lt-md:w-6 lt-md:h-6"
      />
      <p>Scroll Down</p>
    </button>
    <TextRotateJunk />
  </div>
</template>
