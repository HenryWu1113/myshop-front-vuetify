<template>
  <div id="FrontNavbar">
    <v-app-bar height="100" color="amber">
      <v-spacer class="d-lg-none"></v-spacer>
      <v-btn icon class="d-lg-none" @click="dialog = true">
        <v-icon icon="mdi-format-list-bulleted" class="icon text-white"></v-icon>
      </v-btn>

      <v-dialog v-model="dialog" fullscreen transition="dialog-top-transition">
        <v-card>
          <v-card-title class="d-flex">
            <v-spacer></v-spacer>
            <v-btn icon dark @click="dialog = false">
              <v-icon icon="mdi-arrow-expand-up"></v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="text-center">
            <div class="self-info" v-if="isLogin">
              <img class="MyAvatar_menu mb-2" :src="avatar">
              <h3 class="text-center text-h3 text-white bg-black">{{ nickname }}</h3>
            </div>
            <v-btn block size="x-large" color="warning" class="btn" to="/" @click="dialog = false">{{ $t('home') }}
            </v-btn>
            <v-divider></v-divider>
            <v-btn block size="x-large" color="warning" class="btn" to="/brand" @click="dialog = false">{{ $t('brand')
            }}</v-btn>
            <v-divider></v-divider>
            <v-btn block size="x-large" color="warning" class="btn" to="/why" @click="dialog = false">{{ $t('why') }}
            </v-btn>
            <v-divider></v-divider>
            <v-btn block size="x-large" color="warning" class="btn" to="/news" @click="dialog = false">{{ $t('news') }}
            </v-btn>
            <v-divider></v-divider>
            <v-btn block size="x-large" color="warning" class="btn" to="/contact" @click="dialog = false">{{
                $t('contact')
            }}</v-btn>
            <div class="btn_group">


              <v-btn v-if="isAdmin && isLogin" icon to="/admin" class="mr-3" @click="dialog = false">
                <v-icon color="orange" icon="mdi-fingerprint" class="icon"></v-icon>
              </v-btn>
              <v-btn icon to="/likes" class="mr-3" @click="dialog = false">
                <v-icon color="orange" icon="mdi-heart-outline" class="icon"></v-icon>
              </v-btn>
              <v-btn icon to="/cart" class="mr-3" @click="dialog = false">
                <v-badge class="badge" color="amber-darken-4" v-if='cart > 0'>
                  <v-icon color="orange" icon="mdi-cart-check" class="icon"></v-icon>
                </v-badge>
                <v-icon color="orange" v-if='cart === 0' icon="mdi-cart-check" class="icon"></v-icon>
              </v-btn>
              <v-menu transition="scale-transition" location="bottom" open-on-hover>
                <template v-slot:activator="{ props }">
                  <v-btn icon v-bind="props" class="mr-2">
                    <v-icon color="orange" icon="mdi-earth" class="icon"></v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(language, idx) in languages" :key="idx" :value="language" rounded="xl"
                    active-color="primary" variant="plain" :title="language" @click="setLang(language)">
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-btn v-if="!isLogin" icon to="/login" @click="dialog = false">
                <v-icon color="orange" icon="mdi-login-variant" class="icon"></v-icon>
              </v-btn>
              <v-menu transition="scale-transition" location="bottom" v-if="isLogin">
                <template v-slot:activator="{ props }">
                  <v-btn icon v-bind="props">
                    <v-icon color="orange" icon="mdi-account-outline" class="icon"></v-icon>
                  </v-btn>
                </template>
                <v-list class="userlist">
                  <v-list-item v-for="(list, i) in lists" :key="i" :value="list" rounded="xl" :to="list.to"
                    active-color="orange" variant="plain" @click="dialog = false">
                    <template v-slot:prepend>
                      <v-icon :icon="list.icon"></v-icon>
                    </template>
                    <v-list-item-title v-text="list.text"></v-list-item-title>
                  </v-list-item>
                  <v-list-item rounded="xl" :value="logoutinfo" @click="logout" variant="plain">
                    <template v-slot:prepend>
                      <v-icon :icon="logoutinfo.icon"></v-icon>
                    </template>
                    <v-list-item-title v-text="logoutinfo.text"></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>

      <div class="title align-center d-flex" @click="router.push('/')">
        <!-- <img class="logo" src="../../assets/Logo.png"> -->
        <h1 class="ms-2 text-white">{{ $t('wuleefarm') }}</h1>???<h3 class="text-white d-none d-sm-block">{{
            $t('titleslogan')
        }}</h3>
      </div>
      <div class="page-group d-none d-lg-flex text-white">
        <v-btn class="btn" to="/">{{ $t('home') }}</v-btn>
        <v-btn class="btn" to="/brand">{{ $t('brand') }}</v-btn>
        <v-btn class="btn" to="/why">{{ $t('why') }}</v-btn>
        <v-btn class="btn" to="/news">{{ $t('news') }}</v-btn>
        <v-btn class="btn" to="/contact">{{ $t('contact') }}</v-btn>
      </div>
      <div class="bar-list-right-group d-none d-lg-flex">
        <!-- <v-select v-model="language" :items="languages" variant="outlined" @onchange="setLang">
        </v-select> -->
        <!-- <v-btn icon @click="$i18n.locale = 'en'" class="mr-5">
          <v-icon icon="mdi-fingerprint" class="icon"></v-icon>
        </v-btn> -->
        <v-btn v-if="isAdmin && isLogin" icon to="/admin" class="mr-3">
          <v-icon icon="mdi-fingerprint" class="icon text-white"></v-icon>
        </v-btn>
        <v-btn icon to="/likes" class="mr-3">
          <v-icon icon="mdi-heart-outline" class="icon text-white"></v-icon>
        </v-btn>
        <v-btn icon to="/cart" class="mr-3">
          <v-badge class="badge" color="amber-darken-4" v-if='cart > 0'>
            <v-icon icon="mdi-cart-check" class="icon text-white"></v-icon>
          </v-badge>
          <v-icon v-if='cart === 0' icon="mdi-cart-check" class="icon text-white"></v-icon>
        </v-btn>

        <v-menu transition="scale-transition" location="bottom" open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props" class="mr-2">
              <v-icon icon="mdi-earth" class="icon text-white"></v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(language, idx) in languages" :key="idx" :value="language" rounded="xl"
              active-color="amber" variant="plain" :title="language" @click="setLang(language)">
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn v-if="!isLogin" icon to="/login">
          <v-icon icon="mdi-login-variant" class="icon text-white"></v-icon>
        </v-btn>
        <v-menu transition="scale-transition" location="bottom" v-if="isLogin">
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-icon icon="mdi-account-outline" class="icon text-white"></v-icon>
            </v-btn>
          </template>
          <v-list class="userlist">
            <v-list-item class="d-flex flex-column">
              <img class="MyAvatar" :src="avatar">
              <h3 class="text-center text-brown">{{ nickname }}</h3>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item v-for="(list, i) in lists" :key="i" :value="list" rounded="xl" :to="list.to"
              active-color="orange" variant="plain">
              <template v-slot:prepend>
                <v-icon :icon="list.icon"></v-icon>
              </template>
              <v-list-item-title v-text="list.text"></v-list-item-title>
            </v-list-item>
            <v-list-item rounded="xl" :value="logoutinfo" @click="logout" variant="plain">
              <template v-slot:prepend>
                <v-icon :icon="logoutinfo.icon"></v-icon>
              </template>
              <v-list-item-title v-text="logoutinfo.text"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

    </v-app-bar>
  </div>

  <v-main>
    <router-view></router-view>

  </v-main>
