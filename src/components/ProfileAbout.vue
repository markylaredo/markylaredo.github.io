<template>
  <v-container fluid>
    <v-layout row justify-center align-center>
      <v-flex xs12 md12 sm12 class="text-center">
        <div class="text-center">
          <h3 class="my-8 headline">About Me</h3>
          <!-- <h3 class="headline--text my-8 headline">About Me</h3> -->
        </div>
      </v-flex>
      <v-flex md5 xs12 sm12 class="text-center">
        <v-avatar color="indigo" :size="150" class="mb-3">
          <img
            :src="require('@/assets//grad_pic_crop.jpg')"
            alt="mark anthony"
            height="240"
            width="240"
          />
        </v-avatar>
        <h4 class="subtitle-1 teal--text">{{ myName }}</h4>
        <p>{{ myJob }}</p>
      </v-flex>
      <v-flex md5 xs9 sm9 justify-center align-center>
        <div class="text-center">
          <br />
          <p class="subheading text-justify">
            {{ aboutMe1 }}
          </p>
          <p class="subheading text-justify">
            {{ aboutMe2 }}
          </p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: function() {
    return {
      myName: "Mark Anthony Laredo",
      myJob: "Software Engineer",
      aboutMe1:
        "Experienced Software Engineer with a demonstrated history of working in the IT industry. Strong engineering professional with a Bachelor's degree focused in Information Technology from Occidental Mindoro State College.",
      aboutMe2:
        "Goal-oriented Web Developer with strong commitment to collaboration and solutions-oriented problem solving. Use various web design software to develop customer-focused websites and designs. Committed to high standards of web design, user experience, usability and speed for multiple types of end-users. Successful at maintaining customer satisfaction through effective customer support.",
      alignment: "center",
      dense: false,
      justify: "center"
    };
  }
};
</script>
