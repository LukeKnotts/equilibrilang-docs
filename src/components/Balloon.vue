<script setup>
import { ref } from "vue";
import { defineProps } from "vue";
const props = defineProps(["image", "delay", "classes"]);

// make sure to combine special 'float' class, AND other classes that user provides
const imageClasses = ref("float".concat(" ", props.classes));
</script>

<template style="display: inline">
  <div>
    <img :src="image" :class="imageClasses" />
  </div>
</template>

<style scoped>
div {
  display: inline;
}

@keyframes bobbing {
  0% {
    top: 0px;
  }
  100% {
    top: -20px;
  }
}

.float {
  position: relative;
  animation-name: bobbing;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-delay: v-bind("delay");
}
</style>
