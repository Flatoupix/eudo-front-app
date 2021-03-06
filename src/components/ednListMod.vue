<template>
  <v-row colspan="12" :ripple="false">
    <v-col cols="2" v-show="false">
      <v-list
        dense
        height="25em"
        :style="showAllFilters ? 'overflow:overlay' : 'overflow:hidden'"
      >
        <v-list-item
          v-show="
            !infinityList.filter(
              (itm) => itm.UserHotcom.Group.Name == item.Name
            ).length == 0
          "
          v-for="item in itemsFilters"
          :key="item.Id"
          @click="addFltr(item.Id)"
        >
          <v-btn
            class="d-flex justify-space-between"
            :ripple="false"
            block
            small
            :color="selectedFilter == item.Id ? 'primary' : ''"
            text
          >
            <span>{{ item.Name }}</span>
            <span>
              {{
                (item.Number = infinityList.filter(
                  itm => itm.UserHotcom.Group.Name == item.Name
                ).length)
              }}
            </span>
          </v-btn>
        </v-list-item>
      </v-list>
      <v-btn
        v-if="itemsFilters.filter((itm) => itm.Number > 10).length > 2"
        :color="showAllFilters ? 'normal' : 'primary'"
        class="d-block mx-auto my-2"
        x-small
        @click="showAllFilters = !showAllFilters"
        >Afficher tout les résultats</v-btn
      >
    </v-col>
    <v-col cols="12">
      <v-data-table
        color="primary"
        v-sortable-table
        v-model="itemSelected"
        show-select
        @mousewheel.native="getItems"
        ref="edn-scroll"
        id="eudoList"
        :headers="headers"
        :items="infinityList"
        fixed-header
        disable-pagination
        hide-default-footer
        :height="height"
      ></v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import Sortable from "sortablejs";

export default {
  directives: {
    "sortable-table": {
      componentUpdated: (el, binding, vnode) => {
        vnode.context.sortTableRows(el);
      },
      bind: (el, binding, vnode) => {
        el.querySelectorAll("th").forEach((draggableEl) => {
          // Need a class watcher because sorting v-data-table rows asc/desc removes the sortHandle class
          vnode.context.watchClass(draggableEl, "sortHandle");
          draggableEl.classList.add("sortHandle");
        });
        vnode.context.sortTableRows(el);
      },
    },
  },
  props: {
    updateList: {
      type: Function,
      default: () => {
        () => {};
      },
    },
    headers: {
      type: Array,
      default: () => [],
    },
    page: {
      type: Number,
      default: () => {
        () => 1;
      },
    },

    items: {
      type: Array,
      default: () => [],
    },
    nbItemToAdd: {
      type: Number,
      default: () => 3,
    },
    listMaxLength: {
      type: Number,
      default: () => 20,
    },
    height: {
      type: Number,
      default: () => 500,
    },

    groupHeader: {
      type: Array,
      default: () => [
        {
          text: "",
          align: "start",
          sortable: false,
          value: "Name",
        },
        { text: "", value: "Portable" },
      ],
    },
  },
  data() {
    return {
      scrollTime: 0,
      currentOrder: 0,

      currentPage: 1,

      //Gestion de la liste
      infinityListFltrd: [],

      //Gestion des filtres
      itemsFilters: [],
      selectedFilter: null,
      itemSelected: [],
      showAllFilters: false,
    };
  },

  computed: {
    infinityList: function () {
      if (this.items.length > 1 && this.headers.length == 0) {
        Object.getOwnPropertyNames(this.items[0])
          .filter((itm) => itm != "__ob__")
          .forEach((item, index) => {
            let buffer = {};
            // if (index == 0) {
            //   (buffer.align = "start"), (buffer.sortable = false);
            // }
            buffer.align = "start";
            buffer.sortable = false;
            buffer.text = item;
            buffer.value = item;
            this.headers.push(buffer);
          });
      }
      return this.items;
    },
  },
  methods: {
    setNewPos(parentNode, oldIndex, oldNode, newIndex, newNode) {
      setTimeout(() => {
        if (oldIndex < newIndex) {
          parentNode.insertBefore(oldNode, newNode.nextSibling);
        } else {
          parentNode.insertBefore(oldNode, newNode);
        }
      }, 150);
    },
    // Add back the sortHandle class if it gets stripped away by external code
    watchClass(targetNode, classToWatch) {
      let lastClassState = targetNode.classList.contains(classToWatch);
      const observer = new MutationObserver((mutationsList) => {
        for (let i = 0; i < mutationsList.length; i++) {
          const mutation = mutationsList[i];
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "class"
          ) {
            const currentClassState = mutation.target.classList.contains(
              classToWatch
            );
            if (lastClassState !== currentClassState) {
              lastClassState = currentClassState;
              if (!currentClassState) {
                mutation.target.classList.add("sortHandle");
              }
            }
          }
        }
      });
      observer.observe(targetNode, { attributes: true });
    },
    sortTableRows(el) {
      const options = {
        handle: ".sortHandle",
        animation: 150,
        onStart: (evt) => {
          // Flag all cells in the column being dragged by adding a class to them
          el.querySelectorAll("tr").forEach((row) => {
            const draggedTd = row.querySelectorAll("td")[evt.oldIndex];
            if (draggedTd) {
              draggedTd.classList.add("sorting");
            }
          });
        },
        onEnd: (evt) => {
          // Take the dragged cells and move them over to the new column location
          el.querySelectorAll("tr").forEach((row) => {
            if (!row.querySelector("th")) {
              const oldNode = row.querySelector(".sorting");
              const newNode = row.querySelectorAll("td")[evt.newIndex];

              this.setNewPos(row, evt.oldIndex, oldNode, evt.newIndex, newNode);
              oldNode.classList.remove("sorting");
            }
          });
        },
      };
      const initEl = el
        .getElementsByTagName("thead")[0]
        .getElementsByTagName("tr")[0];
      return Sortable.create(initEl, options);
    },

    async getItems(e) {
      let direction;
      let position = this.$refs["edn-scroll"].$el.children[0].scrollTop;
      let height = this.$refs["edn-scroll"].$el.children[0].scrollHeight;

      //On verifie le delta du mouseWheel pour déterminer le sens
      if (e.wheelDeltaY > 0) direction = "up";
      if (e.wheelDeltaY < 0) direction = "down";

      if (direction == "down") this.currentPage = this.currentPage + 1;
      else if (direction == "up") this.currentPage = this.currentPage - 1;

      await this.updateList(this.currentPage);
      /*
      this.infinityList = this.users;

      //WHEEL UP
      // On s'assure que l'ordre de la liste est supérieur au nombre définit pour une page et que la direction est bien vers le haut
      if (this.currentOrder > this.listMaxLength && direction == "up") {
        //On ajoute
        this.infinityList.unshift(
          this.items.filter(
            (item) =>
              item.order >=
              this.currentOrder - this.listMaxLength - this.nbItemToAdd
          )[0]
        );
        this.infinityList.pop();
        this.currentOrder = this.currentOrder - this.nbItemToAdd;
      }

      //WHEEL DOWN
      if (this.currentOrder < this.items.length && direction == "down") {
        this.infinityList.shift();

        this.infinityList.push(
          this.items.filter((item) => item.order >= this.currentOrder)[0]
        );

        this.currentOrder = this.currentOrder + this.nbItemToAdd;
      }
*/
    },
  },
  async mounted() {
    await this.getItems(this.page);
    this.currentPage = 0;
  },
};
</script>

<style lang="stylus"></style>