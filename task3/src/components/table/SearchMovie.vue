<template>
  <div class="card mt-5">
    <div class="card-body">
      <li class="list-group">
        <ul class="list-group-item">
          <input type="text" v-model="properties.title" class="form-control" placeholder="Title"/>
        </ul>

        <ul class="list-group-item">
          <input type="number" v-model="properties.dateFrom" class="form-control"
                 placeholder="Production year from:"/>
        </ul>

        <ul class="list-group-item">
          <input type="number" v-model="properties.dateTo" class="form-control"
                 placeholder="Production year to:"/>
        </ul>

        <ul class="list-group-item">
          <input type="text" v-model="properties.cast" class="form-control" placeholder="Cast"/>
        </ul>

        <ul class="list-group-item">
          <input type="text" v-model="properties.genres" class="form-control" placeholder="Genre"/>
        </ul>

        <button v-on:click="searchItems()" class="btn mdb-color white-text m-0">
          Search
        </button>
      </li>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchMovie",
    props: {
      properties: Object,
      searchItems: Function
    }
  }
</script>

<style scoped>

</style>
