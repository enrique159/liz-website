<template>
  <main class="w-screen min-h-screen">
    <div class="container mx-auto" data-aos="fade-up">
      <HeroContainer />
      <hero-container />
    </div>
  </main>
</template>

<script setup lang="ts">
import HeroContainer from '@/components/HeroContainer.vue';
import { useTitle } from '@vueuse/core';

useTitle('Lizbeth | Digital Marketing Manager');
</script>
