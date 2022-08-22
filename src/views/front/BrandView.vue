<template>
  <div id="brand_view">
    <div class="brand_top_img">
      <div class="circle">
        <span>吳</span>
        <span>李</span>
        <span>香</span>
        <span>農</span>
        <span>場</span>
        <span>介</span>
        <span>紹</span>
      </div>
    </div>
    <div class="MyContainer">
      <p class="slogan text-center text-amber-darken-2 text-h6">
        吳李香農場一直以來都秉持著「健康第一」的信念，不使用任何化學肥料或農藥，一直都採用友善耕作，無毒裁種的方式管理果園，109年開始加入有機夏雪芒果行列(目前是有機轉型期)，吳李香農場將「信念」栽種出的夏雪芒果，每一顆都是「堅持」。
      </p>
      <v-row class="mt-15">
        <v-col cols="12" md="6" class="content1">
          <img class="img1" src="../../assets/mango1.jpg" alt="">
        </v-col>
        <v-col cols="12" md="6" class="content2 d-flex align-center">
          <p class="text-brown text-center word1">
            「吳李香農場」位於台東，原本是荖葉園的農地，為了配合政府政策將荖葉園鏟平，初期休耕了許多年，種植綠肥植物改善土壤。
            直到104年才開始栽種夏雪芒果，早期父母親務農家子弟，本身也是濡目染，也學會了務農的一些技巧。
          </p>
        </v-col>
      </v-row>
      <v-row class="mt-15">
        <v-col cols="12" md="6" class="content3">
          <img class="img2 d-flex justify-center" src="../../assets/cutmango.png" alt="">
        </v-col>
        <v-col cols="12" md="6" class="content4 d-flex align-center">
          <p class="text-brown text-center word2">
            一開始栽種夏雪芒果即選擇以有機方式種植，不僅不用擔心因使用農藥而傷了自己的身體，而生產出來的水果還能讓消費者吃得安心及健康，
            現今社會食安問題頻傳，能夠讓大家吃到安心健康的水果，而貢獻一己之力，感到非常榮幸。
          </p>
        </v-col>
      </v-row>
      <v-row class="mt-15">
        <v-col cols="12" md="6" class="content5">
          <img class="img3" src="../../assets/cutgrass.jpg" alt="">
        </v-col>
        <v-col cols="12" md="6" class="content6 d-flex align-center">
          <p class="text-brown text-center word3">
            與草共生，不使用除草劑，採用人工割草，
            果園有如公園般的美麗。
          </p>
        </v-col>
      </v-row>
      <v-divider class="mt-15" thickness="3"></v-divider>
      <v-row class="mt-15">
        <v-col cols="12" class="text-center">
          <p class="text-h6 text-brown mb-5">109年加入有機夏雪芒果的行列(有機農產品證書)註:目前是轉型期階段</p>
          <img class="certification" src="../../assets/certification.jpg">
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
</script>