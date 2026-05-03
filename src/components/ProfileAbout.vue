<template>
  <section id="about" class="section-shell section-about">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" md="11" lg="10">
          <v-card class="panel-card profile-card" rounded="xl">
            <v-card-text class="pa-6 pa-md-10">
              <v-row align="center" class="ga-6">
                <v-col cols="12" md="3" class="text-center text-md-left">
                  <v-avatar :size="160" class="profile-avatar mb-4">
                    <v-img :src="avatarImage" alt="mark anthony">
                      <template #placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="primary"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-avatar>
                  <h2 class="text-h5 font-weight-bold mb-1">{{ myName }}</h2>
                  <p class="role-label mb-4">{{ myJob }}</p>
                  <div
                    class="d-flex flex-wrap justify-center justify-md-start ga-2"
                  >
                    <v-chip color="primary" variant="tonal" size="small"
                      >9+ years experience</v-chip
                    >
                    <v-chip color="secondary" variant="tonal" size="small"
                      >Philippines</v-chip
                    >
                  </div>
                </v-col>
                <v-col cols="12" md="9">
                  <span class="accent-pill mb-3">About Me</span>
                  <h3 class="about-heading mb-3">
                    Building reliable systems for real-world operations
                  </h3>
                  <div class="about-copy">
                    <p class="mb-4 text-body-1">{{ aboutMe }}</p>
                    <p class="mb-4 text-body-1">{{ aboutMe2 }}</p>
                    <p class="mb-4 text-body-1">{{ aboutMe3 }}</p>
                    <p class="mb-4 text-body-1">{{ aboutMe4 }}</p>
                    <p class="text-body-1">{{ aboutMe5 }}</p>
                  </div>
                  <div class="about-focus mt-6">
                    <p class="focus-title mb-3">Core Focus Areas</p>
                    <ul class="focus-list">
                      <li v-for="item in focusAreas" :key="item">{{ item }}</li>
                    </ul>
                  </div>
                  <div v-if="strengths.length" class="strength-grid mt-6">
                    <div
                      v-for="item in strengths"
                      :key="item.title"
                      class="strength-card"
                    >
                      <p class="strength-title mb-1">{{ item.title }}</p>
                      <p class="mb-0 text-body-2">{{ item.description }}</p>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
const avatarImage = new URL("../assets/mark.jpg", import.meta.url).href;

export default {
  data: function () {
    return {
      avatarImage,
      myName: "Mark Anthony Maat Laredo",
      myJob: "Software Developer",
      aboutMe2:
        "I have over 9+ years of professional experience designing and building scalable, secure, and maintainable systems. My work focuses on solving complex, real-world operational challenges through well-structured and efficient software solutions.",
      aboutMe3:
        "I specialize in building .NET Core backend systems and Nuxt.js (Vue.js) frontend applications, supported by strong experience in relational database design (MSSQL, PostgreSQL) and containerized deployments using Docker in Linux environments.",
      aboutMe4:
        "My expertise centers on system architecture and clean implementation. I design scalable and maintainable solutions, emphasizing clear structure, reusability, and long-term system stability.",
      aboutMe5:
        "I have delivered systems featuring event-driven architecture, offline-first capabilities, and enterprise-grade workflows. I work across the full stack - from UI/UX to APIs and infrastructure - with a strong emphasis on performance, maintainability, and long-term system reliability.",
      focusAreas: [
        ".NET Core API architecture and modular backend design",
        "Nuxt.js and Vue.js frontend systems with maintainable structure",
        "Database modeling and optimization for MSSQL and PostgreSQL",
        "Containerized Linux deployments using Docker",
      ],
      strengths: [
        {
          title: "Scalable Delivery",
          description:
            "Design and ship systems that stay reliable as usage grows.",
        },
        {
          title: "Clean Architecture",
          description:
            "Use maintainable structures that make teams faster over time.",
        },
        {
          title: "Long-term Reliability",
          description:
            "Prioritize performance, stability, and sustainable evolution.",
        },
      ],
    };
  },
  computed: {
    aboutMe() {
      return "Hi, I'm Mark Anthony Laredo, a Software Developer based in the Philippines.";
    },
  },
};
</script>

<style scoped>
.section-about {
  margin-top: 0;
  position: relative;
  z-index: 2;
}

.profile-card {
  background: linear-gradient(180deg, #fff 0%, #fafdff 100%);
}

.profile-avatar {
  border: 4px solid #fff;
  box-shadow: 0 20px 35px rgb(12 52 94 / 18%);
}

.role-label {
  color: var(--accent-deep);
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-size: 0.84rem;
}

.about-copy {
  width: 100%;
}

.about-heading {
  color: var(--text-primary);
  font-size: clamp(1.2rem, 1.8vw, 1.5rem);
  line-height: 1.3;
}

.about-copy p {
  color: #3d5268;
}

.about-focus {
  background: #f6f9fd;
  border: 1px solid var(--border-soft);
  border-radius: 12px;
  padding: 16px;
  width: 100%;
}

.focus-title {
  color: var(--text-primary);
  font-size: 0.94rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.focus-list {
  margin: 0;
  padding-left: 18px;
  color: var(--text-secondary);
}

.focus-list li {
  margin-bottom: 6px;
}

.strength-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.strength-card {
  background: var(--bg-subtle);
  border: 1px solid var(--border-soft);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 10px 18px rgb(10 34 58 / 7%);
}

.strength-title {
  color: var(--text-primary);
  font-weight: 700;
}

@media (max-width: 960px) {
  .strength-grid {
    grid-template-columns: 1fr;
  }
}
</style>
