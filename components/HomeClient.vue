<script setup lang="ts">
import { homeClients } from "~/configs/cards";
const [visible, container] = useVisible();
</script>

<template>
  <div
    ref="container"
    id="services"
    class="relative flex flex-col space-y-8 xl:w-7xl xl:self-center"
  >
    <div class="text-base font-bold px-4 md:px-8 xl:px-0">
      <h1>Advisory Clients</h1>
    </div>
    <div
      :class="visible ? 'md:animate-slide-in-up md:visible' : 'md:invisible'"
      class="flex gap-x-4 overflow-x-scroll snap-x px-4 xl:px-0"
    >
      <CubeCard
        v-for="client in homeClients"
        v-bind="client"
        link-class="ml-auto"
        class="shrink-0 rounded-md"
        style="--mask: url('/icons/ic_box_parallelogram.svg#mask')"
        :class="
          visible
            ? 'lt-md:even:animate-slide-in-right lt-md:odd:animate-slide-in-left visible'
            : 'invisible'
        "
      />
    </div>
  </div>
</template>
