<script lang="ts" setup>
defineProps({
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  fill: {
    type: String,
    default: "none",
  },
  strokeWidth: {
    type: Number,
    default: 0,
  },
  path: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <svg :viewBox="`0 0 ${width} ${height}`">
    <g
      stroke="black"
      :strokeWidth="strokeWidth"
      :fill="fill"
    >
      <path
        vectorEffect="non-scaling-stroke"
        :d="path"
      />
    </g>
  </svg>
</template>
