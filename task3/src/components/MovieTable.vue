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
        <tr>
          <th>Title</th>
          <th>Production Year</th>
          <th>Cast</th>
          <th>Genres</th>
        </tr>
        <tr>
          <th>Title</th>
          <th>Production Year</th>
          <th>Cast</th>
          <th>Genres</th>
        </tr>
        <tr>
          <th>Title</th>
          <th>Production Year</th>
          <th>Cast</th>
          <th>Genres</th>
        </tr>
      </mdb-tbl-body>
    </mdb-tbl>
    <mdb-btn class="btn-block m-0" color="mdb-color">Load Next</mdb-btn>
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
    }
  }
</script>

<style scoped>

</style>