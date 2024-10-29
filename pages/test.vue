<template>
  <div class="relative bg-amber">
    <div class="w-2xl h-48">
      hsh
    </div>
    <div class="absolute inset-0 box bg-red text-white rounded-b-xl">sksk</div>
  </div>
</template>
<style scoped>
.box {
  --box-size: 24px;
  mask: linear-gradient(45deg, transparent var(--box-size), black 0) bottom,
    linear-gradient(-135deg, transparent var(--box-size), black 0) right;
  mask-size: 100% 50%;
  mask-repeat: no-repeat;
}
</style>
