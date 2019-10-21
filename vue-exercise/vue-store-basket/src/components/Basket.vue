<template>
  <div class="container-fluid">
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price EUR</th>
          <th>Add Item</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(it,itemsId) in items" :key="itemsId">
          <td>{{itemsId+1}}</td>
          <td>{{it.name}}</td>
          <td>{{it.description}}</td>
          <td>{{it.price}}</td>
          <td>
            <input class="btn btn-add" type="button" value="Add"/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Basket",

    data() {
      return {
        items: [
          {name: "Audi RS6", description: "4.0 TFSI 600 HP", price: 150000},
          {name: "Mercedes E63s AMG", description: "4.0 612 HP", price: 170000},
          {name: "Volkswagen Golf R", description: "2.0 TSI 300 HP", price: 50000},
          {name: "Ford Focus RS", description: "2.3 EcoBoost 350 HP", price: 40000}
        ],
        cart: []
      }
    },

    methods: {}
  }
</script>

<style scoped>
  table {
    margin-top: 2rem;
  }

  .btn-add {
    background-color: #33b5e5;
    color: #fff;
  }

  thead {
    background-color: #33b5e5;
    color: #fff;
  }
</style>