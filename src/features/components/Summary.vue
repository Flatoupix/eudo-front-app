<template>
  <!-- Debut summary-->
  <v-container style="background-color:#fff;" color="red" fluid class="ma-0 summary py-2">
    <!-- Debut en-tête - avatar / titre / sous-titre -->
    <v-row no-gutters>
      <!-- Debut avatar -->
      <v-col md="auto" align-self="center">
        <v-avatar size="48">
          <img :src="summaryContent.avatar.Value" :alt="summaryContent.avatar.Alt"/>
        </v-avatar>
      </v-col>
      <!-- Debut avatar -->

      <!-- Debut titre / sous-titre -->
      <v-col class="px-3" cols="11">
        <!-- Debut titre -->
        <v-row no-gutters>
          <h3 class="text-truncate">
            {{ summaryContent.title.Value || summaryContent.title.Label }}
          </h3>
        </v-row>
        <!-- Fin titre -->

        <!-- Debut sous-titre -->
        <v-row class="ma-0" no-gutters>
          <h4 class="text-truncate">
            {{ summaryContent.sTitle.Value || summaryContent.sTitle.Label }}
          </h4>
        </v-row>
        <!-- Fin sous-titre -->
      </v-col>
      <!-- Fin titre / sous titre -->
    </v-row>
    <!-- Fin en-tête - avatar / titre / sous titre -->

    <!-- Debut body summary -->
    <slot name="bodySummary">
      <v-row class="mt-0" no-gutters> </v-row>
    </slot>
    <!-- Fin body summary -->
  </v-container>
  <!-- Fin summary-->
</template>
<script>
import ednField from '../../components/ednField.vue'
export default {
  components: { ednField },
  name: 'SummaryComponent',
  data() {
    return {}
  },
  props: {
    summaryContent: {
      type: Object,
      default: () => {},
    },
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="stylus">
.summary
  border-top 2px solid #bb1515
</style>
