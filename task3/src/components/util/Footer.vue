<template>
  <mdb-footer class="font-small mt-4" color="mdb-color">
    <div class="text-center py-3">
      <mdb-container fluid>
        &copy; {{msg}}
      </mdb-container>
    </div>
  </mdb-footer>
</template>

<script>
  import {mdbFooter, mdbContainer} from 'mdbvue';

  export default {
    name: "Footer",
    components: {
      mdbFooter,
      mdbContainer,
    },
    props: {
      msg: String
    }
  }
</script>

<style scoped>

</style>