<script setup lang="ts">
import { homeClients } from "~/configs/cards";
const [visible, container] = useVisible();
</script>

<template>
  <div
    id="services"
    class="relative flex flex-col space-y-8 xl:w-7xl xl:self-center"
  >
    <div class="text-base font-bold px-4 md:px-8">
      <h1>Advisory Clients</h1>
    </div>
    <div
      ref="container"
      :class="{'md:animate-slide-in-up': visible}"
      class="flex gap-x-4 overflow-x-scroll snap-x px-4 md:px-8"
    >
      <CubeCard
        v-for="client in homeClients"
        v-bind="client"
        link-class="ml-auto"
        class="shrink-0 rounded-md"
        :class="{ 'lt-md:even:animate-slide-in-right lt-md:odd:animate-slide-in-left': visible }"
      />
    </div>
  </div>
</template>
