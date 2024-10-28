<script setup lang="ts">
import { homeClients } from "~/configs/cards";
const [visible, container] = useVisible();
</script>

<template>
  <div
    ref="container"
    id="services"
    class="relative flex flex-col space-y-8 2xl:w-7xl 2xl:self-center"
  >
    <div class="text-base font-bold px-4 md:px-8 2xl:px-0">
      <h1>Advisory Clients</h1>
    </div>
    <div
      :class="visible ? 'animate-slide-in-up visible' : 'invisible'"
      class="flex gap-x-4 overflow-x-scroll snap-x px-4 md:pr-8"
    >
      <div v-for="client in homeClients" class="flex-1 flex flex-col items-end">
        <CubeCard
          v-bind="client"
          link-class="!ml-auto"
          class="h-full rounded-md min-w-sm"
          style="--mask: url('/icons/ic_box_parallelogram.svg#mask')"
        />
      </div>
    </div>
  </div>
</template>
