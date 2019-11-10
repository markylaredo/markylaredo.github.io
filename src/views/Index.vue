<template>
  <v-content>
    <ProfileHeader />
    <ProfileAbout />
    <ProfileBodyTechnicalSkills />
    <ProfileFooter />
  </v-content>
</template>

<script>
// @ is an alias to /src
import ProfileHeader from "@/components/ProfileHeader.vue";
import ProfileAbout from "@/components/ProfileAbout.vue";
import ProfileBodyTechnicalSkills from "@/components/ProfileBodyTechnicalSkills.vue";
import ProfileFooter from "@/components/ProfileFooter.vue";
export default {
  components: {
    ProfileHeader,
    ProfileAbout,
    ProfileBodyTechnicalSkills,
    ProfileFooter
  }
};
</script>
