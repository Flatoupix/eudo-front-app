<template>
  <div>
    <v-responsive class="ma-auto overflow-visible" max-width="868px">
      <h2 class="v-heading text-h3 text-sm-h3 mb-4"><a color="black" href="#Resum"> #Zone résumer</a></h2>
      <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Ttranslation by
        H. Rackham. Is to create groups of anything that should be controlled by a
        <strong>Sections 1.10.32 and 1.10.33</strong>.
      </p>
      <section id="Resum">
        <v-sheet class="mb-9" outlined rounded>
          <v-lazy min-height="52" transition="fade-transition">
            <div class="text-end pa-2">
              <span class="d-inline-block">
                <v-btn target="_blank" href="https://github.com/Flatoupix/eudo-front/blob/master/ednPhone.vue" icon>
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </span>
            </div>
          </v-lazy>
          <v-sheet outlined rounded>
            <v-container class="pa-4 pa-sm-6 pa-md-8" fluid>
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
          </v-sheet>
        </v-sheet>
      </section>
    </v-responsive>
  </div>
</template>

<script>
import ednField from '../components/ednField.vue'

export default {
  components: { ednField },
  name: 'Resume',
  data() {
    return {
      inputOn: false,
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
  methods: {},
  mounted() {},
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
