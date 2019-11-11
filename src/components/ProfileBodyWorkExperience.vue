<template>
  <v-container fluid light-blue accent-1>
    <v-layout row justify-center align-center>
      <v-flex xs11 md11 sm11 class="text-center">
        <div class="text-center">
          <h3 class="my-8 headline">Work Experience</h3>
        </div>
      </v-flex>
      <v-flex md8 xs11 mb-11 class="text-center">
        <v-timeline>
          <v-timeline-item
            v-for="(work, i) in works"
            :key="i"
            :icon="work.icon"
            :color="work.color"
            fill-dot
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold `"
                v-text="work.year"
              ></span>
            </template>
            <div class="py-4">
              <h2
                :class="`headline font-weight-light mb-4`"
                v-text="work.work"
              ></h2>
              <div>
                <h4 class="subtitle-1">{{ work.where }}</h4>
                <p class="caption">{{ work.addr }}</p>
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    works: [
      {
        color: "blue",
        icon: "mdi-briefcase-account",
        year: "08/2014 - 10/2014",
        work: "Technical Support Intern",
        where: "San Jose Police Station (SJMPS)",
        addr: "San Jose, Occidental Mindoro"
      },
      {
        color: "blue",
        icon: "mdi-briefcase-account",
        year: "04/03/2016 - 03/02/2018",
        work: "Software Engineer",
        where: "Jade Phone English Tutorial Service",
        addr: "Rm.201-A Culmat Bldg. E.Rodriguez Sr. Ave. Brgy. Mariana 1112"
      },
      {
        color: "blue",
        icon: "mdi-briefcase-account",
        year: "03/05/2018 - 03/20/2019",
        work: "Software Engineer",
        where: "Binary Data Frame Corporation",
        addr:
          "2nd Floor San Lorenzo Ruiz Building, Gloria Diaz Street, BF Resort Dr, Village, Las Pinas, 1740 Metro Manila"
      }
    ]
  })
};
</script>
