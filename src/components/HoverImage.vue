<script setup>
import { ref } from "vue";

defineProps([
  "mainImage",
  "mainImageClasses",
  "mainImageAlt",
  "mainImageTitle",
  "hoverImage",
  "hoverImageClasses",
  "hoverImageAlt",
  "hoverImageTitle",
]);

var mainClass = ref("normal");
var hoverClass = ref("hidden");

function onHover() {
  mainClass.value = "hidden";
  hoverClass.value = "normal";
}

function offHover() {
  mainClass.value = "normal";
  hoverClass.value = "hidden";
}
</script>

<template>
  <div :class="mainClass" @mouseenter="onHover()">
    <img
      :src="mainImage"
      :class="mainImageClasses"
      :alt="mainImageAlt"
      :title="mainImageTitle"
    />
  </div>
  <div :class="hoverClass" @mouseleave="offHover()">
    <img
      :src="hoverImage"
      :class="hoverImageClasses"
      :alt="hoverImageAlt"
      :title="hoverImageTitle"
    />
  </div>
</template>

<style scoped>
.normal {
  display: visible;
}
.hidden {
  display: none;
}
</style>
