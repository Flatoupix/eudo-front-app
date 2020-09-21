<template>
  <v-app :ripple="false">
    <!-- <logo class="mx-auto" :style="{ width: '30em' }"></logo> -->
    <v-form ref="form">
      <v-container @click.ctrl="updateTime()" @click.alt="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-row>
          <img height="400" src="./components/images/logo.svg" class="mx-auto" />
        </v-row>
        <v-row class="mb-10">
          <h2 class="mx-auto">Version 0.1.24</h2>
        </v-row>

        <!-- <v-row class="align-center justify-space-around">
          <edn-load message="edn-load" form="double" anim="dots"></edn-load>
          <edn-load message="edn-load" form="simple" anim="blink"></edn-load>
          <edn-load message="edn-load" form="fill"></edn-load>
        </v-row> -->
        <edn-date-time label="edn-date-time-picard"></edn-date-time>

        <!-- <edn-num
          label="edn-num"
          v-model="inptNum"
          mask="##"
          tooltip="NOMBRE"
        ></edn-num> -->
        <edn-field label="edn-field" v-model="urlString"></edn-field>
        <edn-url label="edn-url" v-model="urlString" readonly></edn-url>
        <edn-cat label="edn-cat" v-model="selectedCat" :items="cat"></edn-cat>
        <edn-cat-x
          label="edn-cat-x"
          v-model="ingredient"
          :items="recette"
          tooltip="Selection de catégories"
        ></edn-cat-x>
        <edn-date ename="COL11_4545" v-model="dateInpt" label="edn-date" id="ef456" popup required />

        <edn-time v-model="time" label="edn-time" required="Ce champs doit être rempli !" />
        <v-row class="align-center justify-center">
          <edn-date v-model="dateInpt" :popup="false" :allowed-dates="allowedDates" class="mx-3" />
          <edn-time
            class="mx-3"
            v-model="time"
            label="Choisissez une plage horaire"
            tripStyle
            :slots="['00:20', '00:40', '01:20', '01:40', '02:40', '03:40', '04:40', '05:40', '06:40']"
          />
        </v-row>
        <edn-memo
          label="edn-memo"
          ename="carotte"
          v-model="inptMemo"
          :size="'normal'"
          html
          :required="'Un string'"
        ></edn-memo>
        <edn-mail label="edn-mail" v-model="mail" :required="true" />
        <edn-phone label="edn-phone" v-model="phone" />
        <edn-check label="edn-check" v-model="checked" :required="true"></edn-check>
        <edn-switch label="edn-switch" v-model="switched"></edn-switch>
        <edn-radio label="edn-radio" :radios="radios" v-model="radioSelect"></edn-radio>
        <edn-color label="edn-color" v-model="selectedColor"></edn-color>
        <v-row class="justify-center align-self-center">
          <edn-btn class="mx-2" validation="skin2019" @click="Validate()">Valider</edn-btn>
          <edn-btn class="mx-2" validation @click="Validate()">Valider</edn-btn>
          <edn-btn class="mx-2" @click="Reset()">Reset</edn-btn>
          <edn-btn class="mx-2" color="secondary" @click="Reset()">Reset</edn-btn>
        </v-row>
        <!-- <edn-list-mod
          ref="infScroll"
          :listMaxLength="listMaxLength"
          :nbItemToAdd="nbItemToAdd"
          v-if="users"
          :items="users"
          :page="1"
          :updateList="fetchItems"
        ></edn-list-mod> -->
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
import apiModule from '@/modules/api.js'

export default {
  name: 'App',

  data() {
    return {
      civility: ['M.', 'Mme'],
      msgRequis: 'Champs requis !',
      citiesList: [],
      loading: false,
      inptNum: 22,
      mail: '',
      checked: true,
      switched: true,
      allowedDates: (val) => parseInt(val.split('-')[2], 10) % 2 === 0,
      inptText: 'efef',
      dateInpt: new Date().toISOString(),
      inptMemo: '',
      ingredient: [],
      recette: ['Cat 3', 'Cat 4', 'Cat 5'],
      cat: ['Cat 1', 'Cat 2', 'Cat 3', 'Cat 4', 'Cat 5'],
      selectedCat: 'Cat 1',
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
      ],
      contentAbc: 'abcdefghijklmnopqtrsuvwxyz',
      date: '',
      time: '',
      phone: '',
      urlString: 'www.google.com',
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
    async fetchItems(pageNumber) {
      if (pageNumber < 0) pageNumber = 0

      let myApi = new apiModule(
        'https://ww2.eudonet.com/eudoapi',
        'SOW+adoaTCXmFo8vrgxE/7FCjWqDqLxKScqTBuQOFeLai+b86dIFgfuLEH1tS628nAxD1Yx8z+ghlUMNvg2cWS3/ts2QFdjEwGZEmkGRtl6OKIyEIAPk4rNi8rhpF/7o6Keg1wukC4EIw1bFM2Kk4iRgWV6pnQ0hPHBzqQleXm7biu1fJnsDylIT2AQo6prj'
      )

      let resp = await myApi.APIGetList(200, [201, 202, 212, 275, 237], pageNumber, 5867)

      resp.Rows.forEach((element) => {
        var a = element.Fields[0].Value
        var b = element.Fields[1].Value
        var c = element.Fields[2].Value

        var myPP = {
          LastName: a,
          FirstName: b,
          Email: c,
        }

        this.users.push(myPP)
        if (this.users.length > 40) {
          this.users.shift(0)
        }
      })
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
