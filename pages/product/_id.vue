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
    <button class="btn-default border-color">Ajouter au panier</button>
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    ...mapState(['productData']),
    // To get the current product, we use a for loop so we can break when the product is found
    currentProduct() {
      let result
      for (let i = 0; i < this.productData.length; i++) {
        if (this.productData[i].id === this.id) {
          result = this.productData[i]
          break
        }
      }
      return result
    },
  },
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
