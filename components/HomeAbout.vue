<script lang="ts" setup>
const [visible, container] = useVisible();
</script>
<template>
  <div
    ref="container"
    class="relative flex flex-col lt-md:pb-8 md:relative md:py-24"
  >
    <div
      :class="visible ? 'animate-slide-in-left visible' : 'invisible'"
      class="flex flex-col space-y-4 z-10 px-4 md:px-8 md:space-y-4 xl:w-7xl xl:self-center"
    >
      <div
        class="!leading-relaxed text-xs lt-md:max-w-56 md:max-w-auto md:text-sm xl:text-base"
      >
        <p>
          Founded in 2011, VX GLOBAL began as a distribution company in
          <br class="lt-md:hidden" />
          the FMCG (Fast Moving Consumer Goods) segment in Singapore.<br
            class="lt-md:hidden"
          />
          The company has since grown with its primary business pivoting
          <br class="lt-md:hidden" />
          to Fund services and portfolio management, <br class="md:hidden" /> it is also involved in
          <br class="lt-md:hidden" />
          the acceleration of startups across Southeast Asia.
        </p>
      </div>
      <div class="self-start flex flex-col">
        <ButtonOutlineFill class="px-4 py-2 bg-primary/50 md:px-8 md:py-4">
          <p class="text-white/70">Read more</p>
        </ButtonOutlineFill>
      </div>
    </div>
  </div>
</template>
