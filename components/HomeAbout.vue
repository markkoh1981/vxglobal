<script lang="ts" setup>
const [visible, container] = useVisible();
</script>
<template>
  <div
    ref="container"
    class="relative flex flex-col lt-md:pb-24 md:relative md:py-24"
  >
    <div
      :class="{'animate-slide-in-left': visible}"
      class="flex flex-col space-y-4 z-10 px-4 lt-xl:max-w-sm lt-xl:max-w-md md:px-8 md:space-y-4 xl:w-7xl xl:self-center"
    >
      <div>
        <p class="text-lg">
          Founded in 2011, we began as a distribution company.
        </p>
        <p
          class="lt-md:max-w-56 text-xs text-white/75 md:max-w-sm md:text-base"
        >
          The company has since grown with its primary business pivoting to Fund
          services and portfolio management, it is also involved in the
          acceleration of startups across Southeast Asia.
        </p>
      </div>
      <div class="self-start flex flex-col">
        <ButtonOutline class="px-4 py-2">
          <p class="text-white/70">Read more</p>
        </ButtonOutline>
      </div>
    </div>
  </div>
</template>
