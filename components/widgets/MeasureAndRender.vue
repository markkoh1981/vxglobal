<script lang="ts" setup>
const el = ref<HTMLDivElement | null>(null);
const debounce = ref(0);
const measurement = ref<DOMRect | null>(null);

const debounceFn = useDebounceFn(() => {
  if (el.value) measurement.value = el.value.getBoundingClientRect();
}, debounce.value);

onMounted(() => {
  if (el.value) measurement.value = el.value.getBoundingClientRect();

  window.addEventListener("resize", debounceFn);
});

onUnmounted(() => {
  window.removeEventListener("resize", debounceFn);
});
</script>
<template>
  <div ref="el">
    <slot
      v-if="measurement"
      :measurement
    />
  </div>
</template>
