<template>
  <v-text-field
    v-model="content"
    type="tel"
    v-bind="$attrs"
    :rules="rules"
  >
    <template v-slot:append v-if="$attrs.tooltip">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" style="cursor:pointer;"
            >mdi-help-circle-outline</v-icon
          >
        </template>
        {{ $attrs.tooltip }}
      </v-tooltip>
    </template>
  </v-text-field>
</template>

<script>
import VueTheMask from "vue-the-mask";
import Vue from "vue";

import { ednRequired } from "./mixins/ednRequired";
import { ednVModel } from "./mixins/ednVModel";

Vue.use(VueTheMask);

export default {
  props: {
    invalidPhoneMsg: {
      type: String,
      default: () => "Vous devez entrer un numéro de téléphone valide."
    },
    mask: {
      type: String,
      default: () => "##.##.##.##.##"
    }
  },
mounted() {
    this.rules.push(v => /^[/\-.+()# 0-9]*$/.test(v) || this.invalidPhoneMsg);
  },
  inheritAttrs: false,
  mixins: [ednRequired, ednVModel]
};
</script>
