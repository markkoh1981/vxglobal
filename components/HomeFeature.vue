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
        class="bg-bubble absolute inset-0 lt-md:hidden"
      />
      <div class="flex-1 flex z-10 lt-md:px-2 xl:gap-x-16 md:justify-end">
        <div
          v-for="(block, blockIndex) in homeFeatures"
          :key="blockIndex"
          :class="
            visible
              ? 'lt-xl:first:animate-slide-in-left lt-xl:last:animate-slide-in-right lt-xl:visible'
              : 'lt-xl:invisible'
          "
          class="relative lt-xl:flex-1 flex flex-col gap-y-16 bg-bubble-transparent z-10 last:mt-58 2xl:last:mt-64 md:gap-y-24"
        >
          <div
            v-if="[0].includes(blockIndex)"
            class="absolute inset-0 -left-24 bg-black/80 blur-3xl"
          />
          <div
            v-for="(feature, index) in block"
            :key="index"
            :class="
              visible
                ? 'last:md:animate-slide-in-up first:md:animate-slide-in-down md:visible'
                : 'md:invisible'
            "
            class="relative flex flex-col"
          >
            <div class="flex flex-col space-y-4 px-2 md:px-8 md:py-4 z-10">
              <div>
                <ButtonFill
                  class="px-6 py-1  md:px-10 md:py-4 2xl:px-16"
                >
                  <p class="text-black font-bold">0{{ feature.index }}</p>
                </ButtonFill>
              </div>
              <div class="space-y-2">
                <h1 class="font-bold text-nowrap capitalize lt-md:text-base">
                  {{ feature.title }}
                </h1>
                <ul
                  v-for="(description, index) in feature.descriptions"
                  :key="index"
                  class="flex-1 flex flex-col md:px-2"
                >
                  <li
                    class="list-disc lt-md:leading-relaxed  lt-md:text-sm md:text-base lg:text-xl 3xl:text-3xl text-white/70 leading-loose"
                    v-html="description"
                  />
                </ul>
              </div>
              <hr class="border-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col px-2 py-8">
      <p class="capitalize lt-md:leading-relaxed leading-loose text-center">
        VX GLOBAL offers a full spectrum of services to help businesses
        <br class="lt-md:hidden" />
        navigate the dynamic Asian market ensuring
        <span class="lt-md:hidden"> sustainable </span>success
      </p>
    </div>
  </section>
</template>
