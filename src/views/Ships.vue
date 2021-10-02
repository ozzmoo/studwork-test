<template>
  <div class="cards-wrap">
    <SmallCard
      v-for="(ship, i) in starships.results"
      :key="i"
      :shipData="ship"
    />
  </div>
</template>

<script>
import SmallCard from "@/components/SmallCard";
import { getStarships } from "@/api/getStarships.js";

export default {
  components: {
    SmallCard,
  },
  data() {
    return {
      starships: null,
    };
  },
  methods: {
    async getStarships() {
      this.starships = await getStarships();
    },
  },
  mounted() {
    this.getStarships();
  },
};
</script>

<style>
.cards-wrap {
  margin: 20px auto;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  gap: 10px;

  justify-content: center;
  justify-items: center;
}
</style>