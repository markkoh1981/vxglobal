<script lang="ts" setup>
const open = useNavigation();
const [visible, container] = useVisible();
</script>
<template>
  <header
    ref="container"
    :class="{ 'animate-slide-in-down': visible }"
    class="flex items-center bg-gradient-to-r from-black/5 to-black px-4 py-2 md:px-8 xl:w-7xl xl:self-center"
  >
    <div class="z-10">
      <div class="absolute w-56 h-32 top-0 bottom-0 bg-black blur-xl" />
      <Logo
        :width="32"
        :height="32"
        class="w-6 h-6 xl:w-12 xl:h-12"
        textClass="text-xl md:text-2xl z-10"
      />
    </div>
    <LayoutNavigation class="md:flex-1" />
    <div class="lt-md:flex-1 lt-md:flex lt-md:items-center lt-md:justify-end">
      <button class="md:hidden">
        <div
          class="i-mdi:menu text-xl"
          @click="open = true"
        />
      </button>
    </div>
  </header>
</template>
