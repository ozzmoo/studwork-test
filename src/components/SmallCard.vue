<template>
  <div class="card">
    <div class="card__head">
      <img src="@/assets/logo.png" alt="" class="card__logo" />
      <h2 class="card__title">{{ shipData.name }}</h2>
    </div>
    <img src="@/assets/starship.jpg" :alt="shipData.name" class="card__img" />

    <div class="card-stats">
      <div class="stats-item">
        <span class="stats-item__key">Стоимость:</span>
        <span class="stats-item__value"> {{ shipCost }}</span>
      </div>
      <div class="stats-item">
        <span class="stats-item__key">Класс корабля:</span>
        <span class="stats-item__value">
          {{ shipData.starship_class }}
        </span>
      </div>
      <div class="stats-item">
        <span class="stats-item__key">Модель:</span>
        <span class="stats-item__value"> {{ shipData.model }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shipData: {
      default: {},
    },
  },
  computed: {
    shipCost() {
      const cost =
        this.shipData.cost_in_credits === "unknown"
          ? "не известно"
          : `${this.shipData.cost_in_credits} кред.`;

      return cost;
    },
  },
};
</script>

<style>
.card {
  max-width: 300px;
  padding: 10px 15px;

  background: #22251c;
  box-shadow: 0px 0px 17px 0px rgba(34, 60, 80, 0.2);
  border-radius: 10px;

  color: rgb(233, 233, 233);
}

.card__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__logo {
  width: 80px;
}

.card__img {
  width: 100%;

  border: 3px solid gray;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(214, 226, 235, 0.801);
}

.card-stats {
  margin-top: 10px;
}

.stats-item {
  padding: 5px 0px;
  border-bottom: 1px solid rgb(255, 255, 255);

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
}
</style>