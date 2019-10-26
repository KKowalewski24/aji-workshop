<template>
  <div class="card mt-5">
    <div class="card-body">
      <li class="list-group">
        <ul class="list-group-item">
          <input type="text" id=inputTitle class="form-control" placeholder="Title"/>
        </ul>

        <ul class="list-group-item">
          <input type="text" id=inputProductionFrom class="form-control"
                 placeholder="Production year from:"/>
        </ul>

        <ul class="list-group-item">
          <input type="text" id=inputProductionTo class="form-control"
                 placeholder="Production year to:"/>
        </ul>

        <ul class="list-group-item">
          <input type="text" id="inputCast" class="form-control" placeholder="Cast"/>
        </ul>

        <button class="btn mdb-color white-text m-0">Search</button>
      </li>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchMovie",
    props: {
      searchProperties: Function
    }
  }
</script>

<style scoped>

</style>