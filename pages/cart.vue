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
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }} €</td>
        </tr>
        <tr class="color-primary">
          <td>Prix total</td>
          <td>{{ totalPrice }} €</td>
        </tr>
      </tbody>
    </table>
    <button
      v-if="!cartHasBeenSubmitted"
      class="btn-default border-color"
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
    ...mapGetters(['totalPrice'])
  },
  methods: {
    cartSubmitted() {
      this.cartHasBeenSubmitted = true
      this.$store.commit('emptyCart')
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
button {
  margin: 0 auto;
  display: block;
  width: 230px;
}
</style>
