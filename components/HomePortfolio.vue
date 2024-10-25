<script setup lang="ts">
import { homePortfolios, homeWeb3 } from "~/configs/cards";
const [visible, container] = useVisible();
</script>
<template>
  <section
    id="portfolio"
    ref="container"
    class="relative flex flex-col space-y-8 bg-bubble-mirror"
  >
    <div class="flex flex-col space-y-4 px-4 md:px-8 xl:w-7xl xl:self-center">
      <div
        :class="{ 'animate-slide-in-down': visible }"
        class="flex flex-col"
      >
        <h1 class="text-base font-bold">Our Portofolio</h1>
        <p class="text-xs text-white/75 md:text-sm">
          VX GLOBAL has made targeted investments in three categories. Brick and
          mortar retails, Web2 <br class="lt-md:hidden" />
          Foodtech, Deeptech. Finally in Web3, Gamefi, Depin and Defi.
        </p>
      </div>
      <div class="flex flex-col space-y-4 md:space-y-8">
        <div
          v-for="block in homePortfolios"
          class="grid grid-cols-1 gap-y-4 lt-md:justify-center lt-md:items-center md:grid-cols-2 md:gap-4 last:flex last:items-center last:justify-center"
        >
          <CubeCard
            v-for="portfolio in block"
            v-bind="portfolio"
            :class="{
              'odd:animate-slide-in-left even:animate-slide-in-right': visible,
            }"
          />
        </div>
      </div>
    </div>
    <HomePorfolioWeb3 />
  </section>
</template>
