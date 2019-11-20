<template>
  <v-container fluid light-blue lighten-5>
    <v-layout row justify-center class="pb-8">
      <v-flex xs12 md12 sm12 class="text-center">
        <div class="text-center">
          <h3 class="my-8 headline">Contact Information</h3>
        </div>
      </v-flex>
      <!-- programming language and frameworks -->
      <v-flex md2 xs11 sm11 mb-5 class="text-center">
        <v-avatar size="62" class="elevation-2 mb-3">
          <span class="white--text headline">
            <a
              class="no-underline"
              target="_blank"
              href="https://m.me/markylaredo"
            >
              <v-icon color="blue" x-large>mdi-facebook-messenger</v-icon>
            </a>
          </span>
        </v-avatar>
        <h4>
          <a
            class="no-underline"
            target="_blank"
            href="https://m.me/markylaredo"
            >Messenger</a
          >
        </h4>
      </v-flex>
      <v-flex md3 xs11 sm11 mb-5 class="text-center">
        <v-avatar size="62" class="elevation-2 mb-3">
          <span class="white--text headline">
            <a
              class="no-underline"
              target="_blank"
              href="mailto:markanthonylaredo@gmail.com"
            >
              <v-icon color="#6001D2" x-large>mdi-email</v-icon>
            </a>
          </span>
        </v-avatar>
        <h4>
          <a
            class="no-underline"
            target="_blank"
            href="mailto:markanthonylaredo@gmail.com"
            >markanthonylaredo@gmail.com</a
          >
        </h4>
      </v-flex>
      <v-flex md2 xs11 sm11 class="text-center">
        <v-avatar size="62" class="elevation-2 mb-3">
          <span class="white--text headline">
            <a class="no-underline" href="tel:09757145686">
              <v-icon color="green" x-large>mdi-phone-classic</v-icon>
            </a>
          </span>
        </v-avatar>
        <p>
          <a class="no-underline" href="tel:09757145686">
            <strong>Globe:</strong> +639 7571 45686
          </a>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.no-underline {
  text-decoration: none !important;
  color: black;
  font-weight: 500;
}
</style>
