<template>
  <div>
    <div class="card" v-for="(it,index) in genreList" :key="index">
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

  const BEGIN_TITLE = 0;
  const END_TITLE = 1000;
  const INITIAL_LIST_SIZE = 10;

  export default {
    name: "GenreMovieList",

    props: {
      jsonData: Array
    },

    data() {
      return {
        listSize: INITIAL_LIST_SIZE,
        genreList: _.sortBy(_.uniq(_.flatten(_.filter(
          _.map(this.jsonData, "genres"), _.size)))),
        titleList: [],
      }
    },

    mounted() {
      for (let it of this.genreList) {
        this.titleList.push(_.filter(
          this.jsonData.slice(BEGIN_TITLE, END_TITLE), (o) => _.includes(_.flatten(o.genres), it)))
      }
    },

  }
</script>

<style scoped>

</style>
