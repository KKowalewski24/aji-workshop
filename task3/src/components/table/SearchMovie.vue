<template>
  <li class="list-group">
    <ul class="list-group-item">
      <input type="text" v-model="properties.title" class="form-control" placeholder="Title"/>
    </ul>

    <ul class="list-group-item">
      <input type="number" v-model="properties.dateFrom" class="form-control"
             placeholder="Production year from:" min="1900" max="2100"/>
    </ul>

    <ul class="list-group-item">
      <input type="number" v-model="properties.dateTo" class="form-control"
             placeholder="Production year to:" min="1900" max="2100"/>
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
    <button v-on:click="clearItems()" class="btn mdb-color lighten-2 white-text m-0">
      Clear
    </button>
  </li>
</template>

<script>
  export default {
    name: "SearchMovie",

    props: {
      properties: Object,
      searchItems: Function,
      clearItems: Function,
    },

  }
</script>

<style scoped>

</style>
