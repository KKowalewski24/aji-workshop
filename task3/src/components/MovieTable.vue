<template>
  <div>
    <table class="table mt-5 table-striped table-bordered">
      <thead class="mdb-color white-text">
        <tr class="text-center">
          <th>Title</th>
          <th>Production Year</th>
          <th>Cast</th>
          <th>Genres</th>
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
    <!--    FIXME BUTTON SHOULD ADD 10 TO TABLESIZE AND RENDER TABLE -->
    <button class="btn btn-block mdb-color white-text m-0" v-on:onclick="expandTable()">
      Load Next
    </button>
  </div>
</template>

<script>
  export default {
    name: "MovieTable",
    components: {},
    props: {
      jsonData: Array
    },
    data() {
      return {
        tableSize: 10,
      }
    },
    methods: {
      expandTable: function () {
        this.tableSize += 10;
      }
    }
  }
</script>

<style scoped>

</style>
