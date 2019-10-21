<template>
  <div id="app">
    <Header msg="Car Dealer"/>
    <Basket/>
  </div>
</template>

<script>

  import Basket from "./components/Basket";
  import Header from "./components/Header";

  export default {
    name: 'app',
    components: {
      Header,
      Basket

    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
