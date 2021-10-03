<template>
  <div>
    <Header>
      <template v-slot:navigation>
        <router-link class="back-link" to="/">Назад к списку</router-link>
      </template>
    </Header>
    <div class="starship-view">
      <BigCard :ship="ship" :schema="schema" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import BigCard from "@/components/BigCard";
import { getStarships } from "@/api/getStarships.js";

export default {
  components: { Header, BigCard },
  props: {},
  data() {
    return {
      ship: {},
      schema: {
        MGLT: "The Maximum number of Megalights this starship can travel in a standard hour",
        cargo_capacity:
          "The maximum number of kilograms that this starship can transport",
        consumables:
          "The maximum length of time that this starship can provide consumables for its entire crew without having to resupply",
        cost_in_credits: " The cost of this starship in galactic credits",
        created: "Time that this resource was created",
        crew: "The number of personnel needed to run or pilot this starship",
        edited: "Time that this resource was edited",
        hyperdrive_rating: " The class of this starships hyperdrive",
        length: "The length of this starship in meters",
        manufacturer: "The manufacturer of this starship",
        max_atmosphering_speed: "The maximum speed of this starship",
        model: "The model or official name of this starship",
        name: "The name of this starship",
        passengers:
          "The number of non-essential people this starship can transport",
        films: "Films",
        pilots: "Pilots",
        starship_class: "The class of this starship",
        url: "URL",
      },
    };
  },
  methods: {
    async getDataOnLoad() {
      if (this.ship !== undefined) {
        const ships = await getStarships();
        const shipName = this.$route.params.name;
        const URL = ships.results.filter((ship) => {
          return ship.name === shipName;
        });
        this.ship = await getStarships(URL[0].url);
      } else {
        this.ship = this.$route.params.data;
      }
    },
  },
  mounted() {
    this.getDataOnLoad();
  },
};
</script>

<style>
.starship-view {
  padding: 30px;
}

.back-link {
  margin-right: 10px;
  color: white;
}
</style>