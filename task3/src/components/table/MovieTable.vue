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
    <button class="btn btn-block mdb-color white-text m-0" v-on:click="expandTable()">
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
      let tableSize;
      if (this.jsonData.length < 10) {
        tableSize = this.jsonData.length;
      } else {
        tableSize = 10;
      }
      return {
        tableSize
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
