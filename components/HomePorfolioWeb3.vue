<script setup lang="ts">
import { homeWeb3 } from "~/configs/cards";
const [visible, container] = useVisible();
</script>

<template>
  <div class="flex flex-col space-y-2 xl:w-7xl xl:self-center">
    <div class="px-4 md:px-8">
      <h1 class="text-base font-bold">Web 3.0</h1>
    </div>
    <div
      ref="container"
      :class="{ 'md:animate-slide-in-up': visible }"
      class="flex flex-col gap-y-4 px-4 md:px-8 snap-x overflow-x-scroll md:grid md:grid-cols-2"
    >
      <CubeCard
        v-for="portfolio in homeWeb3"
        v-bind="portfolio"
        :class="{
          'lt-md:odd:animate-slide-in-left lt-md:even:animate-slide-in-right':
            visible,
        }"
      />
    </div>
  </div>
</template>
