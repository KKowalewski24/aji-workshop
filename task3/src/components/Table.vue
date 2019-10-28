<template>
  <div class="row px-1">
    <!-- OBJECT(searchProperties) IS BEING PASSED BECAUSE IT IS
    PASSED BY REFERENCE - LIVE CHANGES -->
    <SearchMovie class="col-md-3 mt-5 padding-x-1"
                 :properties="searchProperties"
                 :searchItems="searchMovies"
                 :clearItems="clearInputs"
    />
    <MovieTable class="col-md-9 mt-5 padding-x-1"
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
      isFilled: function (msg) {
        return msg !== "";
      },
      isFilledInputs: function () {
        //IF INPUTS ARE EMPTY RETURN FALSE IF NOT RETURN TRUE
        if (!(this.isFilled(this.searchProperties.title)
          && this.isFilled(this.searchProperties.dateFrom)
          && this.isFilled(this.searchProperties.dateTo)
          && this.isFilled(this.searchProperties.cast)
          && this.isFilled(this.searchProperties.genres))) {
          return true
        }

        return false;
      },

      getLowerCaseValue: function (msg) {
        return _.toLower(msg);
      },

      isIncluded: function (arrayValue, inputValue) {
        return (_.includes(this.getLowerCaseValue(arrayValue),
          this.getLowerCaseValue(inputValue)) || !this.isFilled(inputValue))
      },
      //TODO ADD CHECKING DATE BETWEEN
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
      clearInputs: function () {
        this.searchProperties.title = "";
        this.searchProperties.dateFrom = "";
        this.searchProperties.dateTo = "";
        this.searchProperties.cast = "";
        this.searchProperties.genres = "";
      }
    },

  }
</script>

<style scoped>
  .padding-x-1 {
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 768px) {
    .padding-x-1 {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
</style>
