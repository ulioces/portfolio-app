<script setup lang="ts">
import ParticlesBackground from './ParticlesBackground.vue'
</script>
<template>
  <div class="section">
    <ParticlesBackground />
    <div class="my-photo"></div>
    <span class="hi"> </span>
    <span class="description"> </span>
    <div class="linkid"></div>
    <div class="go-back"></div>
  </div>
</template>
<style scoped>
.section {
  height: 100dvh;
  width: 100%;
  background-color: #272b33;
}
</style>
