<script setup lang="ts">
import { homeClients } from "~/configs/cards";
const [visible, container] = useVisible();
</script>

<template>
  <div
    ref="container"
    id="services"
    class="relative flex flex-col space-y-8 2xl:w-9/10 2xl:self-center"
  >
    <div class="lt-md:text-base font-bold px-4 md:px-8 2xl:px-0">
      <h1>Advisory Clients</h1>
    </div>
    <div
      :class="visible ? 'animate-slide-in-up visible' : 'invisible'"
      class="flex gap-x-4 overflow-x-scroll snap-x lt-md:px-4 lt-2xl:px-8 xl:grid xl:grid-cols-3 md:gap-8"
      style="--mask: url('/illustrations/il_box_parallelogram.png')"
    >
      <CubeCard
        v-for="client in homeClients"
        v-bind="client"
        class="text-black lt-md:min-w-sm lt-xl:min-w-md 2xl:min-h-sm 3xl:min-h-md 3xl:max-w-xl 4xl:max-w-2xl"
        link-class="ml-auto"
      />
    </div>
  </div>
</template>
