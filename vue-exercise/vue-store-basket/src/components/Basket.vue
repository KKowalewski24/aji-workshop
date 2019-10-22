<template>
  <div class="container">
    <table class="table table-striped table-bordered mt-5">
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
            <input class="btn btn-add" type="button" value="Add" v-on:click="addItem(it)"/>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="card my-4">
      <div class="card-body">
        <h5 class="card-title">Chosen Items</h5>

        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(it,cartId) in cart" :key="cartId">
              <td>{{it.name}}</td>
              <td>{{it.unitPrice}}</td>
              <td>{{it.quantity}}</td>
            </tr>
            <!--            <tr v-if="cart.length">-->
            <!--              <td>-->
            <!--                {{calculateTotalPrice(this.cart)}}-->
            <!--              </td>-->
            <!--            </tr>-->
            <!--            <tr v-else>-->
            <!--              <td class="empty-card">-->
            <!--                Empty Cart-->
            <!--              </td>-->
            <!--            </tr>-->
          </tbody>
        </table>

      </div>
    </div>
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

    methods: {
      addItem: function (item) {
        //FIXME IMPROVE CONDITION
        if (this.cart.includes(item)) {
          this.cart.quantity += 1;
        } else {
          this.cart.push({
            name: item.name,
            unitPrice: item.price,
            quantity: 1
          });
        }
      }
    },

    computed: {
      // calculateTotalPrice: function (cartItems) {
      //   let totalPrice = 0;
      //   cartItems.forEach(it => totalPrice += it.unitPrice + it.quantity);
      //
      //   return totalPrice;
      // }
    }
  }
</script>

<style scoped>
  thead {
    background-color: #33b5e5;
    color: #fff;
  }

  .btn-add {
    background-color: #33b5e5;
    color: #fff;
  }

  .empty-card {
    color: #ff3547;
  }
</style>
