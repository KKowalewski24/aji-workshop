<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(it,index) in products" :key="index">
        <td>{{it.name}}</td>
        <td>{{it.description}}</td>
        <td>{{it.price}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Products",

    data() {
      return {
        products: [],
      }
    },

    mounted() {
      let self = this;
      axios.get("http://127.0.0.1:8081/products")
        .then((res) => self.products = res.data)
    },

  }
</script>

<style scoped>

</style>
