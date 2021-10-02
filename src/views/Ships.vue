<template>
  <div class="ships">
    <Header>
      <template v-slot:search>
        <label class="search"
          >Найти корабль: <input type="text" v-model="search"
        /></label>
      </template>
    </Header>
    <div class="ships-nav">
      <button class="ships-nav__item" @click="prevPage" :disabled="!prev">
        Назад
      </button>
      <button class="ships-nav__item" @click="nextPage" :disabled="!next">
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
import Header from "@/components/Header";
import { getStarships } from "@/api/getStarships.js";

export default {
  components: {
    SmallCard,
    Header,
  },
  data() {
    return {
      starships: [],
      search: "",
    };
  },
  methods: {
    async getStarships(URL) {
      this.starships = await getStarships(URL);
    },
    nextPage() {
      if (this.next) {
        this.getStarships(this.starships.next);
      }
    },
    prevPage() {
      if (this.prev) {
        this.getStarships(this.starships.previous);
      }
    },
  },
  created() {
    this.getStarships();
  },
  computed: {
    prev() {
      return this.starships.previous != null;
    },
    next() {
      return this.starships.next != null;
    },
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

.search {
  color: white;
}
</style>