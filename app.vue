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
  title: "VxGlobal | Accelerating Growth in Southeast Asia",
  description: "Dealflow, business development and portfolio management",
  ogImage: "https://vxglobal.vercel.app/screenshot.png",
  twitterCard: "summary_large_image",
  ogType: "website",
  ogImageType: "image/png",
});
</script>
<template>
  <div
    class="flex flex-col font-sans leading-loose bg-black text-white text-sm lt-md:leading-relaxed md:leading-relaxed md:text-lg lg:text-xl 2xl:text-xl 3xl:text-3xl 4xl:text-4xl xl:text-xl overflow-y-scroll overflow-x-hidden"
  >
    <NuxtPage class="overflow-y-scroll" />
  </div>
</template>
