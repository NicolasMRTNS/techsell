<template>
  <main v-if="cart.length === 0" class="container">
    <AppEmptyCart />
  </main>
  <main v-else class="container">
    <h2 class="text-center">Récapitulatif de votre panier</h2>
    <table>
      <thead class="color-primary">
        <tr>
          <th>Produit</th>
          <th>Prix</th>
          <th>Supprimer des articles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }} €</td>
          <td>
            <button class="btn-delete" @click="deleteProductFromCart(item.id)">
              <span class="material-icons color-primary">delete</span>
            </button>
          </td>
        </tr>
        <tr class="color-primary">
          <td>Prix total</td>
          <td>{{ totalPrice }} €</td>
          <td>{{ numberOfItemsInCart }} articles</td>
        </tr>
      </tbody>
    </table>
    <button
      v-if="!cartHasBeenSubmitted"
      class="btn-default border-color btn-confirm"
      @click.prevent="cartSubmitted"
    >
      Valider mon panier
    </button>
    <AppToast v-if="cartHasBeenSubmitted" class="toast"
      >Panier validé, merci pour votre achat sur Tech Sell !</AppToast
    >
  </main>
</template>

<script>
import AppToast from '@/components/AppToast.vue'
import AppEmptyCart from '@/components/AppEmptyCart.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    AppToast,
    AppEmptyCart
  },
  data() {
    return {
      cartHasBeenSubmitted: false
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalPrice', 'numberOfItemsInCart'])
  },
  methods: {
    cartSubmitted() {
      this.cartHasBeenSubmitted = true
      this.$store.commit('emptyCart')
    },
    deleteProductFromCart(id) {
      const itemToDelete = id
      this.$store.commit('updateCart', itemToDelete)
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 1.2rem 0;
}
tr.color-primary {
  font-size: 1.1rem;
  background-color: #fff;
}
.btn-delete {
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
}
</style>
