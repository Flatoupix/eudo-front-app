<template>
  <v-responsive class="ma-auto overflow-visible" max-width="868px">
    <sectionComponent :item="itemSection">
      <Summary :summaryContent="summary"></Summary>
    </sectionComponent>
  </v-responsive>
</template>

<script>
import Summary from '../components/Summary.vue'
import sectionComponent from '../../sectionComponent.vue'
export default {
  components: { Summary, sectionComponent },
  name: 'SummaryVue',
  data() {
    return {
      itemSection: {
        title: 'Zone résumé',
        description: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Ttranslation by
        H. Rackham. Is to create groups of anything that should be controlled by a
        <strong>Sections 1.10.32 and 1.10.33</strong>.`,
        linkGit: 'https://github.com/Flatoupix/eudo-front-app/blob/resume/src/features/components/Summary.vue',
      },
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
<style lang="stylus"></style>
