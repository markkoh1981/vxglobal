<script lang="ts" setup>
import { aboutUsTeams } from "~/configs/teams";
const [visible, container] = useVisible();
</script>
<template>
  <div class="relative flex flex-col bg-belt">
    <div class="flex flex-col space-y-8 md:space-y-16 2xl:w-9/10 2xl:self-center">
      <div class="text-center">
        <h1 class="lt-md:text-xl !font-[Clash+Display] font-bold">Meet Our Founder and Team</h1>
      </div>
      <div
        ref="container"
        class="flex space-x-16 items-center justify-center"
      >
        <div
          v-for="team in aboutUsTeams"
          class="flex flex-col items-center space-y-4"
          :class="
            visible
              ? 'odd:animate-slide-in-left even:animate-slide-in-right visible'
              : 'invisible'
          "
        >
          <div>
            <NuxtImg
              :src="team.avatar"
              :alt="team.name"
              width="256"
              height="256"
              fit="inside"
              class="w-40 xl:w-64"
            />
          </div>
          <div class="flex flex-col md:space-y-2 text-center">
            <h1 class="font-medium">{{ team.name }}</h1>
            <p class="text-[12px] md:text-base text-white/75 xl:text-2xl">{{ team.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
