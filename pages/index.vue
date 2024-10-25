<script setup lang="ts">
import HomeHeroSection from "~/components/HomeHeroSection.vue";
import LayoutFooter from "~/components/LayoutFooter.vue";
import LayoutHeader from "~/components/LayoutHeader.vue";
</script>

<template>
  <main>
    <div class="relative flex flex-col overflow-x-hidden md:h-screen">
      <div class="relative flex-1 flex flex-col space-y-8 bg-spiral-and-block">
        <LayoutHeader />
        <HomeHeroSection
          class="h-sm md:h-screen"
          className="z-10"
        />
        <HomeAbout />
      </div>
      <HomeFeature />

      <div class="flex flex-col space-y-16">
        <HomeAchievement />
        <HomeClient />
        <HomePortfolio />
        <HomePartner />
      </div>
      <LayoutFooter />
    </div>
  </main>
</template>
