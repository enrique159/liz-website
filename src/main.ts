import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1000,
})

const i18n = createI18n({
  locale: 'es',
  legacy: false,
  fallbackLocale: 'es',
  messages: {
    en,
    es,
  },
})
const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
