<template>
  <div v-if="$attrs.html == '' || $attrs.html" class="cstmMemo">
    <div :class="['cstmQl', $attrs.disabled ? 'disabled' : '']" v-bind="$attrs">
      <v-input :rules="rules" v-model="content" :label="$attrs.label">
        <quill-editor
          :ename="$attrs.ename"
          :id="$attrs.id"
          ref="myTextEditor"
          :class="$attrs.size"
          v-model="content"
          :options="editorOption"
        />
      </v-input>
    </div>
  </div>
  <div v-else>
    <v-textarea
      :required="$attrs.required"
      :maxlength="$attrs.maxlength"
      :rows="$attrs.rows"
      :placeholder="$attrs.placeholder"
      :label="$attrs.label"
      v-model="content"
      :rules="rules"
      :ename="$attrs.ename"
      :id="$attrs.id"
    >

    <template v-slot:append v-if="$attrs.tooltip">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" style="cursor:pointer;">mdi-help-circle-outline</v-icon>
          </template>
          {{ $attrs.tooltip }}
        </v-tooltip>
      </template>
    </v-textarea>
    
  </div>
</template>

<script>
import(/* webpackChunkName: "hljs" */ "highlight.js");
import { quillEditor } from "vue-quill-editor";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { ednRequired } from "./mixins/ednRequired";
import { ednVModel } from "./mixins/ednVModel";

export default {
  inheritAttrs: false,
  mixins: [ednRequired, ednVModel],
  components: {
    quillEditor,
  },
  data() {
    return {
      editorOption: {
        theme: "snow",
        placeholder: "Tapez votre texte ici",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"],
          ],
          syntax: {
            highlight: (text) => hljs.highlightAuto(text).value,
          },
        },
      },
    };
  },
};
</script>
<style lang="stylus">
div.cstmMemo
  div.v-input__slot
    display grid

    &:focus-within
      label.v-label
        color var(--v-primary-base) !important

    label.v-label
      font-size 0.8em

div.cstmQl
  display block

  & div.memoLabel
    font-size 12px
    margin-bottom 0.2em
    color var(--v-secondary-base)

  div.quill-editor
    flex 1

    &.normal
      > div.ql-container
        height 10rem

    &.large
      > div.ql-container
        height 15rem

    &.fatass
      > div.ql-container
        height 20rem

    > div.ql-container
      &:focus-within
        &:after
          transform scaleX(1)
          transition 250ms

      &:after
        content ''
        width 100%
        transition 250ms
        transform scaleX(0)
        bottom 0
        height 2px
        background-color var(--v-primary-base)
        z-index 10
        display block

      position relative

  &.disabled *
    :hover
      &:focus-within
        & div.memoLabel
          color #ccc !important
          pointer-events none

      color #ccc !important
      // fill #ccc !important
      stroke #ccc !important
      pointer-events none

    :before
      color #ccc !important

    color #ccc !important
    // fill #ccc !important
    stroke #ccc !important
    pointer-events none
</style>