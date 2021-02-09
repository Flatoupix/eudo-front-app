<template>
  <v-app :ripple="false">
    <!-- <logo class="mx-auto" :style="{ width: '30em' }"></logo> -->
    <v-form ref="form" class="advFormRenderer">
      <v-container
        class="mt-5 text-xs"
        @click.ctrl="updateTime()"
        @click.alt="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-row>
          <img height="400" src="./components/images/logo.svg" class="mx-auto" />
        </v-row>

        <v-row class="my-10">
          <h2 class="mx-auto">Version {{ version }}</h2>
        </v-row>
        <!-- <edn-date popup label="edn-date" v-model="dateInpt" format="dd/MM/yyyy"></edn-date> -->
        <!-- <edn-num label="edn-num" required v-model="inptNum"></edn-num> -->
        <!-- <edn-field label="edn-field"  :required="true" v-model="inptText"></edn-field> -->
        <!-- <edn-url label="edn-url" v-model="urlString" readlsonly></edn-url> -->
        <!-- <edn-copy-paste label="edn-copy-paste" v-model="copyPasteString" readonly></edn-copy-paste> -->
        <!-- <edn-cat
          label="edn-cat multiple"
          multiple
          clearable
          :required="true"
          :items="recette"
          v-model="selectedCatStrings"
        ></edn-cat> -->
        <!-- <v-select label="edn-cat multiple" clearable required :items="recette" v-model="selectedCatStrings"> </v-select> -->
        <!-- <edn-time v-model="time" label="edn-time" required="Ce champs doit être rempli !" /> -->
        <!-- <v-row class="align-center justify-center">
          <edn-date v-model="dateInpt" :popup="false" :allowed-dates="allowedDates" class="mx-3" />
          <edn-time
            class="mx-3"
            v-model="time"
            label="Choisissez une plage horaire"
            tripStyle
            :slots="['00:20', '00:40', '01:20', '01:40', '02:40', '03:40', '04:40', '05:40', '06:40']"
          />
        </v-row> -->
        <!-- <edn-date-time label="edn-date-time-picard" v-model="dateInpt" format="dd/MM/yyyy"></edn-date-time> -->
        <!-- <edn-memo label="edn-memo" html v-model="inptMemo" size="normal"></edn-memo> -->
        
        <!-- <edn-goto linkMode='phone'>01.69.48.75.98</edn-goto> -->
        <!-- <edn-mail label="edn-mail" v-model="mail" /> -->
        
        <edn-phone>0675849875</edn-phone>
        <edn-mail irisMimic label="edn-mail" v-model="mail" />
        <edn-mail label="edn-mail" v-model="mail" />
        <!-- <edn-phone label="edn-phone" v-model="phone" /> -->
        <!-- <edn-check label="edn-check" v-model="checked" :required="true"></edn-check> -->
        <!-- <edn-switch label="edn-switch" v-model="switched"></edn-switch> -->
        <!-- <edn-radio label="edn-radio" :radios="radios" v-model="radioSelect"></edn-radio> -->
        <!-- <edn-color label="edn-color" v-model="selectedColor"></edn-color> -->
        <!-- <v-row class="justify-center align-self-center">
          <edn-btn class="mx-2" validation="skin2019" @click="Validate()">Valider</edn-btn>
          <edn-btn class="mx-2" validation @click="Validate()">Valider</edn-btn>
          <edn-btn class="mx-2" @click="Reset()">Reset</edn-btn>
          <edn-btn class="mx-2" color="secondary" @click="Reset()">Reset</edn-btn>
        </v-row> -->
        <!-- <edn-list-mod
          ref="infScroll"
          :listMaxLength="listMaxLength"
          :nbItemToAdd="nbItemToAdd"
          v-if="users"
          :items="users"
          :page="1"
          :updateList="fetchItems"
        ></edn-list-mod> -->
        <!-- <edn-file
          label="edn-file"
          v-model="fileUpload"
          @getImage="imageData = $event"
          @click:clear="imageData = null"
          @hasChanged="hasChanged = $event"
        ></edn-file> -->
        <v-img v-if="imageData != null" :src="imageData" contain height="150"></v-img>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
