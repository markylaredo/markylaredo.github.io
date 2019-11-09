<template>
  <v-content>
    <ProfileHeader />
    <ProfileAbout />
    <ProfileBody />
    <ProfileFooter />
  </v-content>
</template>

<script>
// @ is an alias to /src
import ProfileHeader from "@/components/ProfileHeader.vue";
import ProfileAbout from "@/components/ProfileAbout.vue";
import ProfileBody from "@/components/ProfileBody.vue";
import ProfileFooter from "@/components/ProfileFooter.vue";
export default {
  components: {
    ProfileHeader,
    ProfileAbout,
    ProfileBody,
    ProfileFooter
  }
};
</script>
