<template>
  <v-footer padless>
    <v-layout xs11 md11 sm11>
      <v-flex>
        <v-card flat tile class="text-center light-blue accent-2">
          <v-card-text>
            <v-btn
              @click="openLink(item.link)"
              v-for="item in links"
              :key="item.icon"
              class="mx-1 white--text"
              icon
            >
              <v-icon :color="item.color" size="24px">{{ item.icon }}</v-icon>
            </v-btn>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text class="white--text">
            
            <v-icon>mdi-code-tags</v-icon>&nbsp;with&nbsp;
            <v-icon color="red accent-3">mdi-cards-heart</v-icon>&nbsp;and&nbsp;fueled&nbsp;by
            &nbsp;<v-icon color="brown darken-2">mdi-tea</v-icon>
            &nbsp;&copy; {{ new Date().getFullYear() }} 🌟
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        color: "blue",
        icon: "mdi-facebook-box",
        link: "https://www.facebook.com/markylaredo",
      },
      {
        color: "",
        icon: "mdi-linkedin",
        link: "https://ph.linkedin.com/in/mark-anthony-laredo-a22a74168",
      },
      {
        color: "black",
        icon: "mdi-github-face",
        link: "https://github.com/markylaredo",
      },
    ],
  }),
  methods: {
    openLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
