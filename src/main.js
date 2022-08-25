import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import pinia from './plugins/pinia'
import './styles/style.scss'
import i18n from './i18n'
// importing AOS css style globally
import '../node_modules/aos/dist/aos.css'
import '../node_modules/animate.css/animate.min.css'
import '../node_modules/magnific-popup/dist/magnific-popup.css'
import '../node_modules/vue3-loading-overlay/dist/vue3-loading-overlay.css'



loadFonts()

createApp(App)
  .use(i18n)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .mount('#app')
