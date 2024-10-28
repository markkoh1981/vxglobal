<script lang="ts" setup>
import { aboutUsTeams } from "~/configs/teams";
const [visible, container] = useVisible();
</script>
<template>
  <div class="relative flex flex-col bg-belt">
    <div class="flex flex-col space-y-16 xl:w-7xl xl:self-center">
      <div class="text-center">
        <h1 class="text-base font-bold">Meet Our Team</h1>
      </div>
      <div
        ref="container"
        class="lt-md:grid lt-md:grid-cols-2 flex space-x-16 items-center justify-center"
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
              class="w-40"
            />
          </div>
          <div class="flex flex-col space-y-2 text-center">
            <h1 class="lt-md:text-xs font-medium">{{ team.name }}</h1>
            <p class="text-[12px] md:text-base text-white/75">{{ team.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
