<template>
  <main class="container">
    <h2 class="text-center">Intéressé(e) par un {{ currentProduct.name }} ?</h2>
    <section>
      <img :src="currentProduct.image" :alt="currentProduct.description" />
      <article>
        <fieldset>
          <legend><h4>Nom du produit</h4></legend>
          <p>{{ currentProduct.name }}</p>
        </fieldset>
        <fieldset>
          <legend><h4>Prix</h4></legend>
          <p>{{ currentProduct.price }} €</p>
        </fieldset>
        <fieldset>
          <legend><h4>Catégorie</h4></legend>
          <p>{{ currentProduct.category }}</p>
        </fieldset>
        <fieldset>
          <legend><h4>Description</h4></legend>
          <p>{{ currentProduct.description }}</p>
        </fieldset>
      </article>
    </section>
    <button
      v-if="!cartSubmitted && currentProduct.userId !== userId"
      class="btn-default border-color"
      @click="addToCart"
    >
      Ajouter au panier
    </button>
    <nuxt-link
      v-if="currentProduct.userId === userId"
      type="button"
      to="/buy"
      class="btn-danger"
      @click.native="deleteProduct"
    >
      Supprimer le produit
    </nuxt-link>
    <AppToast v-if="cartSubmitted" class="toast"
      >Article ajouté au panier avec succès</AppToast
    >
  </main>
</template>

<script>
import { mapState } from 'vuex'
import AppToast from '~/components/AppToast.vue'

export default {
  components: {
    AppToast
  },
  data() {
    return {
      id: this.$route.params.id,
      cartSubmitted: false
    }
  },
  computed: {
    ...mapState(['productData', 'userId']),
    // To get the current product, we use a for loop so we can break when the product is found
    currentProduct() {
      let result
      for (let i = 0; i < this.productData.length; i++) {
        if (this.productData[i]._id === this.id) {
          result = this.productData[i]
          break
        }
      }
      return result
    }
  },
  methods: {
    addToCart() {
      const formOutput = {
        id: this.currentProduct._id,
        name: this.currentProduct.name,
        price: this.currentProduct.price
      }
      this.cartSubmitted = true
      this.$store.commit('addToCart', formOutput)
    },
    deleteProduct() {
      const productToDelete = this.currentProduct._id
      this.$store.commit('deletedProduct', productToDelete)
      this.$store.dispatch('deleteProductFromDatabase')
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 1rem;
}
section {
  display: flex;
  margin-top: 1rem;
  justify-content: space-evenly;
  img {
    place-self: center;
  }
}
article {
  font-size: 1.1rem;
}
p {
  color: #000;
}
button {
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 220px;
}

a {
  @extend button;
  margin-top: 1rem;
  border-color: #a8060e;
}

// Responsive
@media screen and (max-width: 700px) {
  section {
    flex-direction: column;
    place-items: center;
  }
  article {
    margin: 1rem 0;
  }
}
</style>
