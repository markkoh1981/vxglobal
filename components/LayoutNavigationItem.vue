<script lang="ts" setup>
const props = defineProps<{ name: string; link: string }>();
const route = useRoute();
const active = computed(() => route.fullPath === props.link);
</script>
<template>
  <NuxtLink
    :href="link"
    class="p-4 md:py-2 hover:text-white"
    :class="active ? 'text-white' : 'text-white/75'"
  >
    {{ name }}
  </NuxtLink>
</template>
