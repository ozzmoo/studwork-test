<template>
  <div class="ship">
    <h1 class="ship__title">{{ ship.name }}</h1>
    <ul class="ship-list">
      <li v-for="(stat, i) in ship" :key="i" class="ship-list-item">
        <span class="ship-list-item__key">{{ schema[i] }}</span>
        <div v-if="Array.isArray(stat)" class="ship-list-item--list">
          <a
            v-for="(item, i) in stat"
            :key="i"
            class="ship-list-item__value"
            :href="item"
            >{{ item }}</a
          >
        </div>
        <template v-else>
          <span class="ship-list-item__value">{{ stat }}</span>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    ship: {
      default: {},
    },
    schema: {
      default: {},
    },
  },
};
</script>

<style scoped>
.ship {
  display: flex;
  flex-direction: column;
}

.ship-list-item {
  display: flex;
  justify-content: space-between;

  padding: 5px 0px;
  border-bottom: 1px solid #000;
}

.ship-list-item--list {
  display: flex;
  flex-direction: column;
}

.ship-list-item__key {
  font-weight: bold;
  text-align: left;
}

.ship-list-item__value {
  text-align: right;
}
</style>