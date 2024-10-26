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
      class="flex lt-md:flex-col lt-md:space-y-8 lt-md:bg-stone-950 p-2 w-full lt-md:h-sm mx-auto rounded-md"
      :class="
        open ? 'lt-md:animate-slide-in-down animate-duration-100' : 'lt-md:animate-slide-in-up'
      "
    >
      <div class="flex lt-md:flex-col md:flex-1">
        <header class="flex items-center p-2 md:hidden">
          <div class="flex-1">
            <Logo
              class="w-6 h-6"
              text-class="text-base"
            />
          </div>
          <div>
            <ButtonFill
              class="px-4 py-1"
              @click="open = false"
            >
              <p class="text-black">Close</p>
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
          class="bg-stone-700 p-1 rounded border border-stone-500"
        >
          <div
            :class="social.icon"
            class="text-base"
          />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
