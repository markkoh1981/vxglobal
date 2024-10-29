<script lang="ts" setup>
const props = defineProps<{ name: string; link: string; icon?: string }>();
const route = useRoute();
const active = computed(() => route.fullPath === props.link);
</script>
<template>
  <NuxtLink
    :href="link"
    class="flex items-center space-x-2 p-4 md:py-2 hover:text-white"
    :class="active ? 'text-white' : 'text-white/75'"
  >
    <div
      v-if="active"
      class="bg-white/10 border border-white/60 rounded p-0.5"
    >
      <div
        :class="icon"
        class="bg-white/90"
      />
    </div>
    <span>
      {{ name }}
    </span>
  </NuxtLink>
</template>
