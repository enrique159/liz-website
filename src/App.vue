<template>
  <main class="w-screen min-h-screen">
    <IconoirProvider>
      <MainHeader />
      <router-view class="pt-24" />
    </IconoirProvider>
  </main>
</template>

<script setup lang="ts">
import { IconoirProvider } from '@iconoir/vue';
import MainHeader from './components/MainHeader.vue';
import Lenis from 'lenis'

const lenis = new Lenis({
  syncTouch: true
})

function raf(time: any) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
</script>
