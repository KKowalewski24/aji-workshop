<template>
  <div class="container mt-5 p-0">
    <div class="card">
      <div class="card-header" v-for="(it,index) in genreList" :key="index">
        {{it}}
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item">ITERATOR</li>

      </ul>
    </div>
  </div>
</template>

<script>
  import _ from "lodash";

  export default {
    name: "GenreMovieList",
    props: {
      jsonData: Array
    },
    data() {
      return {
        tableSize: 10,
        genreList: _.uniq(_.flatten(_.filter(_.map(this.jsonData, "genres"), _.size)))
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>