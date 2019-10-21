<template>
  <nav class="navbar navbar-expand-lg">
    <p class="navbar-brand pl-3">{{msg}} <i class="wi wi-day-showers ml-auto pr-3"></i></p>

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

  @media (max-width: 500px) {
    p {
      font-size: 1rem;
    }
  }
</style>