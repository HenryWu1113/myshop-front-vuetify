<template>
  <div id="footer">
    <div class="MyContainer">
      <v-row>
        <v-col cols="12">
          <h1 class="text-center text-h3 text-white font-weight-bold">▶ {{ $t('wuleefarm') }} ◀</h1>
          <div class="text-center mt-5 mb-5">
            <!-- <v-btn icon variant="text" href="https://www.facebook.com/wlsfarm/"> -->
            <v-btn icon variant="text">
              <v-icon icon="mdi-facebook" class="text-white ms-5 me-5"></v-icon>
            </v-btn>
            <v-btn icon variant="text">
              <v-icon icon="mdi-twitter" class="text-white ms-5 me-5"></v-icon>
            </v-btn>
            <v-btn icon variant="text">
              <v-icon icon="mdi-instagram" class="text-white ms-5 me-5"></v-icon>
            </v-btn>
            <v-btn icon variant="text">
              <v-icon icon="mdi-youtube" class="text-white ms-5 me-5"></v-icon>
            </v-btn>
          </div>
          <v-divider color="white" thickness="3"></v-divider>
          <span class="d-block text-center text-white font-weight-bold mt-5">Copyright © 2022
            {{ $t('wuleefarm') }} ({{ $t('footerwords') }})</span>
        </v-col>
        <!-- <v-col cols="12" md="6">
          <h1 class="text-center text-h4 text-brown font-weight-bold">標題一</h1>
        </v-col> -->
        <!-- <v-col cols="12" md="4">
          <h1 class="text-center text-h4 text-brown font-weight-bold">聯絡我們</h1>
        </v-col> -->
      </v-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
#footer {
  margin-top: 5rem;
  width: 100%;
  padding: 5rem 0 1rem 0;
  background: #D7CCC8;
}
</style>