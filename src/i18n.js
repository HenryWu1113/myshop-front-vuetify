import { createI18n } from 'vue-i18n'
// import Vue from 'vue'
// import VueI18n from 'vue-i18n'
import tw from './locales/tw.json'
import en from './locales/en.json'
import jp from './locales/jp.json'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
// function loadLocaleMessages() {
//   const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//   const messages = {}
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       messages[locale] = locales(key).default
//     }
//   })
//   return messages
// }

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'tw',
  messages: {
    tw,
    en,
    jp
  }
  // fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'cn'
  // messages: loadLocaleMessages()
})

// Vue.use(VueI18n)

// const locale = localStorage.getItem('locale') || 'tw'

// const i18n = new VueI18n({
//   locale,
//   messages: { en, tw, jp }
// })

export default i18n

// export default createI18n({
//   locale: process.env.VUE_APP_I18N_LOCALE || 'en',
//   fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
//   messages: loadLocaleMessages()
// })
