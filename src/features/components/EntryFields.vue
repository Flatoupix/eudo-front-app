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
          :label="getLabel(field)"
          :key="field.id"
          :is="dynamicFormatChamps(field)"
        ></component>
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
export default {
  components: { ednField, ednCheck, ednCat,ednPhone},
  name: 'EntryFieldsComponent',
  data() {
    return {}
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
        case 6:
          return ednField
        case 11:
          return ednCheck
        case 25:
          return ednCat
        default:
          return ednField
      }
    },
  },
  mounted() {},
}
</script>

<style lang="stylus"></style>
