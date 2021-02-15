<template>
    <section>
      <h2 class="v-heading text-h3 text-sm-h3 mb-4"><a color="black" :href="'#'+ item.title">#{{item.title}}</a></h2>
      <p v-html="item.description"></p>
      <section :id="item.title">
        <v-sheet class="mb-9" outlined rounded>
          <v-lazy min-height="52" transition="fade-transition">
            <div class="text-end pa-2">
              <span class="d-inline-block">
                <v-btn target="_blank" :href="item.linkGit" icon>
                  <v-icon>mdi-github</v-icon>
                </v-btn>
              </span>
            </div>
          </v-lazy>
          <v-sheet outlined rounded>
            <v-container class="pa-4 pa-sm-6 pa-md-8" fluid>
              <slot></slot>
            </v-container>
          </v-sheet>
        </v-sheet>
      </section>
    </section>
</template>
<script>

export default {
  name: 'SectionComponents',
  data() {
    return {}
  },
  props : ['item'],
  methods: {},
  mounted() {},
}
</script>
<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap')

html
  *
    // font-family 'Syne Mono', monospace

  a
    // color #fff

  label.theme--light.v-label
    // font-size 18px
    // color #f00

  div.theme--light.v-messages div.v-messages__message
    // font-size 18px

  div.theme--light.v-input input
    // color #00f
    // font-size 10px

  .resum
    border-top 2px solid #bb1515

  .min-w-20
    min-width 20%

  .ellipsis
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
</style>
