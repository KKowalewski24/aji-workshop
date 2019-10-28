<template>
  <div id="app">
    <Navbar msg="Film Website"/>

    <div class="container-fluid">
      <Table :fullJsonData="fullMoviesData"/>
      <List :fullJsonData="fullMoviesData"/>
    </div>

    <Footer class="mt-5" msg="Kamil Kowalewski Applications in Interpreted Languages"/>
  </div>
</template>

<script>
  // import samplejson from "./data/sample.json";
  import json from "./data/movies.json";
  import Navbar from "./components/util/Navbar";
  import Table from "./components/Table";
  import List from "./components/List";
  import Footer from "./components/util/Footer"

  export default {
    name: 'app',

    components: {
      List,
      Table,
      Navbar,
      Footer,
    },

    data() {
      return {
        // sample: samplejson,
        fullMoviesData: json
      }
    },

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
