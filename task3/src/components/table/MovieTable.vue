<template>
  <div>
    <table class="table table-striped table-bordered mb-0">
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
          <td>{{jsonData[it].title}}</td>
          <td>{{jsonData[it].year}}</td>
          <td>{{jsonData[it].cast.toString().split(",").join("\n")}}</td>
          <td>{{jsonData[it].genres.toString().split(",").join("\n")}}</td>
        </tr>
      </tbody>
    </table>

    <div v-if="isButtonVisible">
      <button class="btn btn-block mdb-color white-text m-0" v-on:click="expandTable()">
        Load Next
      </button>
    </div>
  </div>
</template>

<script>
  const INITIAL_TABLE_SIZE = 10;

  export default {
    name: "MovieTable",

    props: {
      jsonData: Array,
    },

    data() {
      let tableSize = INITIAL_TABLE_SIZE;
      let isButtonVisible = true;

      if (this.jsonData.length < INITIAL_TABLE_SIZE) {
        tableSize = this.jsonData.length;
        isButtonVisible = false;
      } else {
        tableSize = INITIAL_TABLE_SIZE;
        isButtonVisible = true;
      }

      return {
        tableSize,
        isButtonVisible
      }
    },

    methods: {
      expandTable: function () {
        if (this.jsonData.length + INITIAL_TABLE_SIZE <= this.tableSize) {
          this.tableSize = this.jsonData.length;
          this.isButtonVisible = false;
        } else {
          this.tableSize += INITIAL_TABLE_SIZE;
          this.isButtonVisible = true;
        }
      }
    },

  }
</script>

<style scoped>
  th, td {
    padding: 0.5rem !important;
  }
</style>
