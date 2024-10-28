<script setup lang="ts">
import { homePartners } from "~/configs/cards";
const [visible, container] = useVisible();
</script>
<template>
  <section
    ref="container"
    :class="visible ? 'md:animate-slide-in-up md:visible' : 'md:invisible'"
    class="relative flex flex-col space-y-8 px-4 overflow-y-hidden md:px-8 xl:max-w-7xl xl:self-center"
  >
    <div>
      <h1 class="text-base font-bold">Partners</h1>
    </div>
    <div
      class="flex flex-col gap-y-4 overflow-x-scroll bg-small-parallelogram snap-x md:flex-row md:gap-8 xl:grid xl:grid-cols-3"
    >
      <div
        v-for="(partner, index) in homePartners"
        :class="
          visible
            ? 'lt-md:even:animate-slide-in-right lt-md:odd:animate-slide-in-left lt-md:visible'
            : 'lt-md:invisible'
        "
      >
        <CubeEffectWithBorder
          class="flex flex-col text-sm p-4 lt-md:pt-8 bg-stone-900 text-white md:min-w-md md:min-h-36 md:bg-primary md:text-black"
        >
          <div class="flex-1 flex flex-col space-y-4">
            <div class="flex-1 flex items-center justify-center">
              <p
                class="flex-1 text-sm leading-tight"
                v-html="partner.name"
              />
            </div>
            <NuxtLink
              :href="partner.link"
              target="_blank"
              class="text-xs ml-auto md:px-10"
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
