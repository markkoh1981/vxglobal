<script setup lang="ts">
import clsx from "clsx";
import { homePortfolios, homeWeb3 } from "~/configs/cards";
const [visible, container] = useVisible();
</script>
<template>
  <section
    id="portfolio"
    ref="container"
    class="relative flex flex-col space-y-8 bg-bubble-mirror py-8"
    style="--mask: url('/icons/ic_plain_parallelogram.svg#mask')"
  >
    <div
      class="flex flex-col space-y-8 lt-md:px-4 lt-lg:px-8 lt-2xl:px-16 2xl:w-9/10 2xl:self-center"
    >
      <div
        :class="visible ? 'animate-slide-in-down visible' : 'invisible'"
        class="flex flex-col space-y-4"
      >
        <h1 class="lt-md:text-base font-bold lt-xl:text-lg xl:text-2x">
          Our Portofolio
        </h1>
        <p class="lt-md:leading-relaxed !leading-loose 2xl:text-2xl">
          VX GLOBAL has made targeted investments in three categories. Brick and
          mortar retails, Web2 <br class="lt-lg:hidden" />
          Foodtech, Deeptech. Finally in Web3, Gamefi, Depin and Defi.
        </p>
      </div>
      <div
        class="flex flex-col space-y-4 md:space-y-8"
        style="--mask: url('/illustrations/il_plain_parallelogram.png')"
      >
        <div
          v-for="(block, index) in homePortfolios"
          class="shrink-0 flex flex-col gap-y-4 lt-md:justify-center lt-md:items-center last:md:flex md:items-center md:justify-center lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16"
        >
          <CubeCard
            v-for="portfolio in block"
            :class="
              clsx(
                { 'w-6/10': index === homePortfolios.length - 1 },
                visible
                  ? 'odd:animate-slide-in-left even:animate-slide-in-right visible'
                  : 'invisible'
              )
            "
            v-bind="portfolio"
            class="px-16 xl:px-22 h-full lt-lg:w-full text-black"
          />
        </div>
      </div>
    </div>
    <HomePorfolioWeb3 />
  </section>
</template>
