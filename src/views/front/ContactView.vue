<template>
  <img class="contact_img"
    src="https://www.undp.org/sites/g/files/zskgke326/files/migration/cn/UNDP-CH-Why-Humanity-Must-Save-Nature-To-Save-Itself.jpeg">
  <div class="MyContainer">
    <v-row class="mt-7">
      <v-col cols="12" lg="4">
        <div class="contact_box">
          <v-icon class="contact_icon" icon="mdi-phone"></v-icon>
          <h1>電話</h1>
          <span>0911888777</span>
        </div>
      </v-col>
      <v-col cols="12" lg="4">
        <div class="contact_box" @click="dialog = true" style="cursor:pointer;">
          <v-icon class="contact_icon" icon="mdi-chat-outline"></v-icon>
          <h1>Line</h1>
          <span>id : XXXXXX</span>
        </div>
      </v-col>
      <v-col cols="12" lg="4">
        <div class="contact_box">
          <v-icon class="contact_icon" icon="mdi-email-outline"></v-icon>
          <h1>信箱</h1>
          <span>mangoshop@gmail.com</span>
        </div>
      </v-col>
      <v-col class="text-center mt-10" cols="12">
        <h1 class="text-h3">聯絡我們</h1>
        <span>如果有任何問題或是對產品有任何的反饋，請在下方留言。</span>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-form v-model="valid" @submit.prevent="submitComment">
          <v-textarea v-model="form.comment" name="回饋訊息" label="回饋訊息" counter maxlength="500" placeholder="輸入訊息"
            variant="outlined" prepend-inner-icon="mdi-comment" clearable>
          </v-textarea>
          <div class="contact_btn_group">
            <!-- <v-btn variant="text" color="error" type="reset">重填</v-btn> -->
            <v-btn variant="text" color="success" type="submit" :disabled="!cansend">送出</v-btn>
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
</template>

<style scoped lang="scss">
.contact_img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center 10%;
}

.contact_box {
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;

  .contact_icon {
    font-size: 4rem;
    color: rgb(169, 231, 76);
  }
}
</style>

<script setup>
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { ref, reactive, computed } from 'vue'

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