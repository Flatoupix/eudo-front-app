<template>
  <v-menu
    ref="dTPkr"
    v-model="menu"
    transition="fade-transition"
    min-width="280"
    :close-on-content-click="false"
    :close-on-click="false"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-input
        ref="dateIn"
        class="dateTimeInput v-text-field row no-gutters pa-0"
        @keyup.enter.native="userSave"
        @keyup.esc.native="userCancel"
        cols="5"
        :rules="rules"
        v-model="getDateTime"
      >
        <v-col cols="3">
          <v-icon :color="currentTab === 0 && $refs.dateIn.isFocused ? getColorIcon : ''" class="mr-2"
            >mdi-calendar-range</v-icon
          >
          <input
            id="dateField"
            type="text"
            v-model="savedDate"
            @focus="customFocus(true, 0)"
            :placeholder="format"
            @blur="customFocus(false)"
            v-on="menu == false ? on : null"
          />
        </v-col>
        <v-col cols="2">
          <v-icon :color="currentTab === 1 && $refs.dateIn.isFocused ? getColorIcon : ''" class="mr-2"
            >mdi-clock-time-four</v-icon
          >
          <input
            id="timeField"
            v-model="savedTime"
            placeholder="hh:mm"
            v-on="menu == false ? on : null"
            @focus="customFocus(true, 1)"
            @blur="customFocus(false)"
          />
        </v-col>
      </v-input>
    </template>
    <v-card max-width="300" ref="dateTimePicard">
      <v-tabs fixed-tabs v-model="currentTab" hide-slider>
        <v-tab>
          <v-icon>mdi-calendar-range</v-icon>
        </v-tab>
        <v-tab>
          <v-icon>mdi-clock-time-four</v-icon>
        </v-tab>
        <v-tab-item>
          <edn-date v-model="savedDate" @click.native="nextTab(savedDate)"></edn-date>
        </v-tab-item>
        <v-tab-item>
          <edn-time no-title ref="timePicker" v-model="savedTime" @input="inputCheck($event)"></edn-time>
        </v-tab-item>
      </v-tabs>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="userCancel">Annuler</v-btn>
        <v-btn text color="primary" @click="userSave">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
<script>
import Vue from 'vue'
import { ednRequired } from './mixins/ednRequired'
import { ednVModel } from './mixins/ednVModel'
import { format, parseISO, isValid } from 'date-fns'

export default {
  inheritAttrs: false,
  mixins: [ednRequired, ednVModel],
  props: {
    format: {
      type: String,
      default: () => 'dd-MM-yyyy',
    },
    invalidDateMsg: {
      type: String,
      default: () => 'Vous devez entrer une date et une heure valide.',
    },
  },
  data() {
    return {
      menu: false, //Définit si le menu est visible ou non

      currentTab: null, //Définit l'onglet courant

      savedDate: null, //Stocke la date
      savedTime: null, //Stocke l'heure

      colors: {
        //Définit les couleurs de vuetify
        primary: this.$vuetify.theme.currentTheme.primary,
        secondary: this.$vuetify.theme.currentTheme.secondary,
      },
    }
  },
  computed: {
    getDateTime: {
      get() {
        let date
        let time

        date = this.savedDate ? this.savedDate : ''

        time = this.savedTime ? this.savedTime : ''

        let formatedDate = new Date(date + 'T' + time)

        this.content = formatedDate
        return formatedDate
      },
      set() {},
    },
    isValidTime() {
      return isValid(new Date(this.savedDate + 'T' + this.savedTime))
    },
    getColorIcon() {
      if (this.menu) return this.colors.primary
    },
  },
  mounted() {
    this.$vuetify.theme.currentTheme.primary
    this.rules.push((v) => isValid(v) || this.invalidDateMsg)
  },

  methods: {
    customFocus(bool, tab, e) {
      if (e) this.currentField = e.target.id

      this.$refs.dateIn.hasColor = bool
      this.$refs.dateIn.isFocused = bool

      if (tab != null || undefined) {
        this.currentTab = tab
      }
    },
    nextTab(date) {
      console.log(date)

      this.savedDate = date
      this.currentTab = 1
    },
    inputCheck(e) {
      this.$refs.timePicker.resetSelect()
      if (e && e.includes(':')) this.$refs.timePicker.selectMin()
    },
    userSave() {
      this.$refs.dTPkr.save(this.getDateTime)
      this.currentTab = null
      this.$refs.timePicker.resetSelect()
    },
    userCancel() {
      this.menu = false
      this.currentTab = 0
      this.savedDate = this.savedTime = null
      this.$refs.timePicker.resetSelect('clear')
    },
  },
}
</script>
<style lang="stylus">
div.dateTimeInput
  div.col
    display flex
    padding 0
</style>