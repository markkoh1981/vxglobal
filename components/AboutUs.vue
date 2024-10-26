<script lang="ts" setup>
const [visible, container] = useVisible();
</script>
<template>
  <div
    ref="container"
    :class="{ 'animate-slide-in-left': visible }"
    class="flex flex-col space-y-2 px-4 md:px-8 xl:w-7xl xl:self-center"
  >
    <div>
      <h1 class="font-[Clash+Display] text-base font-bold">About Us</h1>
    </div>
    <div class="flex">
      <p class="text-white/75 text-xs !leading-relaxed md:text-sm md:max-w-xl">
        Founded in 2011, VX GLOBAL began as a distribution company in the FMCG
        (Fast Moving Consumer Goods) segment in Singapore. <br />
        The company has since grown with its primary business pivoting to Fund
        services and portfolio management, it is also involved in the
        acceleration of startups across Southeast Asia.
      </p>
    </div>
  </div>
</template>
