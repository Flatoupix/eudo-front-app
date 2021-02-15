<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
        <v-list dense>
          <template v-for="item in items">
            <v-list-group
              v-if="item.children"
              :key="item.text"
              v-model="item.model"
              :prepend-icon="item.iconPrepend"
              :append-icon="item.model ? item.icon : item['icon-alt']"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              
              <v-list-item v-for="(child, i) in item.children" :key="i" link>
                <v-list-item-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content class="pa-0">
                    <router-link class="pa-0" :to="child.link"><v-list-item-title class="pl-9 lineHeight">{{ child.text }}</v-list-item-title></router-link>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-item v-else :key="item.text" link>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="red darken-3" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
          <span font="2" class="hidden-sm-and-down">Eudo Front </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <span class="text-caption">Version {{ version }}</span>
      </v-app-bar>
      <v-main>
        <v-container class="pa-4 pa-sm-6 pa-md-8" fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import ednField from './components/ednField.vue'

export default {
  components: {
    ednField,
  },
  name: 'App',
  props: {
    source: String,
  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      {
        iconPrepend : 'mdi-folder-sync-outline',
        icon: 'mdi-chevron-up',
        'icon-alt': 'mdi-chevron-down',
        text: 'Features',
        model: false,
        children: [
          {
            text: 'Zone résumer',
            link: '/resume',
          },
        ],
      },
      {
        iconPrepend : 'mdi-widgets-outline',
        icon: 'mdi-chevron-up',
        'icon-alt': 'mdi-chevron-down',
        text: 'Components',
        model: false,
        children: [
          {
            text: 'Edn-fields',
            link: '/',
          },
          {
            text: 'Edn-phone',
            link: '/',
          },
        ],
      },
    ],
  }),
  methods: {},
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap')

html
  *
    // font-family 'Syne Mono', monospace

  a
    // color #fff

  label.theme--light.v-label
    // font-size 18px
    // color #f00

  div.theme--light.v-messages div.v-messages__message
    // font-size 18px

  div.theme--light.v-input input
    // color #00f
    // font-size 10px

  .resum
    border-top 2px solid #bb1515

  .min-w-20
    min-width 20%

  .ellipsis
    white-space nowrap
    overflow hidden
    text-overflow ellipsis

  .v-application--is-ltr .v-list-item__icon:first-child
    margin-right 12px

  .v-application a
    text-decoration none

  .v-list--dense .v-list-item .v-list-item__title.lineHeight
    line-height 32px  
</style>
