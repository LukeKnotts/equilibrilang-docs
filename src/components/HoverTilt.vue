<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps([
  "image",
  "classes",
  "altText",
  "hoverText",
  "animTime",
]);

// make sure to combine special 'hoverTilt' class, AND other classes that user provides
const imageClasses = ref("hoverTilt".concat(" ", props.classes));
</script>

<template>
  <div style="display: inline">
    <img :src="image" :class="imageClasses" :alt="altText" :title="hoverText" />
  </div>
</template>

<style scoped>
.hoverTilt {
  animation-name: none;
}

@keyframes tilty {
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.hoverTilt:hover {
  animation-name: tilty;
  animation-duration: v-bind("animTime");
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
</style>
