<template>
  <div>
    <div class="card" v-for="(it,index) in genreList" :key="index">
      <div class="card-header">
        {{it}}
      </div>

      <ul class="list-group list-group-flush" v-for="(index,it) in listSize" :key="it">
        <li class="list-group-item">ITERATOR</li>
      </ul>

    </div>
  </div>
</template>

<script>
  import _ from "lodash";

  const INITIAL_LIST_SIZE = 10;

  export default {
    name: "GenreMovieList",

    props: {
      jsonData: Array
    },

    data() {
      return {
        listSize: INITIAL_LIST_SIZE,
        genreList: _.sortBy(_.uniq(_.flatten(_.filter(_.map(this.jsonData, "genres"), _.size)))),
      }
    },

    methods: {},

  }
</script>

<style scoped>

</style>