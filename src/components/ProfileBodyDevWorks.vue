<template>
  <v-img :src="require('@/assets/vs_code_background.jpg')">
    <v-container fluid>
      <v-layout row justify-center>
        <v-flex xs12 md12 sm12>
          <div class="text-center white--text">
            <h3 class="my-8 headline">My Works</h3>
          </div>
        </v-flex>

        <v-flex xs12 md11 sm12>
          <v-slide-group show-arrows :center-active="true" dark>
            <v-slide-item
              v-for="(work, i) in works"
              :key="work + i"
              #default="{ active, toggle }"
            >
              <v-card
                light
                class="ma-4"
                :elevation="8"
                width="300"
                @click="toggle"
              >
                <v-carousel
                  delimiter-icon="mdi-minus"
                  cycle
                  hide-delimiter-background
                  show-arrows-on-hover
                  height="200"
                  :interval="work.interval"
                >
                  <v-carousel-item v-for="img in work.images" :key="img">
                    <v-img
                      max-height="500"
                      :src="require(`@/assets/myWorks/${img}`)"
                      :alt="img"
                    >
                      <template #placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="light-blue accent-2 "
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-carousel-item>
                </v-carousel>
                <!-- <v-card-title v-text="work.system"></v-card-title> -->
                <v-divider></v-divider>
                <v-card-text>
                  <h4 class="gray--text">System</h4>
                  <p class="black--text text-wrap">{{ work.description }}</p>
                  <h4 class="gray--text">Platform</h4>
                  <p class="black--text">{{ work.platform }}</p>
                  <h4 class="gray--text">Written in</h4>
                  <p class="black--text">{{ work.writtenIn }}</p>
                </v-card-text>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>
<script>
export default {
  data() {
    return {
      works: [
        {
          images: [
            "irc_dashboard.png",
            "irc_login.png",
            "irc_student_Info.png"
          ],
          system: "IRC System",
          description:
            "Innovative Realtime Card System with SMS Notification and Parent Portal",
          platform: "ASP.NET Web Forms",
          writtenIn: "C#",
          interval: Math.floor(Math.random() * 1000 + 5000)
        },
        {
          images: ["oms_login.jpg", "oms_dashboard.jpg", "oms_insights.jpg"],
          system: "Loan Management System",
          description: "OMS Multipurpose Cooperative Loan Management System",
          platform: "VB.Net - Forms",
          writtenIn: "Visual Basic .Net",
          interval: Math.floor(Math.random() * 1000 + 5000)
        },
        {
          images: [
            "stl_login.png",
            "stl_dashboard.png",
            "stl_employee_info.png"
          ],
          system: "HRP System",
          description:
            "Human Resource and Payroll System with Face Recognition",
          platform: "ASP.NET MVC",
          writtenIn: "C#",
          interval: Math.floor(Math.random() * 1000 + 5000)
        },
        {
          images: [
            "sby_job_portal_0.jpeg",
            "sby_job_portal_1.jpeg",
            "sby_job_portal_2.jpeg",
            "sby_job_portal_3.jpeg",
            "sby_job_portal_4.jpeg",
            "sby_job_portal_5.jpeg",
            "sby_job_portal_6.jpeg"
          ],
          system: "Sablayan Job Portal",
          description: "Online job portal for municipality of sablayan",
          platform: ".Net Core & Nuxt.js",
          writtenIn: "C#",
          interval: Math.floor(Math.random() * (6000 - 5800) + 5000)
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
            "irc_bulk_sms_log_stats.jpg"
          ],
          system: "IRC Bulk SMS",
          description: "IRC Bulk SMS Announcement",
          platform: "Windows Forms",
          writtenIn: "C#",
          interval: Math.floor(Math.random() * 1000 + 5000)
        }
      ]
    };
  }
};
</script>
