<template>
  <v-parallax
    dark
    height="400"
    :src="require('@/assets/keep_calm_and_code.jpg')"
  >
    <v-layout align-center class="text-center darken-3" justify-center>
      <v-flex md6 xs11 sm11>
        <h1 class="display-1 font-weight-thin mb-4" v-text="message"></h1>
        <h4 class="headline" v-text="description"></h4>
      </v-flex>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  data() {
    return {
      message: "Hi, I'm Mark.",
      description:
        "Independent Full-stack software & web developer specializing in .Net Framework."
    };
  }
};
</script>
