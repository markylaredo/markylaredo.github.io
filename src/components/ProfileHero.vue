<template>
  <section id="home" class="hero page-width" aria-labelledby="hero-title">
    <div class="hero-copy">
      <p class="eyebrow">Software developer</p>
      <h1 id="hero-title">Mark Anthony<br /><span>Laredo.</span></h1>
      <p class="hero-description">
        I build reliable web applications with .NET, Vue, and Nuxt. Simple to use. Built to last.
      </p>
      <div class="hero-actions">
        <a class="button button-primary" href="#projects"
          >Explore my work <span aria-hidden="true">↗</span></a
        >
        <a class="text-link" href="mailto:laredomarkanthony@hotmail.com"
          >Get in touch <span aria-hidden="true">↗</span></a
        >
      </div>
      <p class="hero-note">9+ years of building software for everyday operations.</p>
    </div>
    <figure class="hero-portrait">
      <img
        :src="portrait"
        alt="Mark Anthony Laredo"
        width="1024"
        height="1024"
        fetchpriority="high"
      />
      <figcaption>
        <span>From interface to infrastructure.</span><span aria-hidden="true">↗</span>
      </figcaption>
    </figure>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const portrait = computed(() =>
  theme.global.current.value.dark ? '/img/mark-anthony.png' : '/img/mark-anthony-light.png',
)
</script>
