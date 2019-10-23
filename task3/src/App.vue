<template>
  <div id="app">

    <!--Navbar-->
    <mdb-navbar expand="xl" hamburger togglerIcon="paper-plane" far dark
                color="mdb-color">
      <!-- Navbar brand -->
      <mdb-navbar-brand class="text-white">Navbar</mdb-navbar-brand>
<!--      <mdb-navbar-toggler>-->
<!--        <mdb-navbar-nav right>-->
<!--          <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>-->
<!--          <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>-->
<!--          <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>-->
<!--        </mdb-navbar-nav>-->
<!--      </mdb-navbar-toggler>-->
    </mdb-navbar>
    <!--/.Navbar-->

  </div>
</template>

<script>
  import {
    mdbNavbar,
    // mdbNavItem,
    // mdbNavbarNav,
    // mdbNavbarToggler,
    // mdbContainer,
    // mdbRow,
    // mdbInput,
    mdbNavbarBrand,
    // mdbIcon
  } from 'mdbvue';

  export default {
    name: 'app',
    components: {
      mdbNavbar,
      // mdbNavItem,
      // mdbNavbarNav,
      // mdbNavbarToggler,
      // mdbContainer,
      // mdbRow,
      // mdbInput,
      mdbNavbarBrand,
      // mdbIcon
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