</template>

<style scoped lang="scss">
.v-app-bar {
  position: relative;
}

.btn {
  font-size: 20px;
  font-weight: 700;
}

.logo {
  width: 75px;
}

.icon {
  font-size: 2.5rem;
  // color: white;
}

.title {
  cursor: pointer;
  position: absolute;
  left: 0;
}

.userlist {
  padding: 0 2rem;
}

.self-info {
  margin: auto;
  width: 300px;
  border-radius: 30px;
  border: 1px solid lightgrey;
  background: linear-gradient(white 80%, lightgrey 20%) repeat-y left top/100% 20px;
  margin-bottom: 1rem;
  padding-top: 1rem;
  // border: 2px solid #f1cc87;
}

.MyAvatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  // border: 1px solid #000;
  object-fit: cover;
}

.MyAvatar_menu {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 3px solid lightgrey;
  object-fit: cover;
}

.page-group {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.bar-list-right-group {
  position: absolute;
  right: 0;
}
</style>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { ref, reactive, watch, onMounted } from 'vue'
import router from '@/router'
import i18n from '../../i18n'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin, cart, avatar, nickname } = storeToRefs(user)

const dialog = ref(false)
// const language = ref('??????')
const languages = reactive(['??????', 'English', '?????????'])
const lists = reactive([
  {
    text: '',
    icon: 'mdi-newspaper-variant-outline',
    to: '/userinfo'
  },
  {
    text: '',
    icon: 'mdi-format-list-bulleted',
    to: '/order'
  }
])

