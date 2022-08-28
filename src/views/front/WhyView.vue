<template>
  <div id="why_view">
    <div class="top_banner animate__animated animate__fadeInDown">
    </div>
    <div class="top_title_place">
      <div class="MyContainer">
        <h1 class="text-brown" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150">{{ $t('why') }}</h1>
        <h2 class="text-brown mt-5" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150">{{ $t('mangolv')
        }}</h2>
        <p class="text-brown mt-5" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150">
          {{ $t('mymangointro') }}
        </p>
        <img class="title_mango_img" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150"
          src="../../assets/twinmango.png">
      </div>
    </div>
    <div class="comparison">
      <div class="MyContainer">
        <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150">{{ $t('strong') }}</h1>
        <h2 data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150" class="mt-5">{{ $t('allbenefit') }}</h2>
        <v-row class="mt-15">
          <v-col cols="12" md="4">
            <div class="mango_box">
              <img data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150" src="../../assets/土芒果.png"
                alt="">
              <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150">{{ $t('tu') }}</h3>
              <p data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150">
                {{ $t('tuinro') }}
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="mango_box">
              <img data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150" src="../../assets/愛文芒果.png"
                alt="">
              <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150">{{ $t('aiwen') }}</h3>
              <p data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150">
                {{ $t('aiwenintro') }}
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="mango_box">
              <img data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150" src="../../assets/金煌芒果.png"
                alt="">
              <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150">{{ $t('gin') }}</h3>
              <p data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150">
                {{ $t('ginintro') }}
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="mango_different">
      <div class="MyContainer">
        <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150">{{ $t('allcompareimg') }}</h1>
        <img data-aos="fade-down" data-aos-duration="1000" data-aos-offset="150" class="mt-5"
          src="../../assets/芒果比較表.jpg" alt="">
      </div>
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