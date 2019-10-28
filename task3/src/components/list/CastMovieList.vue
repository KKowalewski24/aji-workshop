<template>
  <div>
    <div class="card" v-for="(it,index) in castList" :key="index">
      <div class="card-header">
        {{it}}
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{}}</li>
      </ul>

    </div>
  </div>
</template>

<script>
  import _ from "lodash";

  const BEGIN = 0;
  const END = 99;
  const INITIAL_LIST_SIZE = 10;

  export default {
    name: "CastMovieList",

    props: {
      jsonData: Array
    },

    data() {
      let castList = _.slice(_.uniq(_.flatten(_.filter(
        _.map(this.jsonData, "cast"), _.size))), BEGIN, END);

      return {
        listSize: INITIAL_LIST_SIZE,
        castList,
      }
    },

  }
</script>

<style scoped>

</style>