<template>
  <div>
    <div class="card" v-for="(it,index) in genreList" :key="index">
      <div class="card-header">
        {{it}}
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item"></li>
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
      // let genreList = _.map(this.jsonData, it => _.pick(it, "genres", "title"));
      let genreList = _.sortBy(_.uniq(_.flatten(_.filter(_.map(this.jsonData, "genres"), _.size))));

      // for (let it in genreList) {
      //   alert(_.find(this.jsonData, function (o) {
      //     return _.contains(_.flatten(o.genres), it)
      //   }))
      // }

      return {
        listSize: INITIAL_LIST_SIZE,
        genreList,
      }
    },

  }
</script>

<style scoped>

</style>
