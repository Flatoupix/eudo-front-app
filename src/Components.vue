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
      <ednField rdonly irisMimic label="edn-fields"></ednField>
    </sectionComponent>
    
    <sectionComponent class="pb-10" :item="ednPhone">
      <ednPhone rdonly irisMimic label="edn-phone"></ednPhone>
      <ednPhone rdonly label="edn-phone"></ednPhone>
    </sectionComponent>
    
    <sectionComponent class="pb-10" :item="ednUrl">
      <ednUrl ednReadOnly rdonly irisMimic label="edn-url"></ednUrl>
      <ednUrl irisMimic label="edn-url"></ednUrl>
      <ednUrl label="edn-url"></ednUrl>
    </sectionComponent>

    
    <sectionComponent class="pb-10" :item="ednCat">
      <ednCat ednReadOnly rdonly irisMimic label="edn-cat"></ednCat>
      <ednCat irisMimic label="edn-cat"></ednCat>
      <ednCat label="edn-cat"></ednCat>
    </sectionComponent>


  </v-responsive>
</template>
<script>
import ednField from './components/ednField'
import ednPhone from './components/ednPhone'
import ednUrl from './components/ednUrl'
import ednCat from './components/ednCat'
import sectionComponent from './sectionComponent'

export default {
  components: {ednField, ednPhone, ednUrl,ednCat, sectionComponent },
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
      ednUrl: {
        title: 'Edn-url',
        description: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Ttranslation byH.
          Rackham.<code>edn-phone</code> is to create groups of anything that should be controlled by a<strong>Sections 1.10.32 and 1.10.33</strong>.`,
        linkGit: 'https://github.com/Flatoupix/eudo-front/blob/master/ednPhone.vue',
      },
      ednCat: {
        title: 'Edn-url',
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
