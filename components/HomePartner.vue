<script setup lang="ts">
import { homePartners } from "~/configs/cards";
const [visible, container] = useVisible();
</script>
<template>
  <section
    class="relative flex flex-col space-y-8 px-4 md:px-8 xl:max-w-7xl xl:self-center"
  >
    <div>
      <h1 class="text-base font-bold">Partners</h1>
    </div>
    <div
      ref="container"
      :class="{ 'md:animate-slide-in-up': visible }"
      class="flex flex-col gap-y-4 overflow-x-scroll md:grid md:grid-cols-3 md:gap-4 snap-x"
    >
      <div
        v-for="partner in homePartners"
        :class="{
          'lt-md:even:animate-slide-in-right lt-md:odd:animate-slide-in-left flex flex-col':
            visible,
        }"
      >
        <CubeEffectWithBorder
          class="flex flex-col bg-stone-900 min-w-56 text-sm px-8  pt-8 pb-4 md:bg-primary md:text-black"
        >
          <div class="flex-1 flex flex-col space-y-4">
            <div class="flex-1">
              <p class="text-sm">{{ partner.name }}</p>
            </div>
            <div class="flex">
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
