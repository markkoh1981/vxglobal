<script setup lang="ts">
import { homeWeb3 } from "~/configs/cards";
const [visible, container] = useVisible();
</script>

<template>
  <div
    ref="container"
    :class="
      visible
        ? 'md:animate-slide-in-up md:visible'
        : 'md:invisible'
    "
    class="flex flex-col space-y-8 2xl:w-7xl 2xl:self-center"
  >
    <div class="px-4 md:px-8 lg:px-16">
      <h1 class="text-base font-bold md:text-lg xl:text-2xl">Web 3.0</h1>
    </div>
    <div
      class="flex gap-4 px-4 lt-sm:flex-col md:px-8 lg:px-16 md:overflow-x-scroll md:snap-x xl:grid xl:grid-cols-2 md:gap-16"
    >
      <CubeCard
        v-for="portfolio in homeWeb3"
        v-bind="portfolio"
        class="md:min-w-xl"
        :class="
          visible
            ? 'lt-md:odd:animate-slide-in-left lt-md:even:animate-slide-in-right lt-md:visible'
            : 'lt-md:invisible'
        "
      />
    </div>
  </div>
</template>
