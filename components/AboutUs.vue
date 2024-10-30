<script lang="ts" setup>
const [visible, container] = useVisible();
</script>
<template>
  <div class="relative flex flex-col md:h-xl">
    <div
      ref="container"
      :class="visible ? 'animate-slide-in-left visible' : 'invisible'"
      class="flex flex-col space-y-8 md:space-y-16 px-2 md:px-8 lg:px-16 2xl:px-0 2xl:w-9/10 2xl:self-center"
    >
      <div class="relative flex flex-col">
        <div class="absolute inset-0 bg-black/80 blur-3xl" />
        <div class="flex flex-col space-y-4 z-10">
          <div>
            <h1
              class="font-[Clash+Display] text-base font-bold md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl"
            >
              About Us
            </h1>
          </div>
          <div class="flex">
            <p class="leading-relaxed md:leading-loose">
              Founded in 2011, VX GLOBAL began as a distribution company
              <br class="md:hidden" />
              in the FMCG <br class="lt-md:hidden" />
              (Fast Moving Consumer Goods) segment in Singapore.
              <br class="lt-sm:hidden" />
              The company has since grown with its primary business pivoting
              <br class="lt-sm:hidden 2xl:hidden" />
              to Fund,
              <br class="lt-2xl:hidden" />
              services and portfolio management, it is also involved in
              <br class="lt-sm:hidden 2xl:hidden" />
              the acceleration
              <br class="lt-2xl:hidden" />
              of startups across Southeast Asia.
            </p>
          </div>
        </div>
      </div>
      <TextRotateJunk class="" />
    </div>
    <div
      class="absolute -right-8 lt-md:-bottom-1/2 md:-right-12% inset-y-0 3xl:-right-16% 3xl:-bottom-16 3xl:top-24 w-7/10"
    >
      <NuxtImg
        src="/illustrations/il_coins.png"
        class="-rotate-5 object-contain w-full h-full"
      />
    </div>
  </div>
</template>
