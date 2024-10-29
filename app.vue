<script lang="ts" setup>
import "@unocss/reset/tailwind.css";
import "~/assets/css/index.css";

useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      name: "theme-color",
      content: "#000",
    },
  ],
});

useSeoMeta({
  title: "VxGlobal | Building a Strong Management System Across the Globe",
  description: "Dealflow, business development and portfolio management",
});
</script>
<template>
  <div
    class="fixed inset-0 flex flex-col font-sans leading-loose bg-black text-white text-sm lg:text-base  lt-md:leading-relaxed md:text-lg md:leading-relaxed 2xl:text-xl  3xl:text-3xl 4xl:text-4xl xl:text-xl overflow-y-scroll overflow-x-hidden"
  >
    <NuxtPage class="overflow-y-scroll" />
  </div>
</template>
