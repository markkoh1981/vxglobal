<template>
  <button class="box flex items-center justify-center">
    <slot />
  </button>
</template>
<style scoped>
.box {
  background: url(~/assets/icons/ic_button_outline_fill.svg) no-repeat;
  background-size: 100% 100%;
}
</style>
