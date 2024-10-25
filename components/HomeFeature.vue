<script setup lang="ts">
import { homeFeatures } from "~/configs/features";
const [visible, container] = useVisible();
</script>
<template>
  <section class="flex flex-col py-8">
    <div
      ref="container"
      class="relative flex space-y-8"
    >
      <div
        :class="{ 'animate-slide-in-left': visible }"
        class="flex-1 lt-md:hidden"
      >
        <NuxtImg
          src="/illustrations/il_bubble.png"
          class="absolute w-1/2 h-full"
        />
      </div>
      <div
        class="flex-inline gap-4 px-4 z-10 md:max-w-xl xl:max-w-5xl md:self-end"
      >
        <div
          v-for="(block, blockIndex) in homeFeatures"
          :key="blockIndex"
          :class="{
            'lt-md:first:animate-slide-in-left lt-md:last:animate-slide-in-right': visible,
          }"
          class="grid grid-cols-1 gap-y-24 first:mb-24 last:mt-24 bg-bubble-transparent"
        >
          <div
            v-for="(feature, index) in block"
            :key="index"
            :class="{'last:md:animate-slide-in-up first:md:animate-slide-in-down': visible}"
            class="flex flex-col space-y-4 max-w-sm border-b py-4 border-primary"
          >
            <div>
              <ButtonFill class="px-6 py-1 text-xs md:text-sm">
                <p class="text-black font-bold">0{{ feature.index }}</p>
              </ButtonFill>
            </div>
            <h1 class="font-bold capitalize md:text-xl">{{ feature.title }}</h1>
            <ul
              v-for="(description, index) in feature.descriptions"
              :key="index"
              class="flex-1 flex flex-col justify-end"
            >
              <li
                class="before:content-['◇'] before:mr-1 text-xs text-white/75 md:text-sm"
              >
                {{ description }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="text-xs capitalize text-center md:text-sm">
        VX GLOBAL offers a full spectrum of services to help businesses <br />
        navigate the dynamic Asian market, ensuring sustainable success.
      </p>
    </div>
  </section>
</template>
