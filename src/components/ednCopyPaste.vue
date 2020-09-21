<template>
  <v-row align-content="center">
    <v-col cols="10">
      <v-text-field
        id="codeToCopy"
        :label="$attrs.label"
        :readonly="$attrs.readonly"
        type="text"
        v-model="content"
        v-bind="$attrs"
        v-on="$listeners"
        :clearable="!$attrs.readonly === ''"
        :placeholder="placeHolder"
        :outlined="$attrs.readonly === ''"
        :class="$attrs.readonly === '' ? 'text--disabled' : ''"
      >
        <template v-slot:append v-if="$attrs.tooltip">
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on" style="cursor: pointer">mdi-help-circle-outline</v-icon>
            </template>
            {{ $attrs.tooltip }}
          </v-tooltip>
        </template>
      </v-text-field>
    </v-col>
    <v-col
      cols="1"
      :align-self="$attrs.readonly == '' ? 'start' : 'center'"
      :class="['text-center', $attrs.readonly == '' ? 'mt-4' : '']"
    >
      <v-tooltip v-model="copied" top>
        <template v-slot:activator="{ click }">
          <v-btn icon class="pb-2" @click="copy()">
            <v-icon>mdi-content-copy</v-icon>
          </v-btn>
        </template>
        <span>{{ pasteContentRes }}</span>
      </v-tooltip>
    </v-col>
  </v-row>
</template>

<script>
import { ednRequired } from "./mixins/ednRequired";
import { ednVModel } from "./mixins/ednVModel";

export default {
  inheritAttrs: false,
  mixins: [ednRequired, ednVModel],
  props: {
    pasteContentRes: {
      type: String,
      default: () => "Code copié",
    },
    value: {
      type: String,
      default: () => "",
    },
    placeHolder: {
      type: String,
      default: () => '<script src="https:// >"',
    },
  },
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    copy() {
      let contentUrl = this.$el.querySelector("input");
      contentUrl.select();
      document.execCommand("copy");
      contentUrl.blur();
      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 3000);
    },
  },
};
</script>
<style lang="stylus">
div.v-input--is-readonly {
  pointer-events: none;
  user-select: none;
}
</style>
