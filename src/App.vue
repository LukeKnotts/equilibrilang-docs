<script setup>
import SideNav from "@/components/SideNav.vue";
</script>

<template>
  <div class="everything">
    <SideNav />
    <div class="sidenav-offset">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
div.container {
  display: visible;
}
div.sidenav-offset {
  padding-left: 230px;
}
</style>
