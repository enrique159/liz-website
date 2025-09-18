<template>
  <main class="w-screen min-h-screen">
    <MainHeader />
    <router-view />
  </main>
</template>

<script setup lang="ts">
import MainHeader from './components/MainHeader.vue';
</script>
