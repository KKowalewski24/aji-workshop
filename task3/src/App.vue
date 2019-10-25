<template>
  <div id="app">
    <Navbar msg="Film Website"/>

    <div class="container">
      <SearchMovie/>
      <MovieTable :jsonData="fullMoviesData"/>
      <GenreMovieList :jsonData="fullMoviesData"/>
      <CastMovieList :jsonData="fullMoviesData"/>
    </div>

    <Footer msg="Kamil Kowalewski Applications in Interpreted Languages"/>
  </div>
</template>

<script>
  // import _ from "lodash";
  // import samplejson from "./data/sample.json";
  import json from "./data/movies.json";
  import Navbar from "./components/util/Navbar";
  import Footer from "./components/util/Footer"

  import SearchMovie from "./components/search/SearchMovie";
  import MovieTable from "./components/MovieTable";
  import GenreMovieList from "./components/GenreMovieList";
  import CastMovieList from "./components/CastMovieList";

  export default {
    name: 'app',
    components: {
      Navbar,
      Footer,
      SearchMovie,
      MovieTable,
      CastMovieList,
      GenreMovieList
    },
    data() {
      return {
        // sample: samplejson,
        fullMoviesData: json
      }
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
