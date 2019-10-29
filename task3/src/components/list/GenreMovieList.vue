<template>
  <div>
    <div class="card" v-for="(it,index) in genreList" :key="index">
      <div class="card-header">
        {{it}}
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item"  v-for="it2 in x[index]" :key="it2">{{ it2.title }}</li>
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

    data: function() {


      return {
        listSize: INITIAL_LIST_SIZE,
        genreList : [],
        x : [],

      }
    },
    
    mounted() {
      this.jsonData = this.jsonData.slice(0, 100)
      // let genreList = _.map(this.jsonData, it => _.pick(it, "genres", "title"));
      this.genreList = _.sortBy(_.uniq(_.flatten(_.filter(_.map(this.jsonData, "genres"), _.size))));

      for (let it of this.genreList) {
        this.x.push(_.filter(this.jsonData, function (o) {
          return _.includes(_.flatten(o.genres), it)
        }))
      }
    },
  }
</script>

<style scoped>

</style>
