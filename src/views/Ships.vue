<template>
  <div class="ships">
    <div class="ships-nav">
      <button
        class="ships-nav__item"
        v-show="this.currentPage != 1"
        @click="prevPage"
      >
        Назад
      </button>
      <button
        class="ships-nav__item"
        v-show="this.currentPage != 4"
        @click="nextPage"
      >
        Вперед
      </button>
    </div>
    <div class="ships-wrap">
      <SmallCard
        v-for="(ship, i) in starships.results"
        :key="i"
        :shipData="ship"
      />
    </div>
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
      starships: [],
      currentPage: 1,
    };
  },
  methods: {
    async getStarships() {
      const URL = `https://swapi.dev/api/starships/?page=${this.currentPage}`;
      this.starships = await getStarships(URL);
    },
    nextPage() {
      this.currentPage += 1;
      this.getStarships();
    },
    prevPage() {
      this.currentPage =
        this.currentPage == 1 ? this.currentPage : this.currentPage - 1;
      this.getStarships();
    },
  },
  mounted() {
    this.getStarships();
  },
};
</script>

<style>
.ships-wrap {
  margin: 20px auto;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  gap: 10px;

  justify-content: center;
  justify-items: center;
}

.ships-nav {
  padding: 10px 0px;
  display: flex;
  justify-content: space-around;
}

.ships-nav__item {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>