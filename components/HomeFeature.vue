<script setup lang="ts">
import { homeFeatures } from "~/configs/features";
const [visible, container] = useVisible();
</script>
<template>
  <section class="flex flex-col">
    <div
      ref="container"
      class="flex-1 relative flex space-y-8 lt-md:items-start lt-xl:flex-col lt-xl:items-end"
    >
      <div
        :class="visible ? 'animate-slide-in-left visible' : 'invisible'"
        class="bg-bubble absolute inset-0 lt-lg:hidden"
      />
      <div class="flex gap-x-8 lt-md:px-4 z-10 xl:gap-x-16 xl:max-w-5xl xl:!ml-auto">
        <div
          v-for="(block, blockIndex) in homeFeatures"
          :key="blockIndex"
          :class="
            visible
              ? 'lt-xl:first:animate-slide-in-left lt-xl:last:animate-slide-in-right lt-xl:visible'
              : 'lt-xl:invisible'
          "
          class="lt-xl:flex-1 flex flex-col gap-y-16 md:gap-y-24 first:mb-32 last:mt-56 bg-bubble-transparent"
        >
          <div
            v-for="(feature, index) in block"
            :key="index"
            :class="
              visible
                ? 'last:md:animate-slide-in-up first:md:animate-slide-in-down md:visible'
                : 'md:invisible'
            "
            class="flex flex-col space-y-4 xl:max-w-xl px-4 md:px-8 md:py-4"
          >
            <div>
              <ButtonFill class="px-6 py-1 text-xs md:text-sm md:px-8 md:py-2">
                <p class="text-black font-bold">0{{ feature.index }}</p>
              </ButtonFill>
            </div>
            <div class="space-y-2">
              <h1
                class="text-sm font-bold text-nowrap capitalize md:text-base xl:text-2xl"
              >
                {{ feature.title }}
              </h1>
              <ul
                v-for="(description, index) in feature.descriptions"
                :key="index"
                class="flex-1 flex flex-col md:px-2"
              >
                <li
                  class="leading-relaxed list-disc md:text-base md:leading-loose"
                  v-html="description"
                />
              </ul>
            </div>
            <hr class="border-primary" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col px-4 py-8">
      <p class="capitalize !leading-relaxed text-center">
        VX GLOBAL offers a full spectrum of services to help businesses
        <br class="lt-md:hidden" />
        navigate the dynamic Asian market ensuring
        <span class="lt-md:hidden"> sustainable </span>success
      </p>
    </div>
  </section>
</template>
