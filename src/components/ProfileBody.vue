<template>
  <v-container fluid teal lighten-5>
    <v-layout row justify-center justify-space-around>
      <v-flex xs12 md12 sm12 class="text-center">
        <div class="text-center">
          <h3 class="headline--text my-8 headline">Technical Skills</h3>
        </div>
      </v-flex>
      <!-- programming language and frameworks -->
      <v-flex md3 xs9 sm9>
        <h4 class="subtitle-1 text-center gray--text">Programming and Frameworks</h4>
        <v-divider class="ma-5"></v-divider>
        <div class="text-center">
          <v-chip-group column>
            <v-tooltip bottom v-for="prg in programing" :key="prg.lang">
              <template v-slot:activator="{ on }">
                <v-chip color="white" pill icon v-on="on" @click="redirect(prg.link)">
                  <v-avatar v-on="on" color="teal lighten-4" left>
                    <v-img :src="prg.icon"></v-img>
                  </v-avatar>
                  {{prg.lang}}
                </v-chip>
              </template>
              <span>View More info</span>
            </v-tooltip>
          </v-chip-group>
        </div>
      </v-flex>
      <!-- TOOLS -->
      <v-flex md3 xs9 sm9>
        <h4 class="subtitle-1 text-center gray--text">Tools and Libraries</h4>
        <v-divider class="ma-5"></v-divider>
        <div class="text-center">
          <v-chip-group column>
            <v-chip color="white" pill v-for="tool in tools" :key="tool.icon">
              <v-avatar color="teal" left>
                <v-icon v-if="tool.iconType==='icon'" class="white--text" v-html="tool.icon"></v-icon>
                <v-img v-if="tool.iconType==='img'" :src="tool.icon"></v-img>
                <span v-else class="white--text">{{tool.icon}}</span>
              </v-avatar>
              {{tool.lang}}
            </v-chip>
          </v-chip-group>
        </div>
      </v-flex>
      <v-flex md3 xs9 sm9>
        <h4 class="subtitle-1 text-center gray--text">Tools and Libraries</h4>
        <v-divider class="ma-5"></v-divider>
        <h4 class="subtitle-2 text-center">On Development...</h4>
      </v-flex>
    </v-layout>

    <v-layout row justify-center align-center>
      <v-flex xs12 md12 sm12 class="text-center">
        <div class="text-center">
          <h3 class="teal--text my-8 title">Work Experience</h3>
        </div>
      </v-flex>
      <v-flex md5 xs9 mb-12>
        <h4 class="subtitle-2 text-center">On Development...</h4>
      </v-flex>
    </v-layout>

     <v-layout row justify-center align-center>
      <v-flex xs12 md12 sm12 class="text-center">
        <div class="text-center">
          <h3 class="teal--text my-8 title">My Works</h3>
        </div>
      </v-flex>
      <v-flex md5 xs9 mb-12>
        <h4 class="subtitle-2 text-center">On Development...</h4>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      programing: [
        {
          icon:
            "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
          lang: "Vue JS",
          link: "https://vuejs.org/"
        },
        {
          icon:
            "https://camo.githubusercontent.com/41759602ad091b02adf7b4986b55b0a870471b98/68747470733a2f2f63646e2e767565746966796a732e636f6d2f696d616765732f6c6f676f732f6c6f676f2e737667",
          lang: "Vuetify",
          link: "https://vuetifyjs.com/en/"
        },
        {
          icon:
            "https://camo.githubusercontent.com/06b2f979b4fbab8f1822cab69783700f0afa1f90/68747470733a2f2f6e7578746a732e6f72672f6d6574615f3430302e706e67",
          lang: "Nuxt JS",
          link: "https://nuxtjs.org/"
        },
        {
          icon:
            "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg",
          lang: "C Sharp",
          link: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
        },
        {
          icon:
            "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
          lang: ".Net Core",
          link: "https://en.wikipedia.org/wiki/.NET_Core"
        },
        {
          icon:
            "https://seeklogo.com/images/M/microsoft-net-logo-631EFE744A-seeklogo.com.png",
          lang: "Microsoft .NET Framework",
          link:
            "https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity"
        },
        {
          icon:
            "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
          lang: "Identity Framework",
          link:
            "https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity"
        },
        {
          iconType: "text",
          icon: "https://i.imgur.com/5bHApOu.png",
          lang: "SQL",
          link: "https://en.wikipedia.org/wiki/Microsoft_SQL_Server"
        },
        {
          icon:
            "https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg",
          lang: "Visual Basic .NET",
          link: "https://en.wikipedia.org/wiki/Visual_Basic_.NET"
        },
        {
          icon:
            "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
          lang: "HTML5",
          link: "https://en.wikipedia.org/wiki/HTML5"
        },
        {
          icon:
            "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png",
          lang: "Java Script",
          link: "https://en.wikipedia.org/wiki/JavaScript"
        },
        {
          icon: "https://miro.medium.com/max/800/0*g3ns8QALNBBH7CBA.",
          lang: "JQuery",
          link: "https://jquery.com/"
        }
      ],
      tools: [
        {
          icon: "SQL",
          lang: "Structured Query Language",
          link: ""
        }
      ]
    };
  },
  methods: {
    redirect(link) {
      if (!link || link.length <= 0) return;
      window.open(link, "_blank");
    }
  }
};
</script>
