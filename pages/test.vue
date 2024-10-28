<script lang="ts" setup>
const stroke = ref(10);
</script>
<template>
  <MeasureAndRender class="h-100 w-100 bg-red">
    <template v-slot="{ measurement: bounds }">
      <Panel
        :width="bounds.width"
        :height="bounds.height"
        :bounds
        :path="`
        M${bounds.width / 2} ${stroke} 
        H2 
        V${bounds.width / 2 - 64}
        L${bounds.width / 2 / 2 - 64} ${bounds.width/2 } 
        H${bounds.height}
        V${bounds.width / 2 / 2 - 64}
        L${bounds.width / 2} ${stroke}
        Z
      `"
        style=""
        :stroke-width="stroke"
      />
    </template>
  </MeasureAndRender>
</template>
