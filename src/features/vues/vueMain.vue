<template>
  <v-app class="overflow-x-auto bg--primary" id="edn-structure">
    <v-app-bar height="90" class="px-0" app clipped-right flat color="#ecf0f5">
      <Summary :summaryContent="summary"></Summary>
    </v-app-bar>

    <v-navigation-drawer class="pr-4 pb-3 bg--primary" app clipped floating right width="400">
      <v-container class="pa-0">
        <HelpAction :helpActionContent="HelpAction"></HelpAction>
      </v-container>
    </v-navigation-drawer>

    <v-main>
      <v-container class="pt-0" fill-height>
        <v-row  class="mx-1 fill-height">
          <v-col style="background-color:red;" cols="4">Content left (stepper)</v-col>
          <v-col style="background-color:green;" cols="8">Content right (zone de saisie)</v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelpAction from '../components/HelpAction.vue'
import Summary from '../components/Summary.vue'
import sectionComponent from '../../sectionComponent.vue'
export default {
  components: { sectionComponent, HelpAction,Summary },
  name: 'vueMain',
  data() {
    return {
      itemSection: {
        title: 'Zone aide et action',
        description: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Ttranslation by
        H. Rackham. Is to create groups of anything that should be controlled by a
        <strong>Sections 1.10.32 and 1.10.33</strong>.`,
        linkGit: 'https://github.com/Flatoupix/eudo-front-app/blob/resume/src/features/components/HelpAction.vue',
      },
      HelpAction: {
        tab: null,
        tabs: [
          {
            slideTitle: 'Action',
          },
        ],
        help: [
          {
            title: 'Aide',
            detail: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from ... <br><a href="https://help" target="_blank">En savoir plus..</a>`,
          },
        ],
        action: [
          {
            title: 'Ajouter une nouvelle société',
            detail: `It has roots in a piece of classical Latin literature from`,
          },
        ],
      },
      drawer: null,
      
      summary: {
        title: {
          Value: '',
          Label: 'Nom',
        },
        sTitle: {
          Value: '',
          Label: 'Fonction principale',
        },
        avatar: {
          Value: 'https://cdn.vuetifyjs.com/images/john.jpg',
          Label: 'Avatar',
          Alt : "une image au hasard"
        }
      },
    }
  },
  methods: {},
  mounted() {},
}
</script>
<style lang="stylus">
html
 overflow auto;

.v-navigation-drawer__content
 background-color #fff

#edn-structure.bg--primary
 background-color #ecf0f5

#edn-structure .bg--primary
 background-color #ecf0f5
</style>
