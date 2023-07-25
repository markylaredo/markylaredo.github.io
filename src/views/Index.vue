<template>
  <div>
    <profile-hero />
    <ProfileAbout />
    <ProfileBodyTechnicalSkills />
    <!-- <ProfileBodyWorkExperience /> -->
    <ProfileBodyDevWorks />
    <ProfileBodyContact />
    <ProfileFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileAbout from "@/components/ProfileAbout.vue";
import ProfileBodyTechnicalSkills from "@/components/ProfileBodyTechnicalSkills.vue";
// import ProfileBodyWorkExperience from "@/components/ProfileBodyWorkExperience.vue";
import ProfileBodyDevWorks from "@/components/ProfileBodyDevWorks.vue";
import ProfileBodyContact from "@/components/ProfileBodyContact.vue";
import ProfileFooter from "@/components/ProfileFooter.vue";
import ProfileHero from "../components/ProfileHero.vue";
export default {
  components: {
    ProfileAbout,
    ProfileBodyTechnicalSkills,
    // ProfileBodyWorkExperience,
    ProfileBodyDevWorks,
    ProfileBodyContact,
    ProfileFooter,
    ProfileHero,
  },
};
</script>
