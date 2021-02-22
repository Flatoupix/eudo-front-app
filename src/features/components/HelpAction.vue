<template>
  <!-- Debut aide et action-->
  <v-card flat class="helpAction">
    <!-- Debut tabs bar -->
    <v-tabs v-model="helpActionContent.tab">
      <v-tab v-for="tab in helpActionContent.tabs" :key="tab.id">
        {{ tab.slideTitle }}
      </v-tab>
    </v-tabs>
    <!-- Fin tabs bar -->

    <!-- Debut tabs bar content-->
    <v-tabs-items v-model="helpActionContent.tab">
      <v-tab-item>
        <!-- Debut aide -->
        <v-card v-for="item in helpActionContent.help" :key="item.id" class="pa-3 pt-0" flat>
          <!-- Debut aide titre -->
          <v-card-title v-html="item.title" class="pb-1 pt-0"></v-card-title>
          <!-- Fin aide titre -->

          <!-- Debut aide description -->
          <v-card-text v-html="item.detail" class="text--primary pb-0 text-md-body-1"></v-card-text>
          <!-- Fin aide description -->
        </v-card>
        <!-- Fin aide -->

        <!-- Debut action -->
        <v-card v-for="item in helpActionContent.action" :key="item.id" class="pa-3 pt-0" flat>
          <!-- Debut action titre -->
          <v-card-title class="pb-1 pt-0">
            {{ item.title }}
            <ednBtn class="ml-2" x-small icon color="primary">
              <v-icon>mdi-open-in-new</v-icon>
            </ednBtn>
          </v-card-title>
          <!-- Fin action titre -->

          <!-- Debut action description -->
          <v-card-text v-html="item.detail" class="text--primary pb-0 text-md-body-1"></v-card-text>
          <!-- Fin action description -->

          <!-- Debut action content -->
          <v-card v-if="actionContentAdded" class="pa-3" flat>
            <slot name="actionContent"></slot>
          </v-card>
          <!-- Fin action content -->
        </v-card>
        <!-- Fin action -->
      </v-tab-item>
    </v-tabs-items>
    <!-- Fin tabs bar content-->
  </v-card>
  <!-- Fin aide et action-->
</template>

<script>
import ednBtn from '../../components/ednBtn.vue'
export default {
  components: {ednBtn },
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
  
  computed: {
    actionContentAdded() {
      return this.$slots['actionContent']?.length > 0
    }
  },
  methods: {},
  mounted() {},
}
</script>
<style lang="stylus">

.helpAction .v-tabs-slider-wrapper
 top 0
 max-width 150px

.helpAction .v-tabs--grow > .v-tabs-bar .v-tab
 max-width 150px
</style>
