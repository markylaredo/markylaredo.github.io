<template>
  <v-footer padless>
    <v-layout xs12 md12 sm12>
      <v-flex>
        <v-card flat tile class="light-bul text-center light-blue accent-2">
          <v-card-text>
            <v-btn
              @click="openLink(item.link)"
              v-for="item in links"
              :key="item.icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">{{ item.icon }}</v-icon>
            </v-btn>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text class="white--text">
            <v-icon>mdi-code-tags</v-icon> code with
            <v-icon color="red">mdi-cards-heart</v-icon> by <strong class="green--text lighten-3"> Me</strong> &copy; {{ new Date().getFullYear() }}
          </v-card-text>
        </v-card>

        <!-- <v-layout justify-center align-center class="caption pa-3"
      >Copyright &copy; {{ new Date().getFullYear() }} Mark Anthony Maat Laredo.
      All Rights Reserved.</v-layout
        >-->
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        icon: "mdi-facebook-box",
        link: "https://www.facebook.com/markylaredo"
      },
      {
        icon: "mdi-linkedin",
        link: "https://ph.linkedin.com/in/mark-anthony-laredo-a22a74168"
      },
      { icon: "mdi-github-circle", link: "https://github.com/markylaredo" }
    ]
  }),
  methods: {
    openLink(url) {
      window.open(url, "_blank");
    }
  }
};
</script>
