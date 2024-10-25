<script setup lang="ts">
import { layoutNavigations } from "~/configs/navigations";
import { layoutSocials } from "~/configs/socials";

const [visible, container] = useVisible();
</script>

<template>
  <footer
    ref="container"
    class="flex flex-col space-y-4 md:p-16 px-4 py-8"
  >
    <div class="flex space-x-4">
      <div
        :class="{ 'animate-slide-in-down': visible }"
        class="flex-1 flex flex-col space-y-2"
      >
        <Logo
          :width="32"
          :height="32"
          class="w-6 h-6 xl:w-12 xl:h-12"
          textClass="text-xl md:text-2xl"
        />
        <div>
          <p class="max-w-56 md:max-w-xs text-xs text-white/75 md:text-sm">
            VX GLOBAL excels in management consultancy, providing tailored
            solutions for market entry, capital deployment for funds, deal flow
            and operational strategies.
          </p>
          <div class="flex items-center space-x-2">
            <div class="i-mdi:email" />
            <p>mark@transendentconcepts.com</p>
          </div>
        </div>
      </div>
      <div
        :class="{ 'animate-slide-in-right': visible }"
        class="flex space-x-2 md:space-x-4"
      >
        <div class="flex flex-col space-y-4">
          <div>
            <h1>Menu</h1>
          </div>
          <div class="flex flex-col">
            <NuxtLink
              v-for="navigation in layoutNavigations"
              :href="navigation.link"
              class="py-2 text-xs text-white/75 md:text-sm hover:text-white text-nowrap"
              >{{ navigation.name }}</NuxtLink
            >
          </div>
        </div>
        <div class="flex flex-col space-y-4">
          <div>
            <h1>Socials</h1>
          </div>
          <div class="flex flex-col">
            <NuxtLink
              v-for="navigation in layoutSocials"
              :href="navigation.link"
              target="_blank"
              class="py-2 text-xs text-white/75 md:text-sm hover:text-white"
              >{{ navigation.name }}</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <div 
    :class="{ 'animate-slide-in-up': visible }"

    class="flex flex-col space-y-2">
      <hr class="border-white/50" />
      <div>
        <p class="text-white/75">
          Copyright © 2024 VX Global . All rights reserved
        </p>
      </div>
    </div>
  </footer>
</template>
