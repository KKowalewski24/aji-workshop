<template>
  <div>
    <div class="card" v-for="(it,index) in castList" :key="index">
      <div class="card-header">
        {{it}}
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(jt,jndex) in titleList[index]" :key="jndex">
          {{jt.title}}
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  import _ from "lodash";

  const BEGIN_CAST = 0;
  const END_CAST = 149;
  const BEGIN_TITLE = 0;
  const END_TITLE = 999;
  const INITIAL_LIST_SIZE = 10;

  export default {
    name: "CastMovieList",

    props: {
      jsonData: Array
    },

    data() {
      return {
        listSize: INITIAL_LIST_SIZE,
        castList: _.slice(_.uniq(_.flatten(_.filter(
          _.map(this.jsonData, "cast"), _.size))), BEGIN_CAST, END_CAST),
        titleList: [],
      }
    },

    mounted() {
      for (let it of this.castList) {
        this.titleList.push(_.filter(
          this.jsonData.slice(BEGIN_TITLE, END_TITLE), (o) => _.includes(_.flatten(o.cast), it)))
      }
    },

  }
</script>

<style scoped>

</style>
