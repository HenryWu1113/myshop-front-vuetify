<template>
  <div id="contact_view">
    <!-- <img class="contact_img"
      src="https://img.freepik.com/premium-photo/happy-new-year-number-made-fruits-berries_88281-5412.jpg?w=1380"> -->
    <v-parallax class="mb-15"
      src="https://scontent.ftpe14-1.fna.fbcdn.net/v/t39.30808-6/294188883_8564335890258405_5451743927341035630_n.jpg?stp=cp1_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=p_NT1QzaYtYAX_dEght&_nc_ht=scontent.ftpe14-1.fna&oh=00_AT99b1pIOlx0f0Z0fo8nxJhHz8qIkXxk3Dk9I3n0ez6RJQ&oe=6307E3D6"
      cover height="600">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h1 mb-4 pt-6 pb-6 ps-6 pe-6 font-weight-bold contact_bg">
          {{ $t('contact') }}
        </h1>
      </div>
    </v-parallax>
    <div class="MyContainer">
      <v-row class="mt-7">
        <v-col cols="12" lg="4">
          <div class="contact_box">
            <v-icon class="contact_icon" icon="mdi-phone"></v-icon>
            <h1 class="text-brown">電話</h1>
            <span class="text-brown">0911888777</span>
          </div>
        </v-col>
        <v-col cols="12" lg="4">
          <div class="contact_box" @click="dialog = true" style="cursor:pointer;">
            <v-icon class="contact_icon" icon="mdi-chat-outline"></v-icon>
            <h1 class="text-brown">Line</h1>
            <span class="text-brown">id : XXXXXX</span>
          </div>
        </v-col>
        <v-col cols="12" lg="4">
          <div class="contact_box">
            <v-icon class="contact_icon" icon="mdi-email-outline"></v-icon>
            <h1 class="text-brown">信箱</h1>
            <span class="text-brown">mangoshop@gmail.com</span>
          </div>
        </v-col>
      </v-row>
    </div>

    <div class="MyContainer">
      <v-row>
        <v-col class="text-center mt-10" cols="12">
          <h1 class="text-h2 text-brown font-weight-bold">留言區</h1>
          <span class="text-brown">如果有任何問題或是對產品有任何的反饋，請在下方留言。</span>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-form v-model="valid" @submit.prevent="submitComment">
            <v-textarea v-model="form.comment" name="回饋訊息" label="回饋訊息" counter maxlength="500" placeholder="輸入訊息"
              variant="outlined" prepend-inner-icon="mdi-comment" clearable>
            </v-textarea>
            <div class="contact_btn_group">
              <!-- <v-btn variant="text" color="error" type="reset">重填</v-btn> -->
              <v-btn variant="outlined" color="orange" type="submit" :disabled="!cansend">送出</v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="dialog" transition="dialog-top-transition">
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
.contact_img {
  width: 100%;
  height: 300px;
  object-fit: contain;
  object-position: center 50%;
}

.contact_bg {
  backdrop-filter: blur(3px);
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.contact_box {
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;

  .contact_icon {
    font-size: 4rem;
    color: #FFC107;
  }
}
</style>

<script setup>
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { ref, reactive, computed } from 'vue'
import FooterPart from '@/components/FooterPart.vue'

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