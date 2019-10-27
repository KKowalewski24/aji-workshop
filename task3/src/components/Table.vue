<template>
  <div>
    <!-- OBJECT(searchProperties) IS BEING PASSED BECAUSE IT IS
    PASSED BY REFERENCE - LIVE CHANGES -->
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
          cast: "",
          genres: "",
        },
      }
    },

    methods: {
      isFilledInputs: function () {
        //IF INPUTS ARE EMPTY RETURN FALSE IF NOT RETURN TRUE
        if (!(this.searchProperties.title === ""
          && this.searchProperties.dateFrom === ""
          && this.searchProperties.dateTo === ""
          && this.searchProperties.cast === ""
          && this.searchProperties.genres === "")) {
          return true
        }

        return false;
      },

      getLowerCaseValue: function (msg) {
        return _.toLower(msg);
      },

      isIncluded: function (arrayValue, inputValue) {
        return (_.includes(this.getLowerCaseValue(arrayValue),
          this.getLowerCaseValue(inputValue)) || inputValue === "")
      },

      checkInputs: function (item) {
        if (this.isIncluded(item.title, this.searchProperties.title)
          && this.isIncluded(item.dateFrom, this.searchProperties.dateFrom)
          && this.isIncluded(item.dateTo, this.searchProperties.dateTo)
          && this.isIncluded(_.flatten(item.cast), this.searchProperties.cast)
          && this.isIncluded(_.flatten(item.genres), this.searchProperties.genres)) {
          return true;
        }

        return false
      },

      searchMovies: function () {
        if (this.isFilledInputs()) {
          for (let it in this.fullJsonData) {
            if (this.checkInputs(this.fullJsonData[it])) {
              this.filteredJsonData = [];
              this.filteredJsonData.push(this.fullJsonData[it]);
            }
          }
        } else {
          this.filteredJsonData = _.cloneDeep(this.fullJsonData);
        }

        this.reRenderedKey += 1;
      },

    },

  }
</script>

<style scoped>

</style>
