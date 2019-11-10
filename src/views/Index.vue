<template>
  <v-content>
    <ProfileHeader />
    <ProfileAbout />
    <ProfileBodyTechnicalSkills />
    <ProfileBodyWorkExperience />
    <ProfileBodyDevWorks />
    <ProfileFooter />
  </v-content>
</template>

<script>
// @ is an alias to /src
import ProfileHeader from "@/components/ProfileHeader.vue";
import ProfileAbout from "@/components/ProfileAbout.vue";
import ProfileBodyTechnicalSkills from "@/components/ProfileBodyTechnicalSkills.vue";
import ProfileBodyWorkExperience from "@/components/ProfileBodyWorkExperience.vue";
import ProfileBodyDevWorks from "@/components/ProfileBodyDevWorks.vue";
import ProfileFooter from "@/components/ProfileFooter.vue";
export default {
  components: {
    ProfileHeader,
    ProfileAbout,
    ProfileBodyTechnicalSkills,
    ProfileBodyWorkExperience,
    ProfileBodyDevWorks,
    ProfileFooter
  }
};
</script>
