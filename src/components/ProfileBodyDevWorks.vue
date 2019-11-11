<template>
  <v-parallax dark height="400" :src="require('@/assets/vs_code_background.jpg')">
      <v-layout row justify-center class="pb-8">
        <v-flex xs12 md12 sm12 class="text-center">
          <div class="text-center">
            <h3 class="my-8 headline">My Works</h3>
          </div>
        </v-flex>

        <v-flex md3 xs9 sm9 class="text-center">
          <h4 class="subtitle-2">
            <v-icon small color="white">mdi-spin mdi-loading</v-icon>&nbsp;On Development...
          </h4>
        </v-flex>
      </v-layout>
  </v-parallax>
</template>
