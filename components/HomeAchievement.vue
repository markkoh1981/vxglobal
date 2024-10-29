<script lang="ts" setup>
const [visible, container] = useVisible();
</script>
<template>
  <div
    ref="container"
    class="relative flex bg-gradient overflow-y-hidden"
  >
    <div
      class="flex-1 flex flex-col space-y-2 px-4 pr-8 py-8 md:space-y-4 md:px-8 md:py-16 2xl:px-0 2xl:max-w-9/10 2xl:m-auto"
    >
      <div>
        <h1 class="lt-md:text-base font-bold lt-md:text-xl 2xl:text-5xl">Achievements</h1>
      </div>
      <div class="border-t border-l border-gradient px-4 py-4 lt-md:max-w-sm lt-xl:min-w-xl">
        <p
          :class="visible ? 'animate-slide-in-up visible' : 'invisible'"
          class="!leading-relaxed xl:textxl"
        >
          VX GLOBAL has made positive impact for its clients and
          <br class="lt-md:hidden" />
          partners Including 3 exits by acquisition.
        </p>
      </div>
    </div>
    <div
      :class="visible ? 'animate-slide-in-right visible' : 'invisible'"
      class="absolute right-0"
    >
      <NuxtImg
        src="/illustrations/il_galaxy.png"
        alt="galaxy"
        width="256"
        height="256"
        class="lt-md:w-32 lt-md:h-32"
      />
    </div>
  </div>
</template>
