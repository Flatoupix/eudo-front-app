<template>
  <div>
    <v-responsive class="ma-auto overflow-visible" max-width="868px">
      <h2 class="v-heading text-h3 text-sm-h3 mb-4"><a color="black" href="#Resum"> #Aide et Action</a></h2>
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
                <v-btn target="_blank" href="https://github.com/Flatoupix/eudo-front-app/blob/resume/src/features/HelpAction.vue" icon>
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </span>
            </div>
          </v-lazy>
          <v-sheet outlined rounded>
            <v-container class="pa-4 pa-sm-6 pa-md-8" fluid>
              <v-col class="ma-auto" md="7">
                <v-card color="basil">
                  <v-tabs v-model="tab" background-color="transparent" color="#bb1515" grow>
                    <v-tab v-for="tab in tabs" :key="tab.id">
                      {{ tab.slideTitle }}
                    </v-tab>
                  </v-tabs>
                  <v-tabs-items v-model="tab">
                    <v-tab-item>
                      <v-card
                        v-for="(content, index) in contents"
                        :key="content.id"
                        class="pa-3 pt-0"
                        color="basil"
                        flat
                      >
                        <v-card-title v-if="content.title && content.title != ''" class="pb-1 pt-0">
                          {{ content.title }}
                          <ednBtn v-if="content.rubriques" class="ml-2" x-small icon color="primary"><v-icon>mdi-open-in-new</v-icon></ednBtn>
                        </v-card-title>

                        <v-card-subtitle v-if="content.subTitle && content.subTitle != ''" class="pt-2 pb-1">
                          {{ content.subTitle }}
                        </v-card-subtitle>

                        <v-card-text
                          v-if="content.text && content.text != ''"
                          class="text--primary pb-0 text-md-body-1"
                        >
                          {{ content.text }}
                        </v-card-text>

                        <v-card-actions v-if="content.link && content.link != ''" class="py-0">
                          <v-btn text small color="blue">
                            <a :href="'https://' + content.link" target="_blank">En savoir plus..</a>
                          </v-btn>
                        </v-card-actions>

                        <div v-if="content.rubriques" class="my-2 py-2 mx-4 resum elevation-2">
                          <v-col class="py-0 md-12" v-for="rubrique in content.rubriques" :key="rubrique.id">
                            <ednField label="edn-fields"></ednField>
                          </v-col>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <edn-btn validation>Enregistrer</edn-btn>
                          </v-card-actions>
                        </div>
                        <v-divider v-if="index < 1" class="divider--help"></v-divider>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-card>
              </v-col>
            </v-container>
          </v-sheet>
        </v-sheet>
      </section>
    </v-responsive>
  </div>
</template>

<script>
import ednField from '../components/ednField.vue'
import ednBtn from '../components/ednBtn.vue'

export default {
  components: { ednField, ednBtn },
  name: 'Resume',
  data() {
    return {
      inputOn: false,
      tab: null,
      tabs: [
        {
          slideTitle: 'Action',
        },
      ],
      contents: [
        {
          title: 'Aide',
          subTitle: 'Voici une aide qui pourrait vous aidez',
          text:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from ...',
          link: 'help',
        },
        {
          title: 'Ajouter une nouvelle société',
          subTitle: 'Remplissez les champs ci dessous',
          text: '',
          link: '',
          rubriques: [
            {
              descId: 201,
            },
            {
              descId: 202,
            },
            {
              descId: 203,
            },
            {
              descId: 204,
            },
          ],
        },
      ],
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

   .v-tabs-slider-wrapper
    top 0
    max-width 150px

   .v-tabs--grow > .v-tabs-bar .v-tab
     max-width 150px

   .divider--help
    margin-top 10px
</style>
