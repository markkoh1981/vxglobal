<script lang="ts" setup>
const [visible, container] = useVisible();
</script>
<template>
  <div
    ref="container"
    class="relative flex flex-col lt-md:pb-8 md:relative md:h-md md:pt-16 lg:-translate-y-16 2xl:h-4xl 2xl:max-w-6/10 2xl:justify-end 2xl:pb-24"
  >
    <div
      :class="visible ? 'animate-slide-in-left visible' : 'invisible'"
      class="flex flex-col space-y-4 z-10 px-4 md:px-8 lg:px-16 md:space-y-4 2xl:px-0 2xl:w-9/10 2xl:self-center"
    >
      <div
        class="leading-relaxed  lt-md:max-w-xs md:max-w-auto md:leading-loose"
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
        <ButtonOutlineFill class="bg-primary/50 md:px-8 md:py-4">
          <p class="text-white/70 p-4">Read more</p>
        </ButtonOutlineFill>
      </div>
    </div>
  </div>
</template>
