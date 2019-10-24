<template>
  <div>
    <mdb-tbl class="mt-5" striped bordered>
      <mdb-tbl-head color="mdb-color" textWhite>
        <tr>
          <th>Title</th>
          <th>Production Year</th>
          <th>Cast</th>
          <th>Genres</th>
        </tr>
      </mdb-tbl-head>
      <mdb-tbl-body>
        <tr v-for="it in tableSize" :key="it">
          <th>{{jsonData[it].title}}</th>
          <th>{{jsonData[it].year}}</th>
          <th>{{jsonData[it].cast.toString().split(",").join("\n")}}</th>
          <th>{{jsonData[it].genres.toString().split(",").join("\n")}}</th>
        </tr>
      </mdb-tbl-body>
    </mdb-tbl>
    <mdb-btn class="btn-block m-0" color="mdb-color" v-on:onclick="expandTable()">
      Load Next
    </mdb-btn>
  </div>
</template>

<script>
  import {mdbTbl, mdbTblHead, mdbBtn, mdbTblBody} from 'mdbvue';

  export default {
    name: "MovieTable",
    components: {
      mdbTbl,
      mdbTblHead,
      mdbBtn,
      mdbTblBody
    },
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
