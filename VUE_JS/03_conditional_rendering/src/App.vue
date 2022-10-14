<template>
  <ConditionalRendering />
</template>

<script>
import ConditionalRendering from "./components/ConditionalRendering.vue";

export default {
  name: "App",
  components: {
    ConditionalRendering,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
