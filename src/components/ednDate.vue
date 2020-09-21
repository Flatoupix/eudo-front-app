<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-pick-click="false"
    :return-value.sync="content"
    transition="fade-transition"
    offset-y
    min-width="300"
    v-if="$attrs.popup == true || $attrs.popup === ''"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        :required="$attrs.required"
        :ename="$attrs.ename"
        :id="$attrs.id"
        :disabled="$attrs.disabled"
        :label="$attrs.label"
        :value="content ? formattedDate : ''"
        v-on="on"
        v-on:click:append="menu=true"
        :rules="rules"
        append-icon="mdi-calendar-range"
        
      ></v-text-field>
    </template>
    <v-date-picker
      :color="colors.primary"
      no-title
      scrollable
      v-bind="$attrs"
      v-model="content"
      :locale="'Fr'"
      :first-day-of-week="1"
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">Annuler</v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(content)">OK</v-btn>
    </v-date-picker>
  </v-menu>
  <v-date-picker
    v-else
    :ename="$attrs.ename"
    :color="colors.primary"
    no-title
    scrollable
    v-bind="$attrs"
    v-model="content"
    :locale="'Fr'"
    :first-day-of-week="1"
  ></v-date-picker>
</template>
<script>
import { ednRequired } from './mixins/ednRequired'
import { ednVModel } from './mixins/ednVModel'
import { format, parseISO } from 'date-fns'

export default {
  inheritAttrs: false,
  mixins: [ednRequired, ednVModel],
  props: {
    format: {
      type: String,
      default: () => 'dd-MM-yyyy',
    },
  },
  data() {
    return {
      menu: null,
      colors: {
        primary: this.$vuetify.theme.currentTheme.primary,
        secondary: this.$vuetify.theme.currentTheme.secondary,
      },
    }
  },
  computed: {
    formattedDate() {
      return format(parseISO(this.content), this.format)
    },
  },
  mounted() {
    this.$vuetify.theme.currentTheme.primary
    this.$format = format
    this.$parseISO = parseISO
  },
  methods: {},
}
</script>
<style lang="stylus">
div.tripStyle
  div.v-date-picker
    &-header
      background-color #fafafa

    &-table
      th
        color black

      button.v-btn
        &.v-btn--disabled
          background-color transparent
          box-shadow none

        &.v-date-picker-table__current
          border none
          box-shadow 0 1px 0 0 var(--v-primary-lighten1), inset 0 -1px 0 0 var(--v-primary-base)

        &:hover
          &::before
            opacity 0

          margin-top -1px
          box-shadow 0 1px 0 0 #c5c5ca, inset 0 -1px 0 0 #4e4e56

        background-color white
        transition all 0.3s
        box-shadow 0 1px 0 0 #c5c5ca
        margin 2px
        border-radius 0.4em

      background-color #fafafa
      height 275px
</style>