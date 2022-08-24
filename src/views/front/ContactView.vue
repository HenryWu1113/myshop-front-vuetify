<template>
  <div id="contact_view">
    <!-- <img class="contact_img"
      src="https://img.freepik.com/premium-photo/happy-new-year-number-made-fruits-berries_88281-5412.jpg?w=1380"> -->
    <v-parallax class="mb-15" src="https://shoplineimg.com/60e7f216ed3d3c0024770f58/610d117bbbb7ce0026b0af3b/800x.jpg?"
      cover height="600">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1
          class="text-h1 mb-4 pt-6 pb-6 ps-6 pe-6 font-weight-bold contact_bg w-100 text-center animate__animated animate__flip">
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
              <h1 class="">電話</h1>
              <span class="">0910968708</span>
            </div>
          </a>
        </v-col>
        <v-col cols="12" lg="4">
          <div class="contact_box2" @click="dialog = true">
            <v-icon class="contact_icon" icon="mdi-chat-outline"></v-icon>
            <h1 class="">Line</h1>
            <span class="">id : wlsfarm</span>
          </div>
        </v-col>
        <v-col cols="12" lg="4">
          <a href="mailto:service@wlsfarm.com.tw">
            <div class="contact_box3">
              <v-icon class="contact_icon" icon="mdi-email-outline"></v-icon>
              <h1 class="">信箱</h1>
              <span class="">service@wlsfarm.com.tw</span>
            </div>
          </a>
        </v-col>
      </v-row>
    </div>

    <div class="MyContainer">
      <v-row>
        <v-col class="text-center mt-10" cols="12">
          <h1 class="text-h2 text-brown font-weight-bold" data-aos="fade-down" data-aos-duration="1000"
            data-aos-offset="150" data-aos-once="true">留言區</h1>
          <span class="text-brown" data-aos="fade" data-aos-duration="1000" data-aos-offset="150"
            data-aos-once="true">如果有任何問題或是對產品有任何的反饋，請在下方留言。</span>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-form v-model="valid" @submit.prevent="submitComment">
            <v-textarea v-model="form.comment" name="回饋訊息" label="回饋訊息" counter maxlength="500" placeholder="輸入訊息"
              variant="outlined" prepend-inner-icon="mdi-comment" clearable data-aos="zoom-in" data-aos-duration="1000"
              data-aos-offset="150" data-aos-once="true">
            </v-textarea>
            <div class="contact_btn_group">
              <!-- <v-btn variant="text" color="error" type="reset">重填</v-btn> -->
              <v-btn variant="outlined" color="orange" type="submit" :disabled="!cansend">送出</v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-text>
          <img src="../../assets/Logo.png" style="width:300px;">
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

onMounted(() => {
  AOS.init();
})

const valid = ref(false)
const dialog = ref(false)

const form = reactive({
  comment: ''
})

const cansend = computed(() => {
  return form.comment.length > 0
})

const submitComment = async () => {
  if (!valid.value) return
  try {
    await apiAuth.post('/feedbacks', form)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '訊息已傳送'
    })
    form.comment = ''
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '送出訊息失敗'
    })
  }
}
</script>