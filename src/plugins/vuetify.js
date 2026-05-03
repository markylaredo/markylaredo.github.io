import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#0d8f8a",
          secondary: "#264765",
          accent: "#f1863f",
          surface: "#ffffff",
          background: "#f4f7fb",
          info: "#2d76b7",
          success: "#17755f",
          warning: "#bd6f1f",
          error: "#ad2f32",
        },
      },
    },
  },
});
