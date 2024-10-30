<script setup lang="ts">
// @ts-ignore
import { VueMarqueeSlider } from "vue3-marquee-slider";
import "../node_modules/vue3-marquee-slider/dist/style.css";

import { homeClients } from "~/configs/cards";
import { breakpointsTailwind } from "@vueuse/core";

const [visible, container] = useVisible();

const breakpoints = useBreakpoints(breakpointsTailwind);
const isSmallScreen = computed(() => breakpoints.isSmallerOrEqual("sm"));
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
      :space="32"
      :width="isSmallScreen ? 400 : 560"
      style="--mask: url('/illustrations/il_box_parallelogram.png')"
      :speed="10000"
    >
      <CubeCard
        v-for="client in homeClients"
        v-bind="client"
        class="text-black max-w-xl lt-md:max-w-xs md:min-h-sm"
        link-class="ml-auto"
      />
    </VueMarqueeSlider>
  </div>
</template>