const logoutinfo = reactive({
  text: '',
  icon: 'mdi-logout-variant'
})

const setLang = (newLang) => {
  // this.$i18n.locale = 'en'
  // localStorage.setItem('locale', 'en')
  if (newLang === '??????') {
    i18n.global.locale = 'tw'
    lists[0].text = '????????????'
    lists[1].text = '????????????'
    logoutinfo.text = '??????'
    localStorage.setItem('locale', 'tw')
  } else if (newLang === 'English') {
    i18n.global.locale = 'en'
    lists[0].text = 'Personal Information'
    lists[1].text = 'Order Record'
    logoutinfo.text = 'Log out'
    localStorage.setItem('locale', 'en')
  } else {
    i18n.global.locale = 'jp'
    lists[0].text = '????????????'
    lists[1].text = '????????????'
    logoutinfo.text = '??????????????????'
    localStorage.setItem('locale', 'jp')
  }
}

// onMounted(() => {
//   gsap.from('.v-toolbar', {
//     yPercent: -100,
//     duration: 0.1,
//     scrollTrigger: {
//       // ?????? trigger ??????????????????????????????????????????
//       start: 'top 60',
//       end: () => '+=' + document.documentElement.scrollHeight, // end ?????????????????????
//       onEnter(self) {
//         // console.log(self)
//         self.animation.play()
//       },
//       onUpdate(self) {
//         // console.log(self.direction)
//         self.direction === -1 ? self.animation.play() : self.animation.reverse() // -1 ?????????????????????????????? 1 ?????????????????????
//       },
//       // markers: true
//     }
//   })
// })

// const changeLang = (idx) => {
//   if (idx === 0) return 'tw'
//   else if (idx === 1) return 'en'
//   else return 'jp'
// }

// const changeLang = (idx) => {
//   if (idx === 0) i18n.global.locale = 'tw'
//   else if (idx === 1) i18n.global.locale = 'en'
//   else i18n.global.locale = 'jp'
// }

const init = () => {
  if (i18n.global.locale === 'tw') {
    lists[0].text = '????????????'
    lists[1].text = '????????????'
    logoutinfo.text = '??????'
  } else if (i18n.global.locale === 'en') {
    lists[0].text = 'Personal Information'
    lists[1].text = 'Order Record'
    logoutinfo.text = 'Log out'
  } else {
    lists[0].text = '????????????'
    lists[1].text = '????????????'
    logoutinfo.text = '??????????????????'
  }
}

init()
</script>