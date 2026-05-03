<template>
  <section id="home" class="hero-wrap">
    <v-parallax dark height="680" :src="heroImage">
      <div class="hero-overlay">
        <v-container class="hero-container" fluid>
          <div class="hero-topbar">
            <div class="brand-lockup">
              <span class="brand-mark">ML</span>
              <div>
                <p class="brand-name mb-0">Mark Anthony Laredo</p>
                <p class="brand-role mb-0">
                  Software Engineer / Software Developer
                </p>
              </div>
            </div>
            <div class="hero-nav d-none d-md-flex">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <v-row align="center" justify="center" class="hero-main-row">
            <v-col cols="11" md="9" lg="8" class="text-center">
              <h1
                class="hero-title text-h4 text-sm-h3 text-md-h2 mb-4"
                v-text="message"
              ></h1>
              <p class="hero-description mx-auto" v-text="description"></p>
              <div class="d-flex justify-center flex-wrap ga-3 mt-7">
                <v-btn
                  color="primary"
                  size="large"
                  rounded="xl"
                  href="#projects"
                >
                  View Projects
                </v-btn>
                <v-btn
                  color="white"
                  variant="outlined"
                  size="large"
                  rounded="xl"
                  href="#contact"
                >
                  Contact Me
                </v-btn>
              </div>
              <div class="hero-stats mt-8">
                <div
                  v-for="stat in stats"
                  :key="stat.label"
                  class="hero-stat-card"
                >
                  <strong>{{ stat.value }}</strong>
                  <span>{{ stat.label }}</span>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-parallax>
  </section>
</template>

<script>
const heroImage = new URL("../assets/keep_calm_and_code.jpg", import.meta.url)
  .href;

export default {
  data() {
    return {
      heroImage,
      message: "Engineering Reliable Web Platforms and Business Systems",
      description:
        "Design and build dependable business applications using .NET and Vue/Nuxt with a focus on clarity, maintainability, and real-world operational support.",
      stats: [
        {
          value: "9+",
          label: "Years of professional experience",
        },
        {
          value: "Full-stack",
          label: "UI/UX to APIs and infrastructure",
        },
        {
          value: ".NET + Vue/Nuxt",
          label: "Core development stack",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero-wrap {
  position: relative;
}

.hero-wrap :deep(.v-parallax) {
  border-bottom: 1px solid rgb(255 255 255 / 10%);
}

.hero-container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  margin: 0 auto;
}

.hero-overlay {
  height: 100%;
  background: linear-gradient(180deg, rgb(6 21 38 / 54%), rgb(6 22 41 / 70%));
}

.hero-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 26px 20px 8px;
}

.brand-lockup {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: rgb(255 255 255 / 12%);
  border: 1px solid rgb(255 255 255 / 15%);
  color: #fff;
  font-family: "Sora", "Manrope", sans-serif;
  font-weight: 700;
}

.brand-name,
.brand-role,
.hero-nav a {
  color: #f1f6fb;
}

.brand-name {
  font-weight: 700;
}

.brand-role {
  font-size: 0.9rem;
  color: rgb(241 246 251 / 78%);
}

.hero-nav {
  gap: 18px;
  padding: 8px 14px;
  border: 1px solid rgb(255 255 255 / 18%);
  border-radius: 999px;
  background: rgb(255 255 255 / 7%);
}

.hero-nav a {
  text-decoration: none;
  font-size: 0.9rem;
  color: rgb(240 246 252 / 88%);
  transition: color 0.2s ease;
}

.hero-nav a:hover {
  color: #fff;
}

.hero-main-row {
  flex: 1;
  padding-bottom: 42px;
}

.hero-title {
  max-width: 860px;
  margin: 0 auto;
  line-height: 1.08;
  text-wrap: balance;
  color: #f5f9ff;
  text-shadow: 0 6px 18px rgb(5 17 29 / 36%);
}

.hero-description {
  max-width: 720px;
  color: rgb(236 246 255 / 94%);
  font-size: clamp(1.03rem, 1.3vw, 1.2rem);
  font-weight: 500;
}

.hero-main-row :deep(.v-btn) {
  letter-spacing: 0.03em;
  font-weight: 700;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  max-width: 920px;
  margin-left: auto;
  margin-right: auto;
}

.hero-stat-card {
  padding: 16px;
  border-radius: 12px;
  background: rgb(255 255 255 / 92%);
  border: 1px solid rgb(255 255 255 / 32%);
}

.hero-stat-card strong {
  display: block;
  color: #133252;
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.hero-stat-card span {
  color: #3f5a75;
  font-size: 0.86rem;
}

@media (max-width: 768px) {
  .hero-wrap :deep(.v-parallax) {
    min-height: 760px;
  }

  .hero-topbar {
    padding: 18px 14px 0;
  }

  .brand-role {
    font-size: 0.82rem;
  }

  .hero-title {
    font-size: clamp(2rem, 8.2vw, 2.8rem) !important;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .hero-main-row {
    padding-bottom: 22px;
  }
}
</style>
