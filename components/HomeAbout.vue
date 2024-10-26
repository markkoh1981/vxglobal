<script lang="ts" setup>
const [visible, container] = useVisible();
</script>
<template>
  <div
    ref="container"
    class="relative flex flex-col lt-md:pb-24 md:relative md:py-24"
  >
    <div
      :class="visible ? 'animate-slide-in-left visible' : 'invisible'"
      class="flex flex-col space-y-4 z-10 px-4 lt-xl:max-w-sm lt-xl:max-w-md md:px-8 md:space-y-4 xl:w-7xl xl:self-center"
    >
      <div
        class="!leading-relaxed text-xs lt-md:max-w-64 md:max-w-sm md:text-sm xl:text-base"
      >
        <p>
          Founded in 2011, we began as a distribution company. The company
          <br />
          has since grown with its primary business pivoting to Fund services
          and portfolio management, it is also involved in the acceleration of
          startups across Southeast Asia.
        </p>
      </div>
      <div class="self-start flex flex-col">
        <ButtonOutline class="px-4 py-2 md:px-8 md:py-4">
          <p class="text-white/70">Read more</p>
        </ButtonOutline>
      </div>
    </div>
  </div>
</template>
