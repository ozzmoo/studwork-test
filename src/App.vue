<template>
  <div id="app">
    <Ships />
    <router-view />
  </div>
</template>

<script>
import Ships from "./views/Ships";
export default {
  components: {
    Ships,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background: rgb(145, 137, 135);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
