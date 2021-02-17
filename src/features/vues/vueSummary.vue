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
        inputOn: false,
        title: {
          Value: '',
          Label: 'Nom',
        },
        sTitle: {
          DisplayValue: '',
          Value: '',
          Label: 'Fonction principale',
        },
        avatar: {
          //Value: '',
          Value: 'https://cdn.vuetifyjs.com/images/john.jpg',
          Label: 'Avatar',
        },
        inputs: [
          {
            DisplayValue: 'Prospect',
            Value: '2124',
            Label: 'Catégorie',
          },
          {
            DisplayValue: 'JOHANNA',
            Value: '10068',
            Label: 'Appartient à',
          },
          {
            Value: '',
            Label: 'Linkedin',
          },
          {
            DisplayValue: 'BENEDETTI Didier',
            Value: '3078',
            Label: 'N+1',
          },
          {
            DisplayValue: 'D',
            Value: '13',
            Label: 'Scoring',
          },
          {
            Value: '',
            Label: 'login kha',
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
