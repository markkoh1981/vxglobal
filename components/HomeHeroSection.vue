<script lang="ts" setup>
import clsx from "clsx";
const [visible, container] = useVisible();

type Props = {
  className?: string;
};

defineProps<Props>();
</script>
<template>
  <div
    ref="container"
    class="flex-1 relative flex flex-col lt-xl:relative"
  >
    <div class="absolute inset-0 bg-black/50 blur-3xl" />
    <div
      :class="
        clsx(
          className,
          visible ? 'animate-slide-in-right visible' : 'invisible'
        )
      "
      class="h-md flex flex-col items-center text-center space-y-4 lt-md:py-8 md:justify-center md:space-y-8 md:h-xl"
    >
      <div class="flex flex-col space-y-4">
        <h1 class="text-xl font-black md:text-4xl xl:text-6xl font-inter">
          Building a Strong Management <br />
          System Across the Globe 🌍️
        </h1>
        <p class="text-xs !leading-relaxed md:text-sm xl:text-base">
          Elevate your company with creatives that consistently out <br />
          perform your competitors, setting your brand apart.
        </p>
      </div>
      <div class="flex space-x-2 text-xs">
        <ButtonFill class="px-8 py-2 md:px-8 md:py-4">
          <p class="text-black text-nowrap">Book a call</p>
        </ButtonFill>
        <ButtonOutline class="shrink-0 px-4 py-3.5 md:px-8 md:py-4">
          <p class="text-white/70 text-nowrap">Send Us A Message</p>
        </ButtonOutline>
      </div>
    </div>
    <HomeHeroSectionJunk />
  </div>
</template>
