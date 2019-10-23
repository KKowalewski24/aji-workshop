<template>
  <div id="app">
    <Navbar msg="Film Website"/>

    <Footer msg="Kamil Kowalewski Applications in Interpreted Languages"/>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";

  export default {
    name: 'app',
    components: {
      Footer,
      Navbar

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
  }
</style>
