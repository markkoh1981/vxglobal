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
    <div
      :class="
        clsx(
          className,
          visible ? 'animate-slide-in-right visible' : 'invisible'
        )
      "
      class="h-sm flex flex-col items-center text-center md:h-xl xl:h-3xl"
    >
      <div
        class="relative flex flex-col justify-center items-center space-y-4 md:space-y-8 md:h-sm"
      >
        <div class="absolute inset-0 bg-black blur-3xl" />

        <div class="flex flex-col md:space-y-4 z-10">
          <h1 class="text-xl font-black md:text-4xl xl:text-6xl font-tommy">
            Building a Strong Management <br />
            System Across the Globe 🌍️
          </h1>
          <p class="!leading-relaxed">
            Elevate your company with creatives that consistently out <br />
            perform your competitors, setting your brand apart.
          </p>
        </div>
        <div class="flex space-x-4 md:space-x-8 md:text-base z-10">
          <img
            src="~/assets/icons/ic_book_a_call.svg"
            class="w-36 lt-md:w-32 cursor-pointer"
          />
          <img
            src="~/assets/icons/ic_send_a_message.svg"
            class="w-36 lt-md:w-32 cursor-pointer"
          />
        </div>
      </div>
    </div>
    <HomeHeroSectionJunk />
  </div>
</template>
