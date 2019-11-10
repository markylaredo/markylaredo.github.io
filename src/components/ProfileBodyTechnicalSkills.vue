<template>
  <v-container fluid teal lighten-5>
    <v-layout row justify-center justify-space-around>
      <v-flex xs12 md12 sm12 class="text-center">
        <div class="text-center">
          <h3 class="mt-8 headline">Technical Skills</h3>
        </div>
      </v-flex>
      <!-- programming language and frameworks -->
      <v-flex md3 xs9 sm9>
        <h4 class="title my-8 text-center gray--text">
          Programming and Frameworks
          <span>
            <p class="body-1">Program & frameworks I frequently use.</p>
          </span>
        </h4>
        <v-divider class="ma-5"></v-divider>
        <div class="text-center">
          <v-chip-group column>
            <v-tooltip bottom v-for="prg in programing" :key="prg.lang">
              <template v-slot:activator="{ on }">
                <v-chip
                  color="white"
                  pill
                  icon
                  v-on="on"
                  @click="redirect(prg.link)"
                >
                  <v-avatar color="teal lighten-4" left>
                    <v-img :src="prg.icon"></v-img>
                  </v-avatar>
                  {{ prg.lang }}
                </v-chip>
              </template>
              <span>View More info</span>
            </v-tooltip>
          </v-chip-group>
        </div>
      </v-flex>
      <!-- TOOLS -->
      <v-flex md3 xs9 sm9>
        <h4 class="title my-8 text-center gray--text">
          Tools and Libraries
          <span>
            <p class="body-1">Tools and libraries I frequently use.</p>
          </span>
        </h4>
        <v-divider class="ma-5"></v-divider>
        <div class="text-center">
          <v-chip-group column>
            <v-tooltip bottom v-for="tool in tools" :key="tool.lang">
              <template v-slot:activator="{ on }">
                <v-chip
                  color="white"
                  pill
                  icon
                  v-on="on"
                  @click="redirect(tool.link)"
                >
                  <v-avatar color="teal lighten-4" left>
                    <v-img :src="tool.icon"></v-img>
                  </v-avatar>
                  {{ tool.lang }}
                </v-chip>
              </template>
              <span>View More info</span>
            </v-tooltip>
          </v-chip-group>
        </div>
      </v-flex>
      <v-flex md3 xs9 sm9>
        <h4 class="title my-8 text-center gray--text">
          Do Other Stuff
          <span>
            <p class="body-1">I do extra things like:</p>
          </span>
        </h4>
        <v-divider class="ma-5"></v-divider>
        <v-chip-group column>
          <v-chip
            color="white"
            pill
            icon
            v-for="stuff in otherStuffs"
            :key="stuff"
          >
            <v-avatar color="blue lighten-4" left>
              <v-icon color="green">mdi-check</v-icon>
            </v-avatar>
            {{ stuff }}
          </v-chip>
        </v-chip-group>
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
          icon: "https://image.flaticon.com/icons/svg/337/337953.svg",
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
          icon: "https://i.imgur.com/5bHApOu.png",
          lang: "Microsoft SQL Server 2016 - Developer",
          link: "https://www.microsoft.com/en-us/sql-server/sql-server-2016"
        },
        {
          icon: "https://www.apachefriends.org/images/xampp-logo-ac950edf.svg",
          lang: "XAMPP",
          link: "https://www.apachefriends.org/index.html"
        },
        {
          icon:
            "https://www.shareicon.net/data/256x256/2016/08/01/640321_development_512x512.png",
          lang: "MySql",
          link: "https://www.mysql.com/downloads/"
        },
        {
          icon: "https://i.imgur.com/zNNphKL.png",
          lang: "Webpack",
          link: "https://webpack.js.org/"
        },
        {
          icon: "https://i.imgur.com/KBShdIB.png",
          lang: "Internet Information Services (IIS)",
          link: "https://visualstudio.microsoft.com/vs/"
        },
        {
          icon: "https://image.flaticon.com/icons/svg/906/906324.svg",
          lang: "Visual Studio 2019",
          link: "https://visualstudio.microsoft.com/vs/"
        },
        {
          icon:
            "data:image/jpeg;base64,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",
          lang: "Visual Studio Code",
          link: "https://visualstudio.microsoft.com/vs/"
        }
      ],
      otherStuffs: [
        "Format Computer",
        "Configure Computer Network",
        "Computer Hardware troubleshoot"
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
