<template>
  <div class="flex items-center gap-2 cursor-pointer" @click="toggleLocale">
    <span>{{ currentLocale?.code }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const availableLocales = ref([
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸'
  },
  {
    code: 'es',
    name: 'Spanish',
    flag: '🇲🇽'
  }
])

const currentLocale = computed(() => {
  return availableLocales.value.find((option) => option.code === locale.value)
})

function toggleLocale() {
  changeLocale(locale.value === 'en' ? 'es' : 'en')
}

onBeforeMount(() => {
  const savedLocale = localStorage.getItem('userLocale')
  if (
    savedLocale &&
    availableLocales.value.some(avLocale => avLocale.code === savedLocale)
  ) {
    locale.value = savedLocale
  } else {
    const userLocale = navigator.language.split('-')[0] || 'en'
    if (availableLocales.value.some(avLocale => avLocale.code === userLocale)) {
      changeLocale(userLocale)
    }
  } 
})

function changeLocale(value: string) {
  locale.value = value
  localStorage.setItem('userLocale', value)
}
</script>
