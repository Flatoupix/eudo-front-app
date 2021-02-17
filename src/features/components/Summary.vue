<template>
  <v-container class="summary py-2 elevation-4">
    <v-row no-gutters>
      <v-col md="auto" align-self="center">
        <v-avatar size="48"><img :src="summaryContent.avatar.Value"/></v-avatar>
      </v-col>
      <v-col class="px-3" cols="11">
        <v-row no-gutters>
          <h3 class="text-truncate">
            {{ summaryContent.title.Value ? summaryContent.title.Value : summaryContent.title.Label }}
          </h3>
        </v-row>
        <v-row class="ma-0" no-gutters>
          <h4 class="text-truncate">
            {{ summaryContent.sTitle.Value ? summaryContent.sTitle.Value : summaryContent.sTitle.Label }}
          </h4>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mt-0" no-gutters v-if="summaryContent.inputOn">
        <edn-field v-for="input in summaryContent.inputs" :key="input.message" class="mx-4" irisMimic :label="input.Label" />
    </v-row>
  </v-container>
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
