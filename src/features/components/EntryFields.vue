<template>
  <!-- Debut Entry Fields -->
  <v-card flat>
    <!-- Debut title -->
    <v-card-title>{{ entryFieldsContent.title }}</v-card-title>
    <!-- Fin title -->

    <!-- Debut subtitle -->
    <v-card-subtitle>{{ entryFieldsContent.description }}</v-card-subtitle>
    <!-- Fin subtitle -->

    <!-- Debut content -->
    <v-card-text>
      <v-form ref="form">
        <component
          v-for="field in entryFieldsContent.fields"
          irisMimic
          popup
          format="dd/MM/yyyy"
          :html="field.IsHtml"
          :multiple="field.Multiple"
          :items="field.DisplayValue"
          :value="field.Value"
          :label="getLabel(field)"
          :key="field.id"
          :is="dynamicFormatChamps(field)"
          >{{ getLabel(field) }}</component
        >
      </v-form>
    </v-card-text>
    <!-- fIN content -->
  </v-card>
  <!-- Fin Entry Fields -->
</template>
<script>
import ednField from '../../components/ednField.vue'
import ednPhone from '../../components/ednPhone.vue'
import ednCheck from '../../components/ednCheck.vue'
import ednCat from '../../components/ednCat.vue'
import ednUrl from '../../components/ednUrl.vue'
import ednMail from '../../components/ednMail.vue'
import ednBtn from '../../components/ednBtn.vue'
import ednDate from '../../components/ednDate.vue'
import ednLine from '../../components/ednLine.vue'
import ednMemo from '../../components/ednMemo.vue'
import ednFile from '../../components/ednFile.vue'
import ednNum from '../../components/ednNum.vue'

export default {
  components: {
    ednField,
    ednPhone,
    ednCheck,
    ednCat,
    ednUrl,
    ednMail,
    ednBtn,
    ednDate,
    ednLine,
    ednMemo,
    ednFile,
    ednNum,
  },
  name: 'EntryFieldsComponent',
  data() {
    return {
      dateInpt: '2021-02-22',
    }
  },
  props: {
    entryFieldsContent: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getLabel(field) {
      return field.LabelHidden ? '' : field.Label ? field.Label : ''
    },
    dynamicFormatChamps(input) {
      switch (input.Format) {
        case 1: // Character
          return ednField
        case 2: // Catalog
          return ednCat
        case 3: // MailAddress
          return ednMail
        case 4: // Phone
          return ednPhone
        case 5: // Relation pas de composant ?
          return ednField
        case 6: // SocialNetwork
          return ednUrl
        case 7: // Géolocalisation pas de composant ?
          return ednField
        case 8: // Alias pas de composant ?
          return ednField
        case 9: // AliasRelation pas de composant ?
          return ednField
        case 10: // Button
          return ednBtn
        case 11: // Logic
          return ednCheck
        case 13: // AutoCount pas de composant ?
          return ednField
        case 14: // Date
          return ednDate
        case 15: // Label pas de composant ?
          return ednField
        case 16: // Separator
          return ednLine
        case 17: // Memo
          return ednMemo
        case 18: // Numeric pas de composant ?
          return ednNum
        case 19: // Money pas de composant ?
          return ednField
        case 20: // Image pas de composant ?
          return ednField
        case 21: // Chart pas de composant ?
          return ednField
        case 22: // WebPage pas de composant ?
          return ednField
        case 23: // HyperLink
          return ednUrl
        case 24: // File
          return ednFile
        case 25: // Users
          return ednCat
        case 26: // Password pas de composant ?
          return ednField
        case 27: // Pièces jointes pas de composant ?
          return ednField
        case 28: // Hidden pas de composant ?
          return ednField
        default:
          return ednField
      }
    },
  },
  mounted() {},
}
</script>

<style lang="stylus"></style>
