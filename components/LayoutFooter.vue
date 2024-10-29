<script setup lang="ts">
import { layoutNavigations } from "~/configs/navigations";
import { layoutSocials } from "~/configs/socials";

const [visible, container] = useVisible();
</script>

<template>
  <footer
    ref="container"
    class="flex flex-col space-y-8 lt-xl:px-4 py-16 md:px-8 lg:px-16 2xl:px-0 2xl:w-9/10 2xl:self-center"
  >
    <div class="flex md:space-x-4">
      <div
        :class="visible ? 'animate-slide-in-down visible' : 'invisible'"
        class="flex-1 flex flex-col space-y-2"
      >
        <Logo
          :width="32"
          :height="32"
          class="w-6 h-6 md:w-8 md:h-8 xl:w-14 xl:w-14 4xl:w-16 4xl:h-16"
          textClass="text-xl z-10 xl:text-xl 2xl:text-4xl 4xl:text-5xl"
        />
        <div class="flex flex-col space-y-4">
          <p
            class="lt-md:max-w-56 leading-relaxed md:leading-loose md:max-w-auto"
          >
            VX GLOBAL excels in management consultancy, providing
            <br class="lt-md:hidden" />
            tailored solutions for market entry, capital deployment for
            <br class="lt-md:hidden" />
            funds, deal flow and operational strategies.
          </p>
          <div class="flex items-center space-x-2">
            <div class="i-mdi:email-outline" />
            <p>mark@transendentconcepts.com</p>
          </div>
        </div>
      </div>
      <div
        :class="visible ? 'animate-slide-in-right visible' : 'invisible'"
        class="flex space-x-4 md:space-x-8 lg:space-x-16"
      >
        <div class="flex flex-col space-y-2">
          <div>
            <h1
              class="text-xl lt-md:text-base xl:text-2xl 2xl:text-3xl 4xl:text-4xl"
            >
              Menu
            </h1>
          </div>
          <div class="flex flex-col">
            <NuxtLink
              v-for="navigation in layoutNavigations"
              :href="navigation.link"
              class="py-2 text-white/75 hover:text-white text-nowrap lt-md:leading-relaxed lt-md:text-xs md:text-base lg:text-xl 3xl:text-2xl leading-loose"
              >{{ navigation.name }}</NuxtLink
            >
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <div>
            <h1
              class="text-xl lt-md:text-base xl:text-2xl 2xl:text-3xl 4xl:text-4xl"
            >
              Socials
            </h1>
          </div>
          <div class="flex flex-col">
            <NuxtLink
              v-for="navigation in layoutSocials"
              :href="navigation.link"
              target="_blank"
              class="py-2 text-white/75 hover:text-white text-nowrap lt-md:leading-relaxed lt-md:text-xs md:text-base lg:text-xl 3xl:text-2xl leading-loose"
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
