<template>
  <header class="container mx-auto py-6 px-4 flex justify-between items-center">
    <router-link to="/">
      <img src="@/assets/logo.png" alt="Liz" class="w-10">
    </router-link>
    <nav>
      <ul class="flex gap-4">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            {{ $t('Home') }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">
            {{ $t('About') }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
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