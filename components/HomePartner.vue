<script setup lang="ts">
import { homePartners } from "~/configs/cards";
const [visible, container] = useVisible();
</script>
<template>
  <section
    ref="container"
    :class="visible ? 'md:animate-slide-in-up md:visible' : 'md:invisible'"
    class="relative flex flex-col space-y-8 lt-md:px-4 overflow-y-hidden 2xl:w-9/10 2xl:self-center"
  >
    <div class="md:px-8 lg:px-16 xl:px-0">
      <h1 class="text-base font-bold md:text-lg xl:text-2xl">Partners</h1>
    </div>
    <div
      class="flex flex-col gap-y-4 overflow-x-scroll bg-small-parallelogram snap-x md:px-8 lg:px-16 md:flex-row md:gap-8 xl:px-0 xl:grid xl:grid-cols-3"
    >
      <div
        v-for="(partner, index) in homePartners"
        :class="
          visible
            ? 'lt-md:even:animate-slide-in-right lt-md:odd:animate-slide-in-left lt-md:visible'
            : 'lt-md:invisible'
        "
        class="flex first:justify-start justify-center last:justify-end"
      >
        <CubeEffectWithBorder
          class="flex flex-col text-sm p-4 lt-md:pt-8 bg-stone-900 text-white md:max-w-sm md:min-h-36 md:bg-primary md:text-black"
        >
          <div class="flex-1 flex flex-col space-y-4">
            <div class="flex-1 flex items-center justify-center space-x-2">
              <NuxtImg
                :src="partner.logo"
                :alt="partner.name"
                width="36"
                height="36"
              />
              <p
                class="flex-1 md:text-base leading-tight"
                v-html="partner.name"
              />
            </div>
            <NuxtLink
              :href="partner.link"
              target="_blank"
              class="text-xs ml-auto"
              :class="index === homePartners.length - 1 ? 'xl:px-16' : ''"
            >
              {{ partner.link.replaceAll("https://", "").replaceAll("/", "") }}
            </NuxtLink>
          </div>
        </CubeEffectWithBorder>
      </div>
    </div>
  </section>
</template>
