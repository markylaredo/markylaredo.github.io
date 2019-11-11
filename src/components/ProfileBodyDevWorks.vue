<template>
  <v-parallax
    dark
    height="400"
    :src="require('@/assets/vs_code_background.jpg')"
  >
    <v-row justify="center">
      <v-layout class="text-center">
        <v-flex xs12 sm12 md12>
          <div class="text-center">
            <h3 class="my-8 headline">My Works</h3>
          </div>
          <v-flex md12 xs12 mb-12>
            <div class="text-center">
             <h4 class="subtitle-2"> <v-icon small color="white">mdi-spin mdi-loading </v-icon>  On Development... </h4>
            </div>
          </v-flex>
        </v-flex>
        <!-- <v-sheet color="orange lighten-2">Hello, world! I'm a simple v-sheet</v-sheet> -->
      </v-layout>
    </v-row>
  </v-parallax>
</template>
