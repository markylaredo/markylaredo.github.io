<template>
  <v-container fluid light-blue lighten-5 >
    <v-layout row justify-center class="pb-8">
      <v-flex xs12 md12 sm12 class="text-center">
        <div class="text-center">
          <h3 class="my-8 headline">Contact Information</h3>
        </div>
      </v-flex>
      <!-- programming language and frameworks -->
      <v-flex md3 xs9 sm9 class="text-center">
        <v-avatar size="62">
          <span class="white--text headline">
            <v-icon color="blue" x-large>mdi-facebook-messenger</v-icon>
          </span>
        </v-avatar>
        <h4 class="text--white">
          <a class="no-underline" target="_blank" href="https://m.me/markylaredo">m.me/markylaredo</a>
        </h4>
      </v-flex>
      <v-flex md3 xs9 sm9 class="text-center">
        <v-avatar size="62">
          <span class="white--text headline">
            <v-icon color="red" x-large>mdi-gmail</v-icon>
          </span>
        </v-avatar>
        <h4>
          <a
            class="no-underline"
            target="_blank"
            href="mailto:markanthonylaredo@gmail.com"
          >markanthonylaredo@gmail.com</a>
        </h4>
      </v-flex>
      <v-flex md3 xs9 sm9 class="text-center">
        <v-avatar size="62">
          <span class="white--text headline">
            <v-icon color="green" x-large>mdi-cellphone-android</v-icon>
          </span>
        </v-avatar>
        <p>
          <strong>Globe:</strong> +639 7571 45686
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.no-underline {
  text-decoration: none !important;
}
</style>