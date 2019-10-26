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
        <!--INDEX IS ONLY BECAUSE FIRST VALUE RECEIVES COUNTING
        FROM 1 AND SECOND VALUE IS COUNTED FROM 0-->
        <tr class="text-center" v-for="(index,it) in tableSize" :key="it">
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
  const INITIAL_TABLE_SIZE = 10;

  export default {
    name: "MovieTable",
    components: {},
    props: {
      jsonData: Array,
    },
    data() {
      let tableSize = INITIAL_TABLE_SIZE;
      if (this.jsonData.length < INITIAL_TABLE_SIZE) {
        tableSize = this.jsonData.length;
      } else {
        tableSize = INITIAL_TABLE_SIZE;
      }

      return {
        tableSize
      }
    },
    methods: {
      expandTable: function () {
        if (this.jsonData.length + INITIAL_TABLE_SIZE < this.tableSize) {
          this.tableSize = this.jsonData.length;
        } else {
          this.tableSize += INITIAL_TABLE_SIZE;
        }
      }
    }
  }
</script>

<style scoped>

</style>
