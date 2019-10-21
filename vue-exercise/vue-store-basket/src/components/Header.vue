<template>
  <nav class="navbar navbar-expand-lg">
    <p class="navbar-brand m-auto">{{msg}}</p>
  </nav>
</template>

<script>
  export default {
    name: "Header",
    props: {
      msg: String
    }
  }
</script>

<style scoped>
  nav {
    background-color: #33b5e5;
  }

  p {
    color: #fff;
    font-size: 2rem;
  }
</style>