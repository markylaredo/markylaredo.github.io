<template>
  <v-app>
    <v-slide-x-reverse-transition class="transition-swing" mode="out-in">
      <v-snackbar bottom right color="info" v-model="newUpdate" :timeout="0">
        {{ snackbarNewUpdateMessage }}
        <v-btn white--text text @click="refreshPage">Refresh</v-btn>
        <v-btn white--text text @click="newUpdate = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-snackbar>
    </v-slide-x-reverse-transition>
    <v-slide-y-transition class="transition-swing" mode="out-in">
      <v-snackbar top center color="success" v-model="offlineUse" :timeout="0">
        {{ snackbarOfflineMessage }}
        <v-btn white--text text @click="offlineUse = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-snackbar>
    </v-slide-y-transition>
    <router-view />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      installBtn: "none",
      installer: undefined,
      refreshing: false,
      registration: null,
      snackbarNewUpdateMessage: null,
      snackbarOfflineMessage: null,
      newUpdate: false,
      offlineUse: false
    };
  },
  methods: {
    showRefreshUI(e) {
      //get the event of service worker e.details
      this.registration = e.detail;
      this.newUpdate = true;
      this.snackbarNewUpdateMessage =
        "🙌🏻 Hooray!! New version is available. 🥰";
    },
    showOfflineUse(e) {
      // console.log(e)
      this.offlineUse = e.detail;
      this.snackbarOfflineMessage =
        "🙌🏻 Hooray!! You can now visit this page without internet connection. 🥰";
    },
    refreshPage() {
      // Handle a user tap on the update app button.
      this.newUpdate = false;
      // Protect against missing registration.waiting.
      // if (!this.registration || !this.registration.waiting) {
      //   return;
      // }
      // this.registration.waiting.postMessage("skipWaiting");
      // console.log(`${this.registration}`);
      window.location.reload(true);
    }
  },
  created() {
    // Listen for swUpdated event and display refresh snackbar.
    document.addEventListener("swUpdated", this.showRefreshUI, { once: true });
    // Listen for swOfflineCached event and display snackbar offline use
    document.addEventListener("swOfflineCached", this.showOfflineUse, {
      once: true
    });
  }
};
</script>
