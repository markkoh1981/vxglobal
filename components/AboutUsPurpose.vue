<script lang="ts" setup>
const [visible, container] = useVisible();
</script>
<template>
  <div
    ref="container"
    class="flex flex"
  >
    <div
      :class="visible ? 'animate-slide-in-left visible' : 'invisible'"
      class="flex-1 bg-diamond lt-md:hidden"
    />
    <div
      :class="visible ? 'animate-slide-in-right visible' : 'invisible'"
      class="flex xl:w-5xl"
    >
      <div class="ml-auto flex flex-col space-y-2 px-4 md:px-8 md:py-16">
        <div>
          <h1 class="font-[Clash+Display] text-base font-bold">Purpose</h1>
        </div>
        <p class="text-white/75 text-xs !leading-relaxed  md:text-sm md:max-w-lg">
          VX GLOBAL is a holding entity for its own portfolio investments. Its
          key services includesxcels management consultancy, providing tailored
          solutions for market entry, capital sourcing and deployment for funds,
          dealflow and operational strategies. We are committed to investing in
          innovative startups with regional relevance in ASEAN (particularly
          Singapore, Thailand, Vietnam, Indonesia, Malaysia and Cambodia) and
          CEE (Central and Eastern Europe). Acting as a bridge, VX GLOBAL
          accelerates value by connecting high-level decision-makers and
          influential figures across these territories. <br />
          <br />
          Our comprehensive approach, positions us as a formidable partner for
          funds, particularly from the CEE region looking to onshore their
          portfolio companies for growth into the thriving Southeast Asian
          Markets.
        </p>
      </div>
    </div>
  </div>
</template>
