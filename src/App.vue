<template>
  <v-app :ripple="false">
    <!-- <logo class="mx-auto" :style="{ width: '30em' }"></logo> -->

    <v-form ref="form" class="advFormRenderer">
      <v-container
        class="mt-5 text-xs"
        @click.ctrl="updateTime()"
        @click.alt="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-row>
          <img height="400" src="./components/images/logo.svg" class="mx-auto" />
        </v-row>

        <v-row class="my-10">
          <h2 class="mx-auto">Version {{ version }}</h2>
        </v-row>

        <!-- Zone résumer -->
        <div class="py-2 resum elevation-4">
          <div class="d-flex">
            <div v-if="resum.avatar && resum.avatar.Value != ''" style="padding: 0 0 0 15px;" class="text-center">
              <v-avatar size="48">
                <img :src="resum.avatar.Value" alt="John" />
              </v-avatar>
            </div>
            <div style="overflow: hidden;padding: 0 15px 0 15px;">
              <div>
                <h3 class="ellipsis">
                  {{
                    resum.title.DisplayValue && resum.title.DisplayValue != ''
                      ? resum.title.DisplayValue
                      : resum.title.Value != ''
                      ? resum.title.Value
                      : resum.title.Label
                  }}
                </h3>
              </div>
              <div>
                <h4 class="ellipsis">
                  {{
                    resum.sTitle.DisplayValue && resum.sTitle.DisplayValue != ''
                      ? resum.sTitle.DisplayValue
                      : resum.sTitle.Value != ''
                      ? resum.sTitle.Value
                      : resum.sTitle.Label
                  }}
                </h4>
              </div>
            </div>
          </div>
          <div v-if="inputOn" class="d-flex flex-wrap" color="grey lighten-2" flat tile>
            <div v-for="input in resum.inputs" :key="input.message" class="min-w-20">
              <edn-field class="mx-4 " irisMimic :label="input.Label" />
            </div>
          </div>
        </div>
        <!-- Zone résumer -->
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
import ednField from './components/ednField.vue'
// import apiModule from '@/modules/api.js'

export default {
  components: { ednField },
  name: 'App',
  data() {
    return {
      inputOn : false,
      resum: {
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
  methods: {
    updateTime() {
      this.time = '09:00'
    },
    Validate() {
      this.$refs.form.validate()
    },
    Reset() {
      this.$refs.form.reset()
    },
    testUrl(event) {
      console.log(event)
    },
  },
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
