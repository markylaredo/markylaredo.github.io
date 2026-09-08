<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="site-header">
    <div class="page-width header-inner">
      <a href="#home" class="brand" aria-label="Mark Laredo home">ml<span>.</span></a>
      <nav aria-label="Main navigation">
        <a href="#projects">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <button
        class="theme-toggle"
        type="button"
        :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
        @click="toggleTheme"
      >
        <v-icon :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'" size="19" />
      </button>
    </div>
  </header>
  <main id="main-content">
    <ProfileHero />
    <ProfileBodyDevWorks />
    <div class="page-width about-grid">
      <ProfileAbout />
      <ProfileBodyTechnicalSkills />
    </div>
    <ProfileBodyWorkExperience />
    <ProfileBodyContact />
  </main>
  <ProfileFooter />
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import ProfileHero from '@/components/ProfileHero.vue'
import ProfileAbout from '@/components/ProfileAbout.vue'
import ProfileBodyTechnicalSkills from '@/components/ProfileBodyTechnicalSkills.vue'
import ProfileBodyWorkExperience from '@/components/ProfileBodyWorkExperience.vue'
import ProfileBodyDevWorks from '@/components/ProfileBodyDevWorks.vue'
import ProfileBodyContact from '@/components/ProfileBodyContact.vue'
import ProfileFooter from '@/components/ProfileFooter.vue'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)
function toggleTheme() {
  const next = isDark.value ? 'light' : 'dark'
  theme.change(next)
  document.documentElement.dataset.theme = next
  try {
    localStorage.setItem('portfolio-theme', next)
  } catch {
    /* Theme still works when storage is unavailable. */
  }
}
</script>
