<template>
  <section id="projects" class="projects-section" aria-labelledby="projects-title">
    <div class="page-width">
      <div class="section-heading">
        <h2 id="projects-title">A few things I’ve built.</h2>
      </div>
      <div class="project-grid" id="project-list">
        <article v-for="work in visibleWorks" :key="work.title" class="project-card">
          <button
            v-if="work.images?.length"
            class="project-preview"
            type="button"
            :aria-label="`View ${work.title} screenshots`"
            @click="openProject(work, $event)"
          >
            <img
              :src="resolveWorkImage(work.cover)"
              :alt="`${work.title} interface`"
              width="720"
              height="460"
              loading="lazy"
            />
            <span class="preview-action" aria-hidden="true">View project <span>↗</span></span>
          </button>
          <div
            v-else
            class="project-preview project-preview--thumbnail"
            :style="{ backgroundColor: work.thumbnailBackground }"
          >
            <img
              :src="resolveWorkImage(work.thumbnail)"
              :alt="work.thumbnailAlt"
              width="720"
              height="460"
              loading="lazy"
            />
          </div>
          <div class="project-copy">
            <p class="project-category">{{ work.category }}</p>
            <h3>{{ work.title }}</h3>
            <p v-if="work.description">{{ work.description }}</p>
            <span v-if="work.stack" class="project-stack">{{ work.stack }}</span>
          </div>
        </article>
      </div>
      <button
        class="button more-projects"
        type="button"
        aria-controls="project-list"
        :aria-expanded="showAll"
        @click="showAll = !showAll"
      >
        {{ showAll ? 'Show less' : 'More projects' }}
        <span aria-hidden="true">{{ showAll ? '−' : '+' }}</span>
      </button>
    </div>
    <v-dialog
      v-model="galleryOpen"
      @after-leave="restoreGalleryFocus"
      max-width="1100"
      aria-labelledby="gallery-title"
    >
      <div v-if="selectedWork" class="project-gallery">
        <div class="gallery-heading">
          <div>
            <p class="eyebrow">Project gallery</p>
            <h2 id="gallery-title">{{ selectedWork.title }}</h2>
          </div>
          <button
            type="button"
            class="theme-toggle"
            aria-label="Close project gallery"
            @click="galleryOpen = false"
          >
            <v-icon icon="mdi-close" />
          </button>
        </div>
        <v-carousel
          v-model="slide"
          height="auto"
          :show-arrows="selectedWork.images.length > 1"
          hide-delimiters
          :continuous="true"
        >
          <v-carousel-item v-for="(file, index) in selectedWork.images" :key="file"
            ><div class="gallery-image">
              <img
                :src="resolveWorkImage(file)"
                :alt="`${selectedWork.title}, screenshot ${index + 1}`"
              /></div
          ></v-carousel-item>
        </v-carousel>
        <div class="gallery-footer">
          <p>{{ selectedWork.description }}</p>
          <span>{{ slide + 1 }} / {{ selectedWork.images.length }}</span>
        </div>
      </div>
    </v-dialog>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
const workImages = import.meta.glob('../assets/myWorks/*', { eager: true, import: 'default' })
const resolveWorkImage = (file) => workImages[`../assets/myWorks/${file}`]
const works = [
  {
    title: 'TriAlert',
    category: 'IoT / Emergency monitoring',
    description: 'Connected alert devices and a real-time monitoring dashboard.',
    stack: '.NET / Nuxt / ESP32',
    thumbnail: 'trialert-thumbnail.jpg',
    thumbnailAlt: 'TriAlert logo',
  },
  {
    title: 'FleetShell',
    category: 'Android / Device management',
    description:
      'Android kiosk launcher with app controls, centralized licensing, and remote device management.',
    stack: 'Kotlin / .NET / Nuxt',
    thumbnail: 'fleetshell-logo.png',
    thumbnailAlt: 'FleetShell logo',
    thumbnailBackground: '#05192f',
  },
  {
    title: 'OMECO',
    category: 'Core developer',
    description:
      'Web and mobile applications for electric cooperative operations, including an accounting system.',
    stack: '.NET Core / Nuxt',
    thumbnail: 'omeco-thumbnail.png',
    thumbnailAlt: 'OMECO logo',
  },
  {
    title: 'Inspector Android App',
    category: 'Mobile application',
    stack: 'Android',
    thumbnail: 'inspector-thumbnail.svg',
    thumbnailAlt: 'Inspector Android App illustration',
  },
  {
    title: 'Sablayan Job Portal',
    category: 'Public service',
    description: 'Connecting job seekers with local opportunities.',
    stack: '.NET Core / Nuxt',
    cover: 'sby_job_portal_0.jpeg',
    images: Array.from({ length: 7 }, (_, i) => `sby_job_portal_${i}.jpeg`),
  },
  {
    title: 'HR & Payroll',
    category: 'Business operations',
    description: 'People, attendance, and payroll in one place.',
    stack: 'C# / ASP.NET MVC',
    cover: 'stl_dashboard.png',
    images: ['stl_dashboard.png', 'stl_employee_info.png', 'stl_login.png'],
  },
  {
    title: 'IRC Attendance',
    category: 'Education',
    description: 'Real-time attendance with timely notifications.',
    stack: 'C# / ASP.NET',
    cover: 'irc_dashboard.png',
    images: ['irc_dashboard.png', 'irc_student_Info.png', 'irc_login.png'],
  },
  {
    title: 'Loan Management',
    category: 'Finance',
    description: 'Loan processing and tracking from start to finish.',
    stack: 'Visual Basic / .NET',
    cover: 'oms_dashboard.jpg',
    images: ['oms_dashboard.jpg', 'oms_insights.jpg', 'oms_login.jpg'],
  },
  {
    title: 'IRB Bulk SMS',
    category: 'Communication',
    description: 'Broadcast messaging for everyday announcements.',
    stack: 'C# / Windows Forms',
    cover: 'irc_bulk_sms_dashboard.jpg',
    images: ['irc_bulk_sms_dashboard.jpg', 'irc_bulk_sms.jpg', 'irc_bulk_sms_log_stats.jpg'],
  },
]
const showAll = ref(false)
const visibleWorks = computed(() => (showAll.value ? works : works.slice(0, 3)))
const selectedWork = ref(null)
const galleryOpen = ref(false)
const slide = ref(0)
let galleryTrigger
function restoreGalleryFocus() {
  galleryTrigger?.focus()
}
function openProject(work, event) {
  galleryTrigger = event.currentTarget
  selectedWork.value = work
  slide.value = 0
  galleryOpen.value = true
}
</script>
