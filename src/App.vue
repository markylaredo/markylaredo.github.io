<template>
  <v-app>
    <router-view />
    <a style="cursor:pointer" :style="{'display': installBtn}" @click="installer()">
      <h1>Install!</h1>
    </a>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      installBtn: "none",
      installer: undefined
    };
  },
  created() {
    let installPrompt;

    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      installPrompt = e;
      this.installBtn = "block";
    });

    this.installer = () => {
      this.installBtn = "none";
      installPrompt.prompt();
      installPrompt.userChoice.then(result => {
        if (result.outcome === "accepted") {
          console.log("Install accepted!");
        } else {
          console.log("Install denied!");
        }
      });
    };
  }
};
</script>
