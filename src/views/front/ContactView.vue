<template>
  <div id="contact_view">
    <!-- <img class="contact_img"
      src="https://img.freepik.com/premium-photo/happy-new-year-number-made-fruits-berries_88281-5412.jpg?w=1380"> -->
    <v-parallax class="mb-15" src="https://shoplineimg.com/60e7f216ed3d3c0024770f58/610d117bbbb7ce0026b0af3b/800x.jpg?"
      cover height="600">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1
          class="mb-4 pt-6 pb-6 ps-6 pe-6 font-weight-bold contact_bg w-100 text-center animate__animated animate__backInLeft">
          {{ $t('contact') }}
        </h1>
      </div>
    </v-parallax>
    <div class="MyContainer">
      <v-row class="mt-7" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150">
        <v-col cols="12" lg="4">
          <a href="tel:0910968708">
            <div class="contact_box1">
              <v-icon class="contact_icon" icon="mdi-phone"></v-icon>
              <h1 class="">{{ $t('phone') }}</h1>
              <span class="">0911222333</span>
              <!-- <span class="">0910968708</span> -->
            </div>
          </a>
        </v-col>
        <v-col cols="12" lg="4">
          <div class="contact_box2" @click="dialog = true">
            <v-icon class="contact_icon" icon="mdi-chat-outline"></v-icon>
            <h1 class="">Line</h1>
            <span class="">id : goodtoeat123</span>
            <!-- <span class="">id : wlsfarm</span> -->
          </div>
        </v-col>
        <v-col cols="12" lg="4">
          <a href="mailto:service@wlsfarm.com.tw">
            <div class="contact_box3">
              <v-icon class="contact_icon" icon="mdi-email-outline"></v-icon>
              <h1 class="">{{ $t('mail') }}</h1>
              <span class="">aaaa@gmail.com</span>
              <!-- <span class="">service@wlsfarm.com.tw</span> -->
            </div>
          </a>
        </v-col>
      </v-row>
    </div>

    <div class="MyContainer">
      <v-row>
        <v-col class="text-center mt-10" cols="12">
          <h1 class="contact_message text-brown font-weight-bold" data-aos="fade-down" data-aos-duration="1000"
            data-aos-offset="150" data-aos-once="true">{{ $t('message') }}</h1>
          <span class="text-brown" data-aos="fade" data-aos-duration="1000" data-aos-offset="150"
            data-aos-once="true">{{ $t('messagehint') }}</span>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-form v-model="valid" @submit.prevent="submitComment">
            <v-textarea v-model="form.comment" name="回饋訊息" label="回饋訊息" counter maxlength="500" placeholder="輸入訊息"
              variant="outlined" prepend-inner-icon="mdi-comment" clearable>
            </v-textarea>
            <div class="contact_btn_group">
              <!-- <v-btn variant="text" color="error" type="reset">重填</v-btn> -->
              <v-btn variant="outlined" color="orange" type="submit" :loading="loading" :disabled="!cansend">{{
                  $t('send')
              }}</v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-text>
          <img src="../../assets/QR.png" style="width: 100%;max-width:300px;">
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
  <FooterPart></FooterPart>
</template>

<style scoped lang="scss">
</style>

<script setup>
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { ref, reactive, computed, onMounted } from 'vue'
import FooterPart from '@/components/FooterPart.vue'
import AOS from "aos"
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import i18n from '@/i18n'

onMounted(() => {
  AOS.init();
})

const user = useUserStore()
const { isLogin } = storeToRefs(user)

const valid = ref(false)
const dialog = ref(false)
const loading = ref(false)

const form = reactive({
  comment: ''
})

const cansend = computed(() => {
  return form.comment.length > 0
})

const submitComment = async () => {
  if (!valid.value) return
  try {
    loading.value = true
    await apiAuth.post('/feedbacks', form)

    if (i18n.global.locale === 'tw') {
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '訊息已傳送'
      })
    } else if (i18n.global.locale === 'en') {
      Swal.fire({
        icon: 'success',
        title: 'SUCCESS',
        text: 'message sent successfully'
      })
    } else {
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: 'メッセージを送信しました'
      })
    }
    loading.value = false
    form.comment = ''
  } catch (error) {

    if (i18n.global.locale === 'tw') {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: '送出訊息失敗'
      })
    } else if (i18n.global.locale === 'en') {
      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text: 'Failed to send message'
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: 'メッセージを送信できませんでした'
      })
    }
    loading.value = false
  }
}
</script>