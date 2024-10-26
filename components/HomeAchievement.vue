<script lang="ts" setup>
const [visible, container] = useVisible();
</script>
<template>
  <div
    ref="container"
    class="relative flex bg-gradient overflow-y-hidden bg-pink"
  >
    <div
      class="flex-1 flex flex-col space-y-2 px-4 pr-8 py-8 md:px-8 xl:max-w-7xl xl:m-auto"
    >
      <div>
        <h1 class="text-base font-bold md:text-lg md:text-xl">Achievements</h1>
      </div>
      <div class="border-t border-l px-4 pt-2 md:max-w-md">
        <p
          :class="visible ? 'animate-slide-in-up visible' : 'invisible'"
          class="text-xs !leading-relaxed md:text-sm"
        >
          VX GLOBAL has made positive impact for its clients and
          <br class="lt-md:hidden" />
          partners Including 3 exits by acquisition.
        </p>
      </div>
    </div>
    <div
      :class="visible ? 'animate-slide-in-right visible' : 'invisible'"
      class="absolute right-0"
    >
      <NuxtImg
        src="/illustrations/il_galaxy.png"
        alt="galaxy"
        width="256"
        height="256"
        class="lt-md:h-36"
      />
    </div>
  </div>
</template>
