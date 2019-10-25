<template>
  <table class="table mt-5 table-striped table-bordered">
    <thead class="mdb-color white-text">
      <tr class="text-center">
        <th v-for="(it,index) in genreList" :key="index">
          {{it.toString().split(",").join("\n")}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="text-center" v-for="it in tableSize" :key="it">
        <th>{{jsonData[it].title}}</th>
        <th>{{jsonData[it].year}}</th>
        <th>{{jsonData[it].cast.toString().split(",").join("\n")}}</th>
        <th>{{jsonData[it].genres.toString().split(",").join("\n")}}</th>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import _ from "lodash";

  export default {
    name: "GenreMovieTable",
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