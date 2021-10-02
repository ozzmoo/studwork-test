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
  background: linear-gradient(-45deg, #f5ed17, #cd3727, #1b4489, #000000);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
  padding: 0px 30px;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
