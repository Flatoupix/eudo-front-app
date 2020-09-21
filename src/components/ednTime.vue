<template>
  <v-card v-if="$attrs.slots" :class="['timeSlots', $attrs.tripStyle == '' ? 'tripStyle' : '']">
    <v-card-title class="py-1" v-if="$attrs.label">{{ $attrs.label }}</v-card-title>
    <v-card-text>
      <v-btn
        :class="[content.includes(n) ? 'active' : '']"
        v-ripple="false"
        v-for="n in $attrs.slots"
        :key="n.id"
        @click.native="selectTime(n)"
        >{{ n }}</v-btn
      >
    </v-card-text>
  </v-card>
  <v-menu
    v-else-if="$attrs.popup == '' || $attrs.popup == 'popup'"
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="content"
    transition="fade-transition"
    offset-y
    min-width="290px"
    v-bind="$attrs"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        :required="$attrs.required"
        :ename="$attrs.ename"
        :id="$attrs.id"
        v-model="content"
        :disabled="$attrs.disabled"
        :label="$attrs.label"
        v-on="on"
        v-on:click:append="menu=true"
        :rules="rules"
        append-icon="mdi-clock-time-four"
      ></v-text-field>
    </template>

    <v-time-picker
      ref="timePicker"
      :color="colors.primary"
      :format="'24hr'"
      v-bind="$attrs"
      @click:minute="$refs.menu.save(content)"
      close-on-content-click="false"
      v-model="content"
    >
    </v-time-picker>
  </v-menu>
  <v-time-picker
    ref="timePicker"
    v-else
    :color="colors.primary"
    format="24hr"
    v-bind="$attrs"
    close-on-content-click="false"
    v-model="content"
  >
  </v-time-picker>
</template>


<script>
import { ednRequired } from './mixins/ednRequired'
import { ednVModel } from './mixins/ednVModel'

export default {
  inheritAttrs: false,
  mixins: [ednRequired, ednVModel],
  data() {
    return {
      menu: null,
      colors: {
        primary: this.$vuetify.theme.currentTheme.primary,
        secondary: this.$vuetify.theme.currentTheme.secondary,
      },
    }
  },
  methods: {
    selectTime(time) {
      if (typeof this.content !== 'object') {
        this.content = []
      }
      if (this.content == [] || (this.content != time && this.content != [] && !this.content.includes(time))) {
        this.content.push(time)
      } else if (this.content.includes(time)) {
        let pos = this.content.indexOf(time)
        this.content.splice(pos, 1)
      }
    },
    resetSelect(param, e) {
      if (param === 'clear') this.content = ''
      this.$refs.timePicker.selecting = 1
    },
    selectMin() {
      this.$refs.timePicker.selecting = 2
    },
  },
}
</script>
<style lang="stylus">
.timeSlots
  &.tripStyle.v-card.v-sheet
    background-color #fafafa

    @import 'assets/cstmVbtn'

  button.v-btn.active.v-btn--contained.theme--light
    background-color var(--v-primary-base)
    color white

  div.v-card__text
    display grid
    grid-template-columns auto auto auto
</style>
