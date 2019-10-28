<template>
  <div>
    <table class="table table-striped table-bordered">
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
    components: {},
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
  th {
    padding: 0.5rem !important;
  }
</style>
