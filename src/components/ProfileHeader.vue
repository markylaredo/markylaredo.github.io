<template>
  <v-img
    :src="require('@/assets/vs_code_background.jpg')"
    :height="height"
    alt="blur code"
  >
    <v-layout
      class="has-elevation"
      column
      align-center
      justify-center
      fill-height
      px-4
    >
      <v-avatar :size="150">
        <img
          :src="require('@/assets//mark.jpg')"
          alt="mark anthony"
          height="240"
          width="240"
        />
      </v-avatar>
      <h1
        class=" mt-5 display-1 white--text has-elevation mb-3"
        v-text="message"
      ></h1>
      <p
        class="headline font-weight-thin white--text text-center "
        v-text="description"
      ></p>
    </v-layout>
  </v-img>
</template>

<script>
export default {
  data() {
    return {
      height: window.innerHeight,
      message: "Hi, I'm Mark.",
      description:
        "Independent Full-stack software & web developer specializing in .Net Framework."
    };
  }
};
</script>
