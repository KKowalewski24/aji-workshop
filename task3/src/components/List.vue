<template>
  <div>
    <GenreMovieList :jsonData="fullJsonData"/>
    <CastMovieList :jsonData="fullJsonData"/>
  </div>
</template>

<script>
  import GenreMovieList from "./list/GenreMovieList";
  import CastMovieList from "./list/CastMovieList";

  export default {
    name: "List",
    components: {
      CastMovieList,
      GenreMovieList
    },
    props: {
      fullJsonData: Array
    }
  }
</script>

<style scoped>

</style>