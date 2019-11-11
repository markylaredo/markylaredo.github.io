<template>
  <v-container fluid light-blue lighten-5 pb-8>
    <v-row row justify-center align-center>
      <v-flex xs12 md12 sm12 class="text-center">
        <div class="text-center">
          <h3 class="my-8 headline">Contact Info</h3>
        </div>
      </v-flex>
      <v-row md5 xs9 mb-12>
        <v-layout justify-center class="text-center">
          <v-flex md2>
            <v-avatar size="62">
              <span class="white--text headline">
                <v-icon color="blue" x-large>mdi-facebook-messenger</v-icon>
              </span>
            </v-avatar>
            <h4 class="text--white">
              <a class="no-underline " target="_blank" href="https://m.me/markylaredo">m.me/markylaredo</a>
            </h4>
          </v-flex>
          <v-flex md2>
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
          <v-flex md2>
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
      </v-row>
    </v-row>
  </v-container>
</template>

<style scoped>
.no-underline {
  text-decoration: none !important;
}
</style>