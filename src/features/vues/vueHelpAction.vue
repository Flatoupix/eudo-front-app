<template>
  <v-responsive class="ma-auto overflow-visible" max-width="868px">
    <sectionComponent :item="itemSection">
      <v-col class="ma-auto" md="7">
        <HelpAction :helpActionContent="HelpAction"></HelpAction>
      </v-col>
    </sectionComponent>
  </v-responsive>
</template>

<script>
import HelpAction from '../components/HelpAction.vue'
import sectionComponent from '../../sectionComponent.vue'
export default {
  components: { HelpAction, sectionComponent },
  name: 'HelpActionVue',
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
    }
  },
  methods: {},
  mounted() {},
}
</script>
<style lang="stylus"></style>
