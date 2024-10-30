<script setup lang="ts">
import { homeWeb3 } from "~/configs/cards";
const [visible, container] = useVisible();
</script>

<template>
  <div
    id="services"
    ref="container"
    :class="visible ? 'md:animate-slide-in-up md:visible' : 'md:invisible'"
    class="relative flex flex-col"
  >
    <div class="absolute inset-0 w-1/2 bg-black blur-xl md:blur-3xl" />
    <div class="relative flex flex-col space-y-8 2xl:w-9/10 2xl:self-center">
      <div class="px-2 md:px-8 lg:px-16 2xl:px-0">
        <h1 class="text-base font-bold md:text-lg xl:text-2xl">Web 3.0</h1>
      </div>
      <div
        class="flex gap-4 px-2 flex-col md:px-8 lg:px-16 md:overflow-x-scroll md:snap-x 2xl:px-0 xl:grid xl:grid-cols-2 md:gap-16"
        style="--mask: url('/illustrations/il_plain_parallelogram.png')"
      >
        <CubeCard
          v-for="portfolio in homeWeb3"
          :class="
            visible
              ? 'lt-md:odd:animate-slide-in-left lt-md:even:animate-slide-in-right lt-md:visible'
              : 'lt-md:invisible'
          "
          v-bind="portfolio"
          class="z-10 text-black md:px-22"
        />
      </div>
    </div>
  </div>
</template>
