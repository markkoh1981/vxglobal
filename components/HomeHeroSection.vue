<script lang="ts" setup>
import clsx from "clsx";
const [visible, container] = useVisible();

type Props = {
  className?: string;
};

defineProps<Props>();
</script>
<template>
  <div class="relative flex flex-col items-center justify-center py-4 lt-xl:relative">
    <div class="absolute inset-x-24 h-sm bg-black/90 blur-3xl" />
    <div
      ref="container"
      :class="clsx(className, { 'animate-slide-in-right': visible })"
      class="flex flex-col items-center md:justify-center text-center space-y-4 md:space-y-16 md:self-center md:m-auto"
    >
      <div class="flex flex-col">
        <h1 class="text-2xl font-black md:text-5xl font-inter">
          Building a Strong Management <br />
          System Across the Globe 🌍️
        </h1>
        <p class="text-xs text-white/75 md:text-base">
          Elevate your company with creatives that consistently out <br />
          perform your competitors, setting your brand apart.
        </p>
      </div>
      <div class="flex items-center space-x-2 text-xs">
        <ButtonFill class="px-8 py-2 md:py-3">
          <p class="text-black text-nowrap">Book a call</p>
        </ButtonFill>
        <ButtonOutline class="shrink-0 px-2 py-2.5 md:py-3">
          <p class="text-white/70 text-nowrap">Send Us A Message</p>
        </ButtonOutline>
      </div>
    </div>
    <HomeHeroSectionJunk />
  </div>
</template>
