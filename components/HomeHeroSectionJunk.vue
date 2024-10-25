<script lang="ts" setup>
const [visible, container] = useVisible();
</script>
<template>
  <div
    ref="container"
    :class="{ 'animate-slide-in-left': visible }"
    class="absolute flex flex-col space-y-8 justify-end lt-xl:left-4 lt-xl:bottom-8 md:-bottom-24 lt-md:items-center md:px-8 xl:bottom-auto xl:top-10/22 xl:w-7xl xl:self-center"
  >
    <button class="flex items-center animate-slide-in-left">
      <img
        src="~/assets/icons/ic_scroll.svg"
        width="32"
        height="32"
        class="w-6 h-6 md:w-8 md:h-8"
      />
      <p>Scroll down</p>
    </button>
    <img
      src="/assets/illustrations/il_build_together.svg"
      width="128"
      height="128"
      :class="{ 'animate-spin animate-duration-[60s]': visible }"
      class="lt-md:h-24 lt-md:w-24"
    />
  </div>
</template>
