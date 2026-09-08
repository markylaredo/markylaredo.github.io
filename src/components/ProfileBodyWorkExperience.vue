<template>
  <section id="experience" class="page-width experience-section" aria-labelledby="experience-title">
    <div class="section-heading">
      <h2 id="experience-title">Experience</h2>
      <span class="section-aside">Building since 2016</span>
    </div>
    <ol class="experience-list">
      <li v-for="work in works" :key="work.company">
        <span class="experience-date">{{ work.period }}</span>
        <div>
          <h3>{{ work.company }}</h3>
          <p>Software Developer</p>
        </div>
        <span v-if="work.current" class="current-label">Current</span>
      </li>
    </ol>
    <p class="education">
      <span>Education</span> BS in Information Technology
      <span class="education-school">Occidental Mindoro State College</span>
    </p>
  </section>
</template>

<script setup>
const works = [
  {
    period: 'Apr 2024 — Present',
    company: 'Occidental Mindoro Electric Cooperative, Inc.',
    current: true,
  },
  { period: 'Mar 2019 — Feb 2024', company: 'Saudi Technical Limited' },
  { period: 'Jan 2019 — Mar 2020', company: 'Binary Data Frame Corporation' },
  { period: 'Apr 2016 — Jan 2019', company: 'Jade Phone English' },
]
</script>
