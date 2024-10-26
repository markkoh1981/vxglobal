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
    <div class="flex flex-col space-y-8 px-4 md:px-8 xl:w-7xl xl:self-center">
      <div
        :class="
          visible
            ? 'animate-slide-in-down visible'
            : 'invisible'
        "
        class="flex flex-col space-y-4"
      >
        <h1 class="text-base font-bold md:text-lg xl:text-xl">
          Our Portofolio
        </h1>
        <p class="text-xs !leading-relaxed md:text-sm">
          VX GLOBAL has made targeted investments in three categories. Brick and
          mortar retails, Web2 <br class="lt-md:hidden" />
          Foodtech, Deeptech. Finally in Web3, Gamefi, Depin and Defi.
        </p>
      </div>
      <div class="flex flex-col space-y-4 md:space-y-8">
        <div
          v-for="block in homePortfolios"
          class="shrink-0 grid grid-cols-1 gap-y-4 lt-md:justify-center lt-md:items-center md:grid-cols-2 md:gap-4 last:md:flex last:md:items-center last:md:justify-center"
        >
          <CubeCard
            v-for="portfolio in block"
            v-bind="portfolio"
            :class="
              visible
                ? 'odd:animate-slide-in-left even:animate-slide-in-right visible'
                : 'invisible'
            "
          />
        </div>
      </div>
    </div>
    <HomePorfolioWeb3 />
  </section>
</template>
