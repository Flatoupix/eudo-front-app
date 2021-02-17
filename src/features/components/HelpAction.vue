<template>
  <v-card color="basil">
    <v-tabs v-model="helpActionContent.tab" background-color="transparent" color="#bb1515" grow>
      <v-tab v-for="tab in helpActionContent.tabs" :key="tab.id">
        {{ tab.slideTitle }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="helpActionContent.tab">
      <v-tab-item>
        <v-card
          v-for="(content, index) in helpActionContent.contents"
          :key="content.id"
          class="pa-3 pt-0"
          color="basil"
          flat
        >
          <v-card-title v-if="content.title && content.title != ''" class="pb-1 pt-0">
            {{ content.title }}
            <ednBtn v-if="content.rubriques" class="ml-2" x-small icon color="primary">
              <v-icon>mdi-open-in-new</v-icon>
            </ednBtn>
          </v-card-title>

          <v-card-subtitle v-if="content.subTitle && content.subTitle != ''" class="pt-2 pb-1">
            {{ content.subTitle }}
          </v-card-subtitle>

          <v-card-text v-if="content.text && content.text != ''" class="text--primary pb-0 text-md-body-1">
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
</template>

<script>
import ednField from '../../components/ednField.vue'
import ednBtn from '../../components/ednBtn.vue'

export default {
  components: { ednField, ednBtn },
  name: 'HelpActionComponent',
  data() {
    return {}
  },
  props: {
    helpActionContent: {
      type: Object,
      default: () => {},
    },
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
