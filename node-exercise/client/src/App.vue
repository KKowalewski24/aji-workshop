<template>
  <div id="app">
    <Products/>
  </div>
</template>

<script>
  import Products from "./components/Products";

  export default {
    name: 'app',

    components: {
      Products
    },

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
