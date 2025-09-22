<template>
  <header
    class="fixed z-50 backdrop-blur-[4px] border border-background bg-background/50 transition-all duration-300"
    :class="[
      isTop
        ? 'top-0 w-full left-0 px-16'
        : 'top-8 w-[360px] mx-auto left-1/2 -translate-x-1/2 border border-gray-600/20 px-6 rounded-full',
    ]"
  >
    <div class="flex justify-between items-center py-6">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="Liz" class="hover:scale-95 transition-all duration-300" :class="isTop ? 'w-10' : 'w-8'" />
      </router-link>
      <nav>
        <ul class="flex gap-3 text-sm">
          <li class="nav-item">
            <router-link to="#about" class="nav-link">
              {{ $t('header.about') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="#experience" class="nav-link">
              {{ $t('header.experience') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="#contact" class="nav-link">
              {{ $t('header.contact') }}
            </router-link>
          </li>
          <li class="nav-item">
            <LocaleSwitcher class="nav-link" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import LocaleSwitcher from './LocaleSwitcher.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const scrollY = ref(0)

const isTop = computed(() => {
  return scrollY.value < 80
})

onMounted(() => {
  document.addEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })
})

onUnmounted(() => {
  document.removeEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })
})
</script>

<style scoped>
.nav-item {
  position: relative;
}

.nav-link {
  position: relative;
  padding-bottom: 2px;
  text-decoration: none;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #000;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
