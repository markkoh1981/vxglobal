<script lang="ts" setup>
import type { Card } from "~/configs/cards";

defineProps<Card & { linkClass?: string }>();
</script>

<template>
  <CubeEffect class="box flex flex-col space-y-4 p-8 pt-8 pb-4">
    <div class="flex-1 flex flex-col space-y-2 md:space-y-4">
      <div class="flex items-center space-x-2">
        <NuxtImg
          :src="logo"
          width="40"
          height="40"
          fit="inside"
          class="lt-md:w-10 lt-md:h-10 rounded-full"
        />
        <p class="text-sm font-bold md:text-base xl:text-xl">{{ name }}</p>
      </div>
      <div class="flex-1">
        <p v-html="description" />
      </div>
    </div>
    <div
      class="flex lt-md:text-xs md:text-base 2xl:text-xl 4xl:text-2xl"
    >
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
