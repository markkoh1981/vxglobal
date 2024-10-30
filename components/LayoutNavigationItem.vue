<script lang="ts" setup>
import type { Navigation } from "~/configs/navigations";

const props = defineProps<Navigation>();
const route = useRoute();
const active = computed(
  () => route.fullPath === props.link.path && route.hash === props.link.hash
);
</script>
<template>
  <NuxtLink
    :to="link"
    class="flex items-center space-x-2 p-4 md:py-2 hover:text-white"
    :class="active ? 'text-white' : 'text-white/75'"
  >
    <div
      v-if="active && icon"
      class="border rounded p-0.5 md:p-1"
      :class="
        active
          ? 'border-white text-white'
          : 'bg-white/10 border-white/60 text-white/90'
      "
    >
      <div
        :class="icon"
        class="2xl:text-2xl"
      />
    </div>
    <span
      class="lt-md:leading-relaxed lt-md:text-sm md:text-base lg:text-xl 3xl:text-2xl leading-loose"
    >
      {{ name }}
    </span>
  </NuxtLink>
</template>
