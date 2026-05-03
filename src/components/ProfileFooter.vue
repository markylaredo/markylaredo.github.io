<template>
  <footer class="site-footer">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="11" md="10" lg="9">
          <v-card rounded="xl" class="footer-card" elevation="0">
            <v-card-text
              class="d-flex flex-column flex-md-row justify-space-between align-center ga-5 pa-6"
            >
              <div>
                <p class="mb-1 footer-name">Mark Anthony Laredo</p>
                <p class="mb-0 footer-caption">
                  Software Engineer / Software Developer
                </p>
                <p class="mb-0 footer-update">
                  Latest portfolio update: May 2026
                </p>
              </div>
              <div class="d-flex ga-1">
                <v-btn
                  v-for="item in links"
                  :key="item.icon"
                  :aria-label="item.label"
                  icon
                  variant="text"
                  color="white"
                  @click="openLink(item.link)"
                >
                  <v-icon size="24">{{ item.icon }}</v-icon>
                </v-btn>
              </div>
            </v-card-text>
            <v-divider class="footer-divider"></v-divider>
            <v-card-text class="pa-5 text-center footer-bottom">
              © {{ new Date().getFullYear() }} Mark Anthony Laredo. Built with
              Vue and Vuetify.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        label: "Facebook",
        icon: "mdi-facebook-box",
        link: "https://www.facebook.com/markylaredo",
      },
      {
        label: "LinkedIn",
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/mark-laredo",
      },
      {
        label: "GitHub",
        icon: "mdi-github",
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

<style scoped>
.site-footer {
  padding: 10px 0 32px;
}

.footer-card {
  background: linear-gradient(120deg, #15324b, #102738);
  color: #e9f3ff;
}

.footer-name {
  color: #fff;
  font-size: 1.04rem;
  font-weight: 700;
}

.footer-caption {
  color: rgb(233 243 255 / 76%);
}

.footer-update {
  color: rgb(241 197 150 / 88%);
  font-size: 0.84rem;
  margin-top: 6px;
}

.footer-divider {
  border-color: rgb(233 243 255 / 18%) !important;
}

.footer-bottom {
  color: rgb(233 243 255 / 70%);
  font-size: 0.88rem;
}
</style>
