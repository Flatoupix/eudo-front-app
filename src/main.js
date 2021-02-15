import Vue from 'vue'
import App from './App.vue'
import Components from './Components.vue'
import Resume from './features/Resume.vue'
import Vuetify from 'vuetify/lib'
import fr from 'vuetify/es5/locale/fr'
import eudoFront from './components/eudo-front'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
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

const routes = [
  { path: '/', component: Components },
  { path: '/resume', component: Resume }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})


Vue.use(Vuetify)
new Vue({
  router,
  vuetify: new Vuetify(opts),
  render: h => h(App),
}).$mount('#app')