// import apiModule from '@/modules/api.js'

export default {
  name: 'App',
  data() {
    return {
      hasChanged: false,
      imageData: {},
      fileUpload: {},
      civility: ['M.', 'Mme'],
      msgRequis: 'Champs requis !',
      citiesList: [],
      loading: false,
      inptNum: null,
      mail: '',
      checked: false,
      switched: true,
      allowedDates: (val) => parseInt(val.split('-')[2], 10) % 2 === 0,
      inptText: '',
      dateInpt: new Date().toISOString(),
      inptMemo: '',
      ingredient: [],
      recette: ['Poire', 'Pomme DT', 'Kaki'],
      selectedCatStrings: [],
      cat: [
        {
          text: 'cat1',
          value: 1,
        },
        {
          text: 'cat2',
          value: 2,
        },
        {
          text: 'cat3',
          value: 3,
        },
        {
          text: 'cat4',
          value: 4,
        },
      ],
      selectedCat: [
        {
          name: 'cat1',
          value: 1,
        },
      ],
      radioSelect: '1',
      selectedColor: '',
      radios: [
        {
          label: 'Choix 1',
          value: '1',
        },
        {
          label: 'Choix 2',
          value: '2',
        },
        {
          label: 'Choix 4',
          value: '4',
        },
        {
          label: 'Choix 3',
          value: '3',
        },
      ],
      contentAbc: 'abcdefghijklmnopqtrsuvwxyz',
      date: '',
      time: '',
      phone: '',
      urlString: '',
      copypasteString:
        '<script src="https://dev.eudonet.com/app/frm?tok=0D1BB1BA&cs=WLk7d-nU8RbrWpdMV7BlpeFzaizM5NzA&p=MMXJDpph5BKrGjAsUTHZoCl_H2ohON0ymyOapirv9fs%3d"/>',
      urlErrorUpdate: false,

      //Datas du mode liste
      users: require('./components/assets/localDatas.json'),
      nbItemToAdd: 3,
      listMaxLength: 20,
      infinityList: [],
      baseNb: 0,
      scrollTime: 0,
    }
  },
  methods: {
    // async fetchItems(pageNumber) {
    //   if (pageNumber < 0) pageNumber = 0

    //   let myApi = new apiModule(
    //     'https://ww2.eudonet.com/eudoapi',
    //     'SOW+adoaTCXmFo8vrgxE/7FCjWqDqLxKScqTBuQOFeLai+b86dIFgfuLEH1tS628nAxD1Yx8z+ghlUMNvg2cWS3/ts2QFdjEwGZEmkGRtl6OKIyEIAPk4rNi8rhpF/7o6Keg1wukC4EIw1bFM2Kk4iRgWV6pnQ0hPHBzqQleXm7biu1fJnsDylIT2AQo6prj'
    //   )

    //   let resp = await myApi.APIGetList(200, [201, 202, 212, 275, 237], pageNumber, 5867)

    //   resp.Rows.forEach((element) => {
    //     var a = element.Fields[0].Value
    //     var b = element.Fields[1].Value
    //     var c = element.Fields[2].Value

    //     var myPP = {
    //       LastName: a,
    //       FirstName: b,
    //       Email: c,
    //     }

    //     this.users.push(myPP)
    //     if (this.users.length > 40) {
    //       this.users.shift(0)
    //     }
    //   })
    // },
    alertFile(image) {
      this.imageData = image
    },
    updateTime() {
      this.time = '09:00'
    },
    Validate() {
      this.$refs.form.validate()
    },
    Reset() {
      this.$refs.form.reset()
    },
    testUrl(event) {
      console.log(event)
    },
  },
  mounted() {
    // this.$vuetify.theme.dark = true
  },
}
</script>
<style lang="stylus" >
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
</style>
