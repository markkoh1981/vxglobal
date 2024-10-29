<script lang="ts" setup>
const [visible, container] = useVisible();
</script>
<template>
  <div class="flex flex-col bg-coins md:h-xl">
    <div
      ref="container"
      :class="{ 'animate-slide-in-left': visible }"
      class="flex flex-col space-y-8 md:space-y-16 px-2 md:px-8 lg:px-16 2xl:px-0 2xl:w-9/10 2xl:self-center"
    >
      <div class="flex flex-col space-y-4">
        <div>
          <h1
            class="font-[Clash+Display] text-base font-bold md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl"
          >
            About Us
          </h1>
        </div>
        <div class="flex">
          <p class="leading-relaxed md:leading-loose">
            Founded in 2011, VX GLOBAL began as a distribution
            <br class="lt-md:hidden" />
            company in the FMCG
            <br class="lt-md:hidden" />
            (Fast Moving Consumer Goods) segment in Singapore.
            <br class="lt-md:hidden" />
            The company has since grown with its primary business
            <br class="lt-md:hidden" />
            pivoting to Fund, services and portfolio
            <br class="lt-md:hidden" />
            management, it is also involved in the
            <br class="lt-md:hidden" />
            acceleration of startups across Southeast Asia.
          </p>
        </div>
      </div>
      <TextRotateJunk />
    </div>
  </div>
</template>
