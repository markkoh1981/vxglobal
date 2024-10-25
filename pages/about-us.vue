<template>
  <main class="relative flex flex-col space-y-8 overflow-x-hidden overflow-y-scroll bg-gradient-2">
    <LayoutHeader />
    <div class="flex flex-col space-y-8">
      <AboutUs />
      <div class="relative flex items-center p-8 xl:w-[90%] xl:self-end">
        <img
          src="~/assets/illustrations/il_build_together.svg"
          class="h-24 animate-spin animate-duration-[60s]"
        />
        <NuxtImg
          src="/illustrations/il_coins.png"
          class="absolute right-0 lt-md:w-full md:w-xl"
        />
      </div>
      <AboutUsPurpose />
      <AboutUsTeam />
    </div>
    <LayoutFooter class="xl:w-7xl xl:self-center" />
  </main>
</template>
