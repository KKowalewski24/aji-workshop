<template>
  <footer class="page-footer mdb-color font-small">
    <div class="container-fluid footer-copyright text-center py-3">
      &copy; {{msg}}
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",

    props: {
      msg: String
    },

  }
</script>

<style scoped>

</style>
