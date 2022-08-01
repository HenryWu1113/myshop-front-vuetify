import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import pinia from './plugins/pinia'
import './styles/style.scss'
import i18n from './i18n'

loadFonts()

createApp(App)
  .use(i18n)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .mount('#app')
