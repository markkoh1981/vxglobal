<script lang="ts" setup>
import type { Card } from "~/configs/cards";

defineProps<Card & { linkClass?: string }>();
</script>

<template>
  <CubeEffect
    class="flex flex-col bg-primary text-black px-4 py-2 snap-center lt-md:min-w-xs max-w-md"
  >
    <div class="flex-1 flex flex-col space-y-2">
      <div class="flex items-center space-x-2">
        <NuxtImg
          :src="logo"
          width="32"
          height="32"
          class="w-6 h-6 md:w-8 md:h-8 rounded-full"
        />
        <p class="text-sm md:text-base">{{ name }}</p>
      </div>
      <div class="flex-1">
        <p
          class="text-xs md:text-sm"
          v-html="description"
        />
      </div>
    </div>
    <div class="flex text-xs  py-2">
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
