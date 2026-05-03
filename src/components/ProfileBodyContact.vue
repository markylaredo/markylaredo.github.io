<template>
  <section id="contact" class="section-shell section-shell--tight">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="11" md="10" lg="9">
          <v-card class="panel-card pa-3 pa-md-6" rounded="xl">
            <div class="mb-7 text-center text-md-left">
              <span class="accent-pill mb-3">Contact</span>
              <h2 class="section-title">Let us discuss your next project</h2>
              <p class="section-subtitle mb-0">
                Open for collaboration, consulting, and full-cycle development
                support.
              </p>
            </div>
            <v-row>
              <v-col
                cols="12"
                md="6"
                v-for="method in contactMethods"
                :key="method.title"
              >
                <a
                  class="contact-card d-flex flex-column align-center text-center"
                  :href="method.href"
                  :target="method.target"
                >
                  <v-avatar :color="method.bgColor" size="62" class="mb-4">
                    <v-icon :color="method.iconColor" size="32">{{
                      method.icon
                    }}</v-icon>
                  </v-avatar>
                  <h3 class="text-subtitle-1 font-weight-bold mb-2">
                    {{ method.title }}
                  </h3>
                  <p class="text-body-2 mb-0">{{ method.label }}</p>
                </a>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.contact-card {
  text-decoration: none;
  color: var(--text-primary);
  background: linear-gradient(180deg, #f9fcff 0%, #fff 100%);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  min-height: 196px;
  justify-content: center;
  padding: 24px 18px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 30px rgb(10 62 102 / 14%);
}

.contact-card p {
  color: var(--text-secondary);
}
</style>

<script>
export default {
  data() {
    return {
      contactMethods: [
        {
          title: "Location",
          label: "Rizal, Occidental Mindoro, Philippines",
          href: "https://maps.google.com/?q=Rizal,+Occidental+Mindoro,+Philippines",
          target: "_blank",
          icon: "mdi-map-marker",
          bgColor: "#e9f4ff",
          iconColor: "#1b6db3",
        },
        {
          title: "Email",
          label: "laredomarkanthony@hotmail.com",
          href: "mailto:laredomarkanthony@hotmail.com",
          target: "_blank",
          icon: "mdi-email-outline",
          bgColor: "#fff1e8",
          iconColor: "#b85612",
        },
        {
          title: "Phone",
          label: "0975-714-5686",
          href: "tel:09757145686",
          target: "_self",
          icon: "mdi-phone-classic",
          bgColor: "#eaf9f1",
          iconColor: "#1f8b57",
        },
        {
          title: "Website",
          label: "markanthonylaredo.ml",
          href: "https://markanthonylaredo.ml",
          target: "_blank",
          icon: "mdi-web",
          bgColor: "#f2ebff",
          iconColor: "#6d3eb6",
        },
        {
          title: "LinkedIn",
          label: "mark-laredo",
          href: "https://www.linkedin.com/in/mark-laredo",
          target: "_blank",
          icon: "mdi-linkedin",
          bgColor: "#e5f2ff",
          iconColor: "#0f63b1",
        },
      ],
    };
  },
};
</script>
