<script setup>
import { useRouter } from "vue-router";
defineProps(["linkText"]);

const router = useRouter();

function goBack() {
  router.go(-1);
}
</script>

<template>
  <div>
    <p class="fakelink" @click="goBack()"><== {{ linkText }}.</p>
  </div>
</template>

<style scoped>
.fakelink {
  font-size: 18px;
  text-decoration: underline;
  color: rgb(78, 30, 134);
}
.fakelink:hover {
  color: blue;
  cursor: pointer;
}
</style>
