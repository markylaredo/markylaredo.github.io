import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: document.documentElement.dataset.theme || 'light',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#f5f5f6',
          secondary: '#a2a2aa',
          surface: '#19191c',
          background: '#111113',
        },
      },
      light: {
        colors: {
          primary: '#19191c',
          secondary: '#696970',
          accent: '#696970',
          surface: '#ffffff',
          background: '#ffffff',
          info: '#2d76b7',
          success: '#17755f',
          warning: '#bd6f1f',
          error: '#ad2f32',
        },
      },
    },
  },
})
