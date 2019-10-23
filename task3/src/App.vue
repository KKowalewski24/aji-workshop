<template>
  <div id="app">
    <Navbar msg="Film Website"/>

    <div class="container">
      <SearchMovie/>
      <MovieTable/>
      <GenreMovieTable/>
      <CastMovieTable/>
    </div>

    <Footer msg="Kamil Kowalewski Applications in Interpreted Languages"/>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  import SearchMovie from "./components/SearchMovie";
  import MovieTable from "./components/MovieTable";
  import GenreMovieTable from "./components/GenreMovieTable";
  import CastMovieTable from "./components/CastMovieTable";

  export default {
    name: 'app',
    components: {
      CastMovieTable,
      GenreMovieTable,
      MovieTable,
      SearchMovie,
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
