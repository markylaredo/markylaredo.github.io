<template>
  <section
    id="experience"
    class="section-shell section-shell--tight experience-bg"
  >
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="11" md="10" lg="9">
          <div class="mb-8">
            <span class="accent-pill mb-3">Work Experience</span>
            <h2 class="section-title">
              Professional journey and delivery history
            </h2>
          </div>
          <v-timeline side="end" density="compact">
            <v-timeline-item
              v-for="(work, i) in works"
              :key="i"
              :dot-color="work.color"
              :icon="work.icon"
              fill-dot
            >
              <template #opposite>
                <span class="timeline-date" v-text="work.year"></span>
              </template>
              <v-card class="panel-card mb-2" rounded="lg">
                <v-card-text>
                  <h3
                    class="text-h6 font-weight-bold mb-1"
                    v-text="work.work"
                  ></h3>
                  <p class="text-body-2 mb-1 company-name">{{ work.where }}</p>
                  <p class="text-body-2">{{ work.addr }}</p>
                  <ul v-if="work.highlights?.length" class="work-highlights">
                    <li v-for="item in work.highlights" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
          <v-card class="panel-card mt-8" rounded="lg">
            <v-card-text>
              <span class="accent-pill mb-3">Education</span>
              <h3 class="text-h6 font-weight-bold mb-1">
                Bachelor's Degree in Information Technology
              </h3>
              <p class="mb-0 company-name">Occidental Mindoro State College</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data: () => ({
    works: [
      {
        color: "blue",
        icon: "mdi-briefcase-account",
        year: "April 2024 - Present",
        work: "Software Developer",
        where: "Occidental Mindoro Electric Cooperative, Inc.",
        addr: "Philippines",
      },
      {
        color: "blue",
        icon: "mdi-briefcase-account",
        year: "March 2019 - February 2024",
        work: "Software Developer",
        where: "Saudi Technical Limited",
        addr: "Riyadh, Saudi Arabia",
        highlights: [
          "Developed web applications using .NET Core REST APIs and Nuxt.js.",
          "Designed and managed databases using a code-first approach.",
          "Implemented custom business features and managed IIS servers.",
          "Conducted user training and deployment support.",
        ],
      },
      {
        color: "blue",
        icon: "mdi-briefcase-account",
        year: "Jan 2019 - Mar 2020",
        work: "Software Developer",
        where: "Binary Data Frame Corporation",
        addr: "Las Pinas, Philippines",
        highlights: [
          "Built HR, payroll, and attendance systems.",
          "Developed reporting systems for daily operations.",
          "Implemented custom enterprise business features.",
        ],
      },
      {
        color: "blue",
        icon: "mdi-briefcase-account",
        year: "Apr 2016 - Jan 2019",
        work: "Software Developer",
        where: "Jade Phone English",
        addr: "Quezon City, Philippines",
        highlights: [
          "Built ASP.NET web applications.",
          "Developed RFID and NFC attendance systems with SMS notifications.",
          "Created reporting and monitoring tools.",
        ],
      },
    ],
  }),
};
</script>

<style scoped>
.experience-bg {
  background: linear-gradient(
    180deg,
    rgb(226 242 255 / 60%) 0%,
    rgb(244 250 255 / 50%) 100%
  );
}

.timeline-date {
  color: var(--accent-deep);
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.company-name {
  color: var(--text-primary);
  font-weight: 600;
}

.work-highlights {
  margin: 12px 0 0;
  padding-left: 18px;
  color: var(--text-secondary);
}

.work-highlights li {
  margin-bottom: 6px;
}
</style>
