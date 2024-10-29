<script lang="ts" setup>
const [visible, container] = useVisible();
</script>
<template>
  <div
    ref="container"
    :class="{ 'animate-slide-in-left': visible }"
    class="flex flex-col space-y-8 px-4 md:px-8 lg:px-16 2xl:px-0 2xl:w-9/10 2xl:self-center"
  >
    <div>
      <h1 class="font-[Clash+Display] text-base font-bold 2xl:text-5xl">About Us</h1>
    </div>
    <div class="flex">
      <p class="text-white/75 leading-relaxed md:leading-loose">
        Founded in 2011, VX GLOBAL began as a distribution company in the FMCG <br class="lt-md:hidden" />
        (Fast Moving Consumer Goods) segment in Singapore. <br class="lt-md:hidden" />
        The company has since grown with its primary business pivoting to Fund <br class="lt-md:hidden" />
        services and portfolio management, it is also involved in the <br class="lt-md:hidden" />
        acceleration of startups across Southeast Asia.
      </p>
    </div>
  </div>
</template>
