<template>
  <div>
    <SearchMovie :searchProperties="setSearchProperties"/>
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
      setSearchProperties: function (title, dateFrom, dateTo, cast) {
        this.searchProperties.title = title;
        this.searchProperties.dateFrom = dateFrom;
        this.searchProperties.dateTo = dateTo;
        this.searchProperties.cast = cast;
      }
    }
  }
</script>

<style scoped>

</style>