<template>
  <div id="brand_view">
    <div class="brand_top_img">
      <div class="circle">
        <span class="animate__animated animate__bounceInLeft">吳李香夏雪芒果</span>
      </div>
    </div>
    <div class="MyContainer">
      <div class="logo text-center mb-15">
        <h1 class="text-brown mb-5" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150">~~{{ $t('logo')
        }}~~</h1>
        <img src="../../assets/Logo.png" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="150" alt="">
      </div>
      <p class="slogan text-center text-amber-darken-2 text-h6" data-aos="fade" data-aos-duration="1000"
        data-aos-offset="150">
        {{ $t('slogan') }}
      </p>
      <v-row class="mt-15">
        <v-col cols="12" md="6" class="content1">
          <img class="img1" src="../../assets/mango1.jpg" data-aos="fade-right" data-aos-duration="1000"
            data-aos-offset="150" alt="">
        </v-col>
        <v-col cols="12" md="6" class="content2 d-flex align-center">
          <p class="text-brown text-center word1" data-aos="fade" data-aos-duration="1000" data-aos-offset="150">
            {{ $t('intro1') }}
          </p>
        </v-col>
      </v-row>
      <v-row class="mt-15">
        <v-col cols="12" md="6" class="content3">
          <img class="img2 d-flex justify-center" src="../../assets/cutmango.png" data-aos="fade-left"
            data-aos-duration="1000" data-aos-offset="150" alt="">
        </v-col>
        <v-col cols="12" md="6" class="content4 d-flex align-center">
          <p class="text-brown text-center word2" data-aos="fade" data-aos-duration="1000" data-aos-offset="150">
            {{ $t('intro2') }}
          </p>
        </v-col>
      </v-row>
      <v-row class="mt-15">
        <v-col cols="12" md="6" class="content5">
          <img class="img3" src="../../assets/cutgrass.jpg" data-aos="fade-right" data-aos-duration="1000"
            data-aos-offset="150" alt="">
        </v-col>
        <v-col cols="12" md="6" class="content6 d-flex align-center">
          <p class="text-brown text-center word3" data-aos="fade" data-aos-duration="1000" data-aos-offset="150">
            {{ $t('intro3') }}
          </p>
        </v-col>
      </v-row>
      <v-divider class="mt-15" thickness="3"></v-divider>
      <v-row class="mt-15">
        <v-col cols="12" class="text-center">
          <p class="text-h6 text-brown mb-5" data-aos="fade" data-aos-duration="1000" data-aos-offset="150">
            {{ $t('certification') }}</p>
          <img class="certification" src="../../assets/certification.jpg" data-aos="zoom-out" data-aos-duration="1000"
            data-aos-offset="200">
        </v-col>
      </v-row>

    </div>

  </div>
  <FooterPart></FooterPart>
</template>

<style scoped lang="scss">
</style>

<script setup>
import FooterPart from '@/components/FooterPart.vue'
import AOS from "aos"
import { onMounted } from 'vue'

onMounted(() => {
  AOS.init();
})
</script>