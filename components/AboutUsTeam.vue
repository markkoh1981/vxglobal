<script lang="ts" setup>
import { aboutUsTeams } from "~/configs/teams";
const [visible, container] = useVisible();
</script>
<template>
  <div class="relative flex flex-col bg-belt">
    <div class="flex flex-col space-y-4 xl:w-7xl xl:self-center">
      <div class="text-center">
        <h1 class="text-base font-bold">Meet Our Team</h1>
      </div>
      <div
        ref="container"
        class="lt-md:grid lt-md:grid-cols-2 flex space-x-16 items-center justify-center"
      >
        <div
          v-for="team in aboutUsTeams"
          class="flex flex-col items-center space-y-2"
          :class="{
            'odd:animate-slide-in-left even:animate-slide-in-right': visible,
          }"
        >
          <div>
            <NuxtImg
              :src="team.avatar"
              :alt="team.name"
              width="256"
              height="256"
              class="w-40"
            />
          </div>
          <div class="text-center">
            <h1 class="text-sm md:text-base font-medium">{{ team.name }}</h1>
            <p class="text-xs md:text-sm text-white/75">{{ team.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
