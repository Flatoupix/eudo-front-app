import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'
import fr from 'vuetify/es5/locale/fr'
import eudoFront from './components/eudo-front'

Vue.use(eudoFront)

const opts = {
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#bb1515',
        secondary: '#757575',
        link: '#1CA6FD',
      },
      dark: {
        primary: '#bb1515',
        secondary: '#757575',
      },
    },
  },
  lang: {
    locales: { fr },
    current: 'fr',
  },
}
Vue.use(Vuetify)

new Vue({
  vuetify: new Vuetify(opts),
  render: h => h(App),
}).$mount('#app')
