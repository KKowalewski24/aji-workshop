<template>
  <div>
    <SearchMovie
        :properties="searchProperties"
        :searchItems="searchMovies"
    />
    <MovieTable
        :jsonData="filteredJsonData"
        :key="reRenderedKey"
    />
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
        reRenderedKey: 0,
        filteredJsonData: _.cloneDeep(this.fullJsonData),
        searchProperties: {
          title: "",
          dateFrom: "",
          dateTo: "",
          cast: ""
        },
      }
    },

    methods: {
      isFilledInputs: function () {
        //IF INPUTS ARE EMPTY RETURN FALSE IF NOT RETURN TRUE
        if (!(this.searchProperties.title === ""
          && this.searchProperties.dateFrom === ""
          && this.searchProperties.dateTo === ""
          && this.searchProperties.cast === "")) {
          return true
        }

        return false;
      },

      getLowerCaseValue: function (msg) {
        return _.toLower(msg);
      },

      isIncluded: function (arrayValue, inputValue) {
        return _.includes(this.getLowerCaseValue(arrayValue), this.getLowerCaseValue(inputValue))
      },

      checkInputs: function (item) {
        if (this.isIncluded(item.title, this.searchProperties.title)
          && this.isIncluded(item.dateFrom, this.searchProperties.dateFrom)
          && this.isIncluded(item.dateTo, this.searchProperties.dateTo)
          && this.isIncluded(item.cast, this.searchProperties.cast)) {
          return true;
        }

        return false
      },

      searchMovies: function () {
        for (let it in this.fullJsonData) {
          if (this.isFilledInputs() && this.checkInputs(this.fullJsonData[it])) {
            alert(this.fullJsonData[it].title);

            this.reRenderedKey += 1;
          }
        }
      },

    },

  }
</script>

<style scoped>

</style>
