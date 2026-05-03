<template>
  <section id="projects" class="section-shell project-section">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="11" md="10" lg="9">
          <div class="mb-8 text-center text-md-left">
            <span class="accent-pill mb-3">Selected Projects</span>
            <h2 class="section-title">
              Portfolio projects focused on operational impact
            </h2>
            <p class="section-subtitle">
              Featured systems from HR, finance, communication, and government
              platforms.
            </p>
          </div>
          <v-row>
            <v-col
              cols="12"
              md="6"
              lg="4"
              v-for="(work, i) in works"
              :key="`${work.system}-${i}`"
            >
              <v-card class="panel-card project-card h-100" rounded="xl">
                <v-carousel
                  delimiter-icon="mdi-minus"
                  cycle
                  hide-delimiter-background
                  show-arrows-on-hover
                  height="220"
                  :interval="work.interval"
                >
                  <v-carousel-item v-for="img in work.images" :key="img">
                    <v-img
                      :src="resolveWorkImage(img)"
                      :alt="img"
                      height="220"
                      cover
                      eager
                    ></v-img>
                  </v-carousel-item>
                </v-carousel>
                <v-card-text class="pa-5">
                  <div
                    class="d-flex align-center justify-space-between mb-3 ga-2"
                  >
                    <v-chip
                      v-if="work.featured"
                      color="primary"
                      variant="tonal"
                      size="small"
                    >
                      Featured Project
                    </v-chip>
                    <span class="project-category">{{ work.category }}</span>
                  </div>
                  <h3 class="text-h6 font-weight-bold mb-3">
                    {{ work.system }}
                  </h3>
                  <p class="mb-4 text-body-2">{{ work.description }}</p>
                  <div class="d-flex flex-wrap ga-2">
                    <v-chip color="primary" variant="tonal" size="small">{{
                      work.platform
                    }}</v-chip>
                    <v-chip color="secondary" variant="tonal" size="small">{{
                      work.writtenIn
                    }}</v-chip>
                  </div>
                  <p class="project-impact mt-4 mb-0">{{ work.impact }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
const workImages = import.meta.glob("../assets/myWorks/*", {
  eager: true,
  import: "default",
});

export default {
  data() {
    return {
      works: [
        {
          images: [
            "irc_dashboard.png",
            "irc_login.png",
            "irc_student_Info.png",
          ],
          system: "IRC System",
          description:
            "Realtime card and attendance system with notification support.",
          category: "Education Tech",
          impact:
            "Includes attendance and reporting features for school operations.",
          featured: true,
          platform: "ASP.NET Web Forms",
          writtenIn: "C#",
          interval: Math.floor(Math.random() * 1000 + 5000),
        },
        {
          images: ["oms_login.jpg", "oms_dashboard.jpg", "oms_insights.jpg"],
          system: "Loan Management System",
          description:
            "Loan processing, tracking, and lifecycle monitoring platform.",
          category: "Finance Operations",
          impact:
            "Designed for financial workflow automation and cooperative lending operations.",
          platform: "VB.Net - Forms",
          writtenIn: "Visual Basic .Net",
          interval: Math.floor(Math.random() * 1000 + 5000),
        },
        {
          images: [
            "stl_login.png",
            "stl_dashboard.png",
            "stl_employee_info.png",
          ],
          system: "HRP System",
          description: "Human resource and payroll management system.",
          category: "HR and Payroll",
          impact:
            "Built with attendance and reporting features for internal teams.",
          platform: "ASP.NET MVC",
          writtenIn: "C#",
          interval: Math.floor(Math.random() * 1000 + 5000),
        },
        {
          images: [
            "sby_job_portal_0.jpeg",
            "sby_job_portal_1.jpeg",
            "sby_job_portal_2.jpeg",
            "sby_job_portal_3.jpeg",
            "sby_job_portal_4.jpeg",
            "sby_job_portal_5.jpeg",
            "sby_job_portal_6.jpeg",
          ],
          system: "Sablayan Job Portal",
          description: "Public job portal system for local recruitment access.",
          category: "Public Service",
          impact:
            "Supports government employment services and online applicant workflows.",
          featured: true,
          platform: ".Net Core & Nuxt.js",
          writtenIn: "C#",
          interval: Math.floor(Math.random() * (6000 - 5800) + 5000),
        },
        // {
        //   images: [
        //     "gorgo_landing_page.png",
        //     "gorgo_registration.png",
        //     "gorgo_talent_list.png",
        //     "gorgo_talent_info.png"
        //   ],
        //   system: "GORGO",
        //   description: "GORGO Talent Assistant",
        //   platform: "ASP.NET MVC",
        //   writtenIn: "C#",
        //   interval: Math.floor(Math.random() * (6000 - 5800) + 5000)
        // },
        {
          images: [
            "irc_bulk_sms_dashboard.jpg",
            "irc_bulk_sms.jpg",
            "irc_bulk_sms_log_stats.jpg",
          ],
          system: "IRB Bulk SMS",
          description: "SMS broadcasting and notification management system.",
          category: "Communication Tools",
          impact:
            "Delivers high-volume announcement distribution for operational messaging.",
          platform: "Windows Forms",
          writtenIn: "C#",
          interval: Math.floor(Math.random() * 1000 + 5000),
        },
      ],
    };
  },
  methods: {
    resolveWorkImage(fileName) {
      return (
        workImages[`../assets/myWorks/${fileName}`] ||
        new URL(`../assets/myWorks/${fileName}`, import.meta.url).href
      );
    },
  },
};
</script>

<style scoped>
.project-section {
  position: relative;
}

.project-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #eaf0f6;
  pointer-events: none;
}

.project-card {
  overflow: hidden;
  position: relative;
  z-index: 1;
  border-radius: 12px !important;
}

.project-category {
  color: var(--accent-deep);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.project-impact {
  font-size: 0.92rem;
  color: var(--text-secondary);
}

:deep(.v-carousel) {
  border-bottom: 1px solid var(--border-soft);
}
</style>
