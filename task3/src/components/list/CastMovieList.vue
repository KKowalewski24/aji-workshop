<template>
  <div>
    <div class="card">
      <div class="card-header">
        Featured
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import _ from "lodash";

  export default {
    name: "CastMovieList",

    props: {
      jsonData: Array
    },

    data() {
      return {
        tableSize: 10,
        castList: _.uniq(_.flatten(_.filter(_.map(_.slice(this.jsonData, 0, 99), "cast"), _.size)))
      }
    },

    methods: {},
  }
</script>

<style scoped>

</style>