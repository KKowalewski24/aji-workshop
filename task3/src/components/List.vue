<template>
  <div class="row">
    <GenreMovieList
        class="col-sm-6 mt-5 px-4"
        :jsonData="fullJsonData"
    />
    <CastMovieList
        class="col-sm-6 mt-5 px-4"
        :jsonData="fullJsonData"
    />
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
    },

  }
</script>

<style scoped>

</style>
