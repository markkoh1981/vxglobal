<script setup lang="ts">
import { homePartners } from "~/configs/cards";
const [visible, container] = useVisible();
</script>
<template>
  <section
    ref="container"
    :class="visible ? 'md:animate-slide-in-up md:visible' : 'md:invisible'"
    class="relative flex flex-col space-y-8 lt-md:px-2 overflow-y-hidden 2xl:w-9/10 2xl:self-center"
  >
    <div class="md:px-8 lg:px-16 2xl:px-0">
      <h1 class="text-base font-bold md:text-lg xl:text-2xl">Partners</h1>
    </div>
    <div
      class="flex flex-col gap-y-4 overflow-x-scroll bg-small-parallelogram snap-x overflow-y-hidden md:px-8 lg:px-16 md:flex-row md:gap-x-8 2xl:px-0 xl:grid xl:grid-cols-3"
    >
      <CubeEffect
        v-for="(partner, index) in homePartners"
        :class="
          visible
            ? 'lt-md:even:animate-slide-in-right lt-md:odd:animate-slide-in-left lt-md:visible'
            : 'lt-md:invisible'
        "
        class="flex flex-col space-y-4 p-8 md:h-50 md:text-black md:min-w-sm 2xl:min-w-sm"
      >
        <div class="flex-1 flex items-center justify-center space-x-2">
          <NuxtImg
            :src="partner.logo"
            :alt="partner.name"
            width="48"
            height="48"
            fit="inside"
          />
          <p
            class="flex-1 llt-md:leading-relaxed lt-md:text-sm md:text-base lg:text-xl 3xl:text-2xl leading-loose"
            v-html="partner.name"
          />
        </div>
        <NuxtLink
          :href="partner.link"
          target="_blank"
          class="lt-md:text-xs md:text-base 2xl:text-xl 4xl:text-2xl ml-auto"
          :class="index === homePartners.length - 1 ? 'xl:px-16' : ''"
        >
          {{ partner.link.replaceAll("https://", "").replaceAll("/", "") }}
        </NuxtLink>
      </CubeEffect>
    </div>
  </section>
</template>
<style scoped>
.box {
  --mask: url(/illustrations/il_xs_outline_parallelogram.png);
}

@screen md {
  .box {
    --mask: url(/illustrations/il_xs_parallelogram.png);
  }
}
</style>
