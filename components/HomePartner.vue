<script setup lang="ts">
import { homePartners } from "~/configs/cards";
const [visible, container] = useVisible();
</script>
<template>
  <section
    ref="container"
    :class="visible ? 'md:animate-slide-in-up md:visible' : 'md:invisible'"
    class="relative flex flex-col space-y-8 px-4 overflow-y-hidden md:px-8 xl:max-w-7xl xl:self-center"
  >
    <div>
      <h1 class="text-base font-bold">Partners</h1>
    </div>
    <div
      class="flex flex-col gap-y-4 overflow-x-scroll bg-small-parallelogram md:grid md:grid-cols-3 md:gap-8 snap-x"
    >
      <div
      v-for="partner in homePartners"

        :class="
          visible
            ? 'lt-md:even:animate-slide-in-right lt-md:odd:animate-slide-in-left lt-md:visible'
            : 'lt-md:invisible'
        "
      >
        <CubeEffectWithBorder
          class="flex flex-col text-sm p-4 lt-md:py-8 h-[9em] bg-stone-900 text-white md:bg-primary md:text-black"
        >
          <div class="flex-1 flex flex-col space-y-4">
            <div class="md:py-4">
              <p class="text-sm leading-tight">{{ partner.name }}</p>
            </div>
            <div class="flex-1 flex flex-col items-end justify-end px-4">
              <NuxtLink
                :href="partner.link"
                target="_blank"
                class="text-xs ml-auto"
              >
                {{
                  partner.link.replaceAll("https://", "").replaceAll("/", "")
                }}
              </NuxtLink>
            </div>
          </div>
        </CubeEffectWithBorder>
      </div>
    </div>
  </section>
</template>
