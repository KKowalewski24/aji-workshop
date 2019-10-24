<template>
  <mdb-card class="mt-5">
    <mdb-card-body>
      <mdb-list-group>
        <mdb-list-group-item>
          <input type="text" id=inputTitle class="form-control" placeholder="Title"/>
        </mdb-list-group-item>

        <mdb-list-group-item>
          <input type="text" id=inputProductionFrom class="form-control"
                 placeholder="Production year from:"/>
        </mdb-list-group-item>

        <mdb-list-group-item>
          <input type="text" id=inputProductionTo class="form-control"
                 placeholder="Production year to:"/>
        </mdb-list-group-item>

        <mdb-list-group-item>
          <input type="text" id="inputCast" class="form-control" placeholder="Cast"/>
        </mdb-list-group-item>

        <mdb-btn class="m-0" color="mdb-color">Search</mdb-btn>
      </mdb-list-group>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
  import {mdbCard, mdbListGroup, mdbListGroupItem, mdbBtn, mdbCardBody} from 'mdbvue';

  export default {
    name: "SearchMovie",
    components: {
      mdbCard,
      mdbListGroup,
      mdbCardBody,
      mdbBtn,
      mdbListGroupItem
    }
  }
</script>

<style scoped>

</style>