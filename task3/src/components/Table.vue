<template>
  <div>
    <SearchMovie
        :properties="searchProperties"
        :searchItems="searchMovies"
    />
    <MovieTable :jsonData="fullJsonData"/>
  </div>
</template>

<script>
  import SearchMovie from "./table/SearchMovie";
  import MovieTable from "./table/MovieTable";

  export default {
    name: "Table",
    components: {
      MovieTable,
      SearchMovie
    },
    props: {
      fullJsonData: Array
    },
    data() {
      return {
        searchProperties: {
          title: "",
          dateFrom: "",
          dateTo: "",
          cast: ""
        }
      }
    },
    methods: {
      searchMovies: function () {

      }
    }
  }
</script>

<style scoped>

</style>
