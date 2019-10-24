<template>
  <mdb-navbar expand="xl" hamburger togglerIcon="paper-plane" far dark color="mdb-color">
    <mdb-navbar-brand class="text-white">{{msg}}</mdb-navbar-brand>
  </mdb-navbar>
</template>

<script>
  import {
    mdbNavbar,
    mdbNavbarBrand,
  } from 'mdbvue';

  export default {
    name: "Navbar",
    components: {
      mdbNavbar,
      mdbNavbarBrand,
    },
    props: {
      msg: String
    }
  }
</script>

<style scoped>

</style>
