<script lang="ts" setup>
const open = useNavigation();
const [visible, container] = useVisible();
</script>
<template>
  <header
    ref="container"
    :class="visible ?  'animate-slide-in-down visible' : 'invisible'"
    class="flex items-center py-4 mx-2 md:mx-4 md:py-6 md:mx-8 lg:mx-16 2xl:w-9/10 2xl:self-center"
  >
    <div class="z-10">
      <div class="absolute w-64 h-24 -top-4  bottom-0 bg-black blur-2xl" />
      <Logo
        :width="32"
        :height="32"
        class="w-6 h-6 md:w-8 md:h-8 xl:w-14 xl:w-14 4xl:w-16 4xl:h-16"
        textClass="text-xl z-10 xl:text-xl 2xl:text-4xl 4xl:text-5xl"
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
