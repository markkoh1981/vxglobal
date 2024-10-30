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
        class="relative flex flex-col justify-center items-center space-y-4 md:space-y-8 md:h-sm 2xl:h-xl"
      >
        <div class="absolute inset-0 bg-black blur-xl md:blur-3xl" />

        <div class="flex flex-col md:space-y-4 z-10">
          <div
            class="flex flex-col md:space-y-2 text-2xl font-black md:text-4xl xl:text-6xl 2xl:text-7xl font-tommy"
          >
            <h1>Accelerating Growth <br /></h1>
            <div class="flex items-center justify-center space-x-2">
              <h1>in Southeast Asia</h1>
              <img
                src="~/assets/icons/ic_asia.svg"
                width="48"
                height="48"
                class="lt-md:w-6"
              />
            </div>
          </div>
          <p class="lt-md:leading-relaxed leading-loose">
            Connecting Capital, Talent, and Opportunity
          </p>
        </div>
        <div class="flex md:space-x-8 md:text-base z-10">
          <NuxtLink
            href="https://forms.gle/ow74aDCWgf59KKZ37"
            target="_blank"
          >
            <img
              src="/icons/ic_book_a_session.png"
              class="w-46 lt-md:w-40 cursor-pointer 2xl:w-48 4xl:w-64"
            />
          </NuxtLink>
          <NuxtLink
            href="https://forms.gle/K2LTDFmV19RCkriC7"
            target="_blank"
          >
            <img
              src="/icons/ic_seeking_funding.png"
              class="w-46 lt-md:w-40 cursor-pointer 2xl:w-48 4xl:w-64"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
    <HomeHeroSectionJunk />
  </div>
</template>
