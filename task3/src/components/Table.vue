<template>
  <div>
    <SearchMovie
        :properties="searchProperties"
        :searchItems="searchMovies"
    />
    <MovieTable :jsonData="filteredJsonData"/>
  </div>
</template>

<script>
  import _ from "lodash";
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
        },
        filteredJsonData: _.cloneDeep(this.fullJsonData)
      }
    },
    methods: {
      searchMovies: function () {
        if (!(this.searchProperties.title == ""
          && this.searchProperties.dateFrom == ""
          && this.searchProperties.dateTo == ""
          && this.searchProperties.cast == "")) {
          this.filteredJsonData = [
            {
              "title": "After Dark in Central Park",
              "year": 1900,
              "cast": [],
              "genres": []
            }
          ]

        }

      }
    }
  }
</script>

<style scoped>

</style>
