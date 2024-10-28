\
<template>
  <main
    class="relative flex flex-col space-y-8 overflow-x-hidden overflow-y-scroll bg-gradient-2"
  >
    <LayoutHeader />
    <div class="flex flex-col space-y-8 md:space-y-16 z-10">
      <AboutUs />
      <div class="relative flex items-center px-4 py-8 md:px-8 lg:px-16 w-full 2xl:px-0 2xl:w-9/10 2xl:self-center">
        <TextRotateJunk />
        <NuxtImg
          src="/illustrations/il_coins.png"
          width="256"
          height="256"
          fit="inside"
          alt="Coins"
          class="absolute right-0 md:w-1/2 xl:w-2/5 object-contain"
        />
      </div>
      <AboutUsPurpose />
      <AboutUsTeam />
    </div>
    <LayoutFooter />
  </main>
</template>
