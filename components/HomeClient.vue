<script setup lang="ts">
// @ts-ignore
import { VueMarqueeSlider } from "vue3-marquee-slider";
import "../node_modules/vue3-marquee-slider/dist/style.css";

import { homeClients } from "~/configs/cards";
import { breakpointsTailwind } from "@vueuse/core";

const [visible, container] = useVisible();

const breakpoints = useBreakpoints(breakpointsTailwind);
const isSmallScreen = ref(breakpoints.isSmallerOrEqual("lg"));

const itemSize = computed(() => (isSmallScreen.value ? 400 : 560));

const resizeFn = () => {
  isSmallScreen.value = breakpoints.isSmallerOrEqual("lg");
};

onMounted(() => {
  window.addEventListener("resize", resizeFn);
});

onUnmounted(() => window.removeEventListener("resize", resizeFn));
</script>

<template>
  <div
    ref="container"
    id="services"
    class="relative flex flex-col space-y-8"
    :class="visible ? 'animate-slide-in-up visible' : 'invisible'"
  >
    <div
      class="lt-md:text-base font-bold px-2 md:px-8 2xl:px-0 2xl:w-9/10 2xl:self-center"
    >
      <h1>Advisory Clients</h1>
    </div>
    <VueMarqueeSlider
      id="marquee-slider"
      :key="itemSize"
      :space="32"
      :width="itemSize"
      style="--mask: url('/illustrations/il_box_parallelogram.png')"
      :speed="30000"
    >
      <CubeCard
        v-for="client in homeClients"
        v-bind="client"
        class="text-black max-w-xl lt-md:max-w-xs lg:min-h-sm"
        link-class="ml-auto"
      />
    </VueMarqueeSlider>
  </div>
</template>
