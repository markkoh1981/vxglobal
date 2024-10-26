<script lang="ts" setup>
import type { Card } from "~/configs/cards";

defineProps<Card & { linkClass?: string }>();
</script>

<template>
  <CubeEffect
    class="shrink-0 flex flex-col space-y-2 md:space-y-4 bg-primary text-black px-8 py-4 snap-center lt-md:min-w-xs max-w-lg"
  >
    <div class="flex-1 flex flex-col space-y-2 md:space-y-4">
      <div class="flex items-center space-x-2">
        <NuxtImg
          :src="logo"
          width="56"
          height="56"
          class="lt-md:w-10 lt-md:h-10 rounded-full"
        />
        <p class="text-sm font-bold md:text-base xl:text-xl">{{ name }}</p>
      </div>
      <div class="flex-1">
        <p
          class="text-xs !leading-relaxed md:text-sm"
          v-html="description"
        />
      </div>
    </div>
    <div class="flex text-xs md:py-2">
      <NuxtLink
        :href="link"
        target="_blank"
        :class="linkClass"
      >
        {{ link.replaceAll("https://", "").replaceAll("/", "") }}
      </NuxtLink>
    </div>
  </CubeEffect>
</template>
