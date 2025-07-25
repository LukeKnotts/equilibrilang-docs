<script setup>
import { ref } from "vue";
const props = defineProps(["song", "popupText"]);

var splash = ref("splash-screen");
var music = ref("music");
var message = props.popupText;

function proceed() {
  splash.value = "hidden";
  music.value.play();
}
</script>

<template>
  <div>
    <button @click="proceed" :class="splash">
      <h2>This Page Has Sound!</h2>
      <p>Please turn on your volume and click <span class="underline">here</span class> to continue and enable audio!</p>
      <p>{{ message }}</p>
    </button>
    <audio loop class="bgm" ref="music">
      <source :src="song" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<style scoped>
.splash-screen {
  background-color: rgb(74, 74, 174);
  padding: 20px;
  position: fixed;
  width: 60%;
  top: 15%;
  left: 20%;
  border-radius: 15px;
  z-index: 100;

  color: rgb(231, 231, 231);
}

.hidden {
  display: none;
}

.underline {
  text-decoration: underline;
}
</style>
