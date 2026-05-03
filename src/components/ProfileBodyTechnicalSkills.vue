<template>
  <section id="skills" class="section-shell">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="11" md="10" lg="9">
          <div class="mb-8">
            <span class="accent-pill mb-3">Technical Skills</span>
            <h2 class="section-title">
              Modern engineering stack for product delivery
            </h2>
            <p class="section-subtitle">
              Technologies and tools I use to design, ship, and maintain robust
              web applications.
            </p>
          </div>
          <v-row>
            <v-col cols="12" md="4">
              <v-card class="panel-card h-100" rounded="xl">
                <v-card-text>
                  <h3 class="text-h6 font-weight-bold mb-2">
                    Programming & Frameworks
                  </h3>
                  <p class="mb-4">
                    Core technologies I use in daily production work.
                  </p>
                  <div class="chip-wrap">
                    <v-chip
                      v-for="prg in programing"
                      :key="prg"
                      prepend-icon="mdi-check-circle-outline"
                      color="primary"
                      variant="flat"
                      class="skill-chip"
                      rounded="md"
                    >
                      {{ prg }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card class="panel-card h-100" rounded="xl">
                <v-card-text>
                  <h3 class="text-h6 font-weight-bold mb-2">
                    Tools & Platforms
                  </h3>
                  <p class="mb-4">
                    Build, deployment, and infrastructure tools that support
                    delivery.
                  </p>
                  <div class="chip-wrap">
                    <v-chip
                      v-for="tool in tools"
                      :key="tool"
                      prepend-icon="mdi-check-circle-outline"
                      color="primary"
                      variant="flat"
                      class="skill-chip"
                      rounded="md"
                    >
                      {{ tool }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card class="panel-card h-100" rounded="xl">
                <v-card-text>
                  <h3 class="text-h6 font-weight-bold mb-2">
                    Additional Expertise
                  </h3>
                  <p class="mb-4">
                    Cross-functional architecture and optimization capabilities.
                  </p>
                  <div class="chip-wrap">
                    <v-chip
                      v-for="stuff in otherStuffs"
                      :key="stuff"
                      prepend-icon="mdi-check-decagram-outline"
                      color="secondary"
                      variant="flat"
                      rounded="md"
                      class="skill-chip skill-chip--secondary"
                    >
                      {{ stuff }}
                    </v-chip>
                  </div>
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
export default {
  data() {
    return {
      programing: [
        ".NET Core",
        "ASP.NET MVC",
        "JavaScript / TypeScript",
        "Vue.js",
        "Nuxt.js",
        "C#",
        "SQL",
      ],
      tools: [
        "Docker",
        "Linux Server",
        "IIS",
        "MSSQL / PostgreSQL",
        "Git",
        "REST APIs",
      ],
      otherStuffs: [
        "JWT Authentication",
        "System Architecture Design",
        "Performance Optimization",
        "Deployment & DevOps",
        "Offline-first Systems",
        "Event-driven Systems",
      ],
    };
  },
};
</script>

<style scoped>
.chip-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-chip {
  border: 1px solid #cdd9e6;
  background: #f8fbff !important;
  color: #1d3d5a !important;
  font-weight: 600;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.skill-chip--secondary {
  background: #f4f7fb !important;
}

.skill-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgb(13 62 101 / 14%);
}
</style>
