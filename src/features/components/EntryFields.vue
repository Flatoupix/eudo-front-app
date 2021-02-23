<template>
  <!-- Debut Entry Fields -->
  <v-card elevation="0">
    <!-- Debut title -->
    <v-card-title>{{entryFieldsContent.title}}</v-card-title>
    <!-- Fin title -->

    <!-- Debut subtitle -->
    <v-card-subtitle>{{entryFieldsContent.description}}</v-card-subtitle>
    <!-- Fin subtitle -->

    <!-- Debut content -->
    <v-card-text>
      <v-form ref="form">
        <ednField :label="field.Label" v-for="field in entryFieldsContent.fields" :key="field.id"></ednField>
      </v-form>
    </v-card-text>
    <!-- fIN content -->

  </v-card>
  <!-- Fin Entry Fields -->
</template>
<script>
import ednField from '../../components/ednField.vue'
export default {
  components: { ednField },
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
  methods: {},
  mounted() {},
}
</script>

<style lang="stylus"></style>
