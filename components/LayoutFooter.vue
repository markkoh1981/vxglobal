<script setup lang="ts">
import { layoutNavigations } from "~/configs/navigations";
import { layoutSocials } from "~/configs/socials";

const [visible, container] = useVisible();
</script>

<template>
  <footer
    ref="container"
    class="flex flex-col space-y-8 lt-xl:px-4 py-16 md:px-8 lg:px-16 xl:px-0 2xl:w-9/10 2xl:self-center"
  >
    <div class="flex md:space-x-4">
      <div
        :class="visible ? 'animate-slide-in-down visible' : 'invisible'"
        class="flex-1 flex flex-col space-y-2"
      >
        <Logo
          :width="32"
          :height="32"
          class="w-6 h-6 xl:w-12 xl:h-12"
          textClass="text-xl md:text-2xl"
        />
        <div class="flex flex-col space-y-4">
          <p class="lt-md:max-w-56 leading-relaxed md:leading-loose md:max-w-auto">
            VX GLOBAL excels in management consultancy, providing <br />
            tailored solutions for market entry, capital deployment for <br />
            funds, deal flow and operational strategies.
          </p>
          <div class="flex items-center space-x-2">
            <div class="i-mdi:email-outline text-base" />
            <p>mark@transendentconcepts.com</p>
          </div>
        </div>
      </div>
      <div
        :class="visible ? 'animate-slide-in-right visible' : 'invisible'"
        class="flex space-x-2 md:space-x-8 lg:space-x-16"
      >
        <div class="flex flex-col space-y-2">
          <div>
            <h1>Menu</h1>
          </div>
          <div class="flex flex-col md:text-base">
            <NuxtLink
              v-for="navigation in layoutNavigations"
              :href="navigation.link"
              class="py-2 text-white/75 hover:text-white text-nowrap"
              >{{ navigation.name }}</NuxtLink
            >
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <div>
            <h1>Socials</h1>
          </div>
          <div class="flex flex-col md:text-base">
            <NuxtLink
              v-for="navigation in layoutSocials"
              :href="navigation.link"
              target="_blank"
              class="py-2 text-white/75 hover:text-white"
              >{{ navigation.name }}</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <div
      :class="visible ? 'animate-slide-in-up visible' : 'invisible'"
      class="flex flex-col space-y-8"
    >
      <hr class="border-white/50" />
      <div>
        <p class="text-white/50">
          Copyright © 2024 VX Global . All rights reserved
        </p>
      </div>
    </div>
  </footer>
</template>
