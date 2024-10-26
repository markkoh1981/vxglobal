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
    class="flex flex-col space-y-8 xl:w-7xl xl:self-center"
  >
    <div class="px-4 md:px-8">
      <h1 class="text-base font-bold">Web 3.0</h1>
    </div>
    <div
      class="flex flex-col gap-y-4 px-4 md:px-8 snap-x overflow-x-scroll md:grid md:grid-cols-2 md:gap-16"
    >
      <CubeCard
        v-for="portfolio in homeWeb3"
        v-bind="portfolio"
        :class="
          visible
            ? 'lt-md:odd:animate-slide-in-left lt-md:even:animate-slide-in-right lt-md:visible'
            : 'lt-md:invisible'
        "
      />
    </div>
  </div>
</template>
