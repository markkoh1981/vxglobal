\
<template>
  <main
    class="relative flex flex-col space-y-8 overflow-x-hidden overflow-y-scroll bg-gradient-2"
  >
    <LayoutHeader />
    <div class="flex flex-col space-y-8 z-10">
      <AboutUs />
      <div class="relative flex items-center px-4 py-8 xl:w-[90%] xl:self-end">
        <TextRotateJunk />
        <NuxtImg
          src="/illustrations/il_coins.png"
          width="256"
          height="256"
          fit="inside"
          class="absolute right-0 w-1/2 w-1/2 object-contain"
        />
      </div>
      <AboutUsPurpose />
      <AboutUsTeam />
    </div>
    <LayoutFooter class="xl:w-7xl xl:self-center" />
  </main>
</template>
