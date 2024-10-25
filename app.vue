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
      content: "#000"
    }
  ],
});

useSeoMeta({
  title: "VxGlobal | Building a Strong Management System Across the Globe",
  description:
    "Dealflow, business development and portfolio management",
});
</script>
<template>
  <div
    class="fixed inset-0 flex flex-col font-sans bg-black text-white lt-md:text-xs md:text-sm overflow-y-scroll overflow-x-hidden"
  >
    <NuxtPage class="overflow-y-scroll"/>
  </div>
</template>
