<script lang="ts" setup>
const [visible, container] = useVisible();
</script>
<template>
  <div class="flex flex-col bg-coins md:h-xl">
    <div
      ref="container"
      :class="visible ? 'animate-slide-in-left visible' : 'invisible'"
      class="flex flex-col space-y-8 md:space-y-16 px-2 md:px-8 lg:px-16 2xl:px-0 2xl:w-9/10 2xl:self-center"
    >
      <div  class="relative flex flex-col">
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
              Founded in 2011, VX GLOBAL began as a distribution
              <br class="lt-md:hidden 2xl:hidden" />
              company in <br class="lt-2xl:hidden" />
              the FMCG (Fast Moving Consumer Goods)
              <br class="lt-md:hidden 2xl:hidden" />
              segment in Singapore.
              <br class="lt-2xl:hidden" />
              The company has since grown with
              <br class="lt-md:hidden 2xl:hidden" />
              its primary business pivoting
              <br class="lt-2xl:hidden" />
              to Fund, services and portfolio
              <br class="lt-md:hidden 2xl:hidden" />
              management, it is also
              <br class="lt-2xl:hidden" />
              involved in the acceleration of startups
              <br class="lt-md:hidden 2xl:hidden" />
              across Southeast Asia.
            </p>
          </div>
        </div>
      </div>
      <TextRotateJunk />
    </div>
  </div>
</template>
