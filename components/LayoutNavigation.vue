<script setup lang="ts">
import { layoutNavigations } from "~/configs/navigations";
import { layoutSocials } from "~/configs/socials";

const navigation = ref(null);
const open = useNavigation();

onClickOutside(navigation, () => (open.value = false));
</script>

<template>
  <nav
    class="flex lt-md:bg-black/20 lt-md:backdrop-blur-3xl lt-md:z-100 lt-md:p-4 md:items-center"
    :class="open ? 'lt-md:fixed lt-md:inset-0' : 'lt-md:hidden'"
  >
    <div
      ref="navigation"
      class="flex lt-md:flex-col lt-md:space-y-8 lt-md:bg-[#101010] p-2 w-full lt-md:h-sm mx-auto rounded-xl"
      :class="
        open
          ? 'lt-md:animate-slide-in-down lt-md:animate-duration-150'
          : 'lt-md:animate-slide-in-up'
      "
    >
      <div class="flex lt-md:flex-col md:flex-1">
        <header class="flex items-center p-2 md:hidden">
          <div class="flex-1">
            <Logo
              :width="32"
              :height="32"
              class="w-6 h-6 md:w-8 md:h-8 xl:w-14 xl:w-14 4xl:w-16 4xl:h-16"
              textClass="text-xl z-10 xl:text-xl 2xl:text-4xl 4xl:text-5xl"
            />
          </div>
          <div>
            <ButtonFill
              class="px-6 py-1.5"
              @click="open = false"
            >
              <p class="text-xs text-black">Close</p>
            </ButtonFill>
          </div>
        </header>
        <div
          class="flex z-10 lt-md:flex-col md:flex-1 md:items-center md:justify-center md:space-x-2"
        >
          <LayoutNavigationItem
            v-for="(navigation, index) in layoutNavigations"
            v-bind="navigation"
            :key="index"
            @click="open = false"
          />
        </div>
      </div>
      <div class="flex items-center space-x-2 px-4">
        <NuxtLink
          v-for="social in layoutSocials"
          target="_blank"
          :href="social.link"
          class="p-1.5 rounded border border-white/40 bg-white/10"
        >
          <div :class="social.icon" />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
