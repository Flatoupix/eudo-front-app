<template>
  <v-responsive class="ma-auto overflow-visible" max-width="868px">
    <v-form ref="form" class="advFormRenderer">
      <v-row>
        <img height="250" src="./components/images/logo.svg" class="mx-auto" />
      </v-row>
      <v-row class="my-10">
        <h2 class="mx-auto">Version {{ version }}</h2>
      </v-row>
    </v-form>

    <sectionComponent class="pb-10" :item="ednField">
      <ednField irisMimic label="edn-fields"></ednField>
    </sectionComponent>
    
    <sectionComponent class="pb-10" :item="ednPhone">
      <ednPhone irisMimic label="edn-phone"></ednPhone>
      <ednPhone label="edn-phone"></ednPhone>
    </sectionComponent>


  </v-responsive>
</template>
<script>
import ednField from './components/ednField.vue'
import ednPhone from './components/ednPhone.vue'
import sectionComponent from './sectionComponent.vue'

export default {
  components: {ednField, ednPhone, sectionComponent },
  name: 'Components',
  data() {
    return {
      ednField: {
        title: 'Edn-Fields',
        description: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Ttranslation byH.
          Rackham.<code>edn-phone</code> is to create groups of anything that should.`,
        linkGit: 'https://github.com/Flatoupix/eudo-front/blob/master/ednFields.vue',
      },
      ednPhone: {
        title: 'Edn-Phone',
        description: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Ttranslation byH.
          Rackham.<code>edn-phone</code> is to create groups of anything that should be controlled by a<strong>Sections 1.10.32 and 1.10.33</strong>.`,
        linkGit: 'https://github.com/Flatoupix/eudo-front/blob/master/ednPhone.vue',
      },
    }
  },
  methods: {},
  mounted() {
    // this.$vuetify.theme.dark = true
  },
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
</style>
