<template>
  <v-footer padless absolute>
    <v-layout
      justify-center
      align-center
      class="caption pa-3"
    >Copyright &copy; {{new Date().getFullYear()}} Mark Anthony Maat Laredo. All Rights Reserved.</v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi mdi-facebook-box", "mdi fa-linkedin", "mdi mdi-github-circle"]
  })
};
</script>
