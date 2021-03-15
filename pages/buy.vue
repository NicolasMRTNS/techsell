<template>
  <main class="container">
    <aside>
      <h1>Voici ce que nos clients vendent dans la catégorie :</h1>
      <AppSelect />
    </aside>
    <section class="items">
      <article v-for="product in productData" :key="product._id">
        <img :src="product.image" :alt="product.description" />
        <div class="text-item">
          <div class="name-and-price">
            <p>{{ product.name }}</p>
            <p>{{ product.price }} €</p>
          </div>
          <button :id="product._id" type="submit" class="btn-item">
            Voir l'article
          </button>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import AppSelect from '@/components/AppSelect.vue'
import { mapState } from 'vuex'

export default {
  components: {
    AppSelect,
  },
  computed: {
    ...mapState(['productData']),
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/variables.scss';

aside {
  display: flex;
  margin: 1rem 0;
  :last-child {
    margin-left: 0.8rem;
  }
}
h1 {
  font-size: 1.3rem;
  font-weight: 400;
}
section {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
article {
  border: 2px solid $btn-border-color;
  border-radius: 10px;
  width: max-content;
  margin: 2rem;
  img {
    border-radius: 10px 10px 0 0;
  }
}
.text-item {
  display: flex;
  background: #fff;
  border-radius: 10px;
}
.name-and-price {
  font-size: 1.2rem;
  margin-left: 0.3rem;
}

// Responsive
@media screen and (max-width: 800px) {
  aside {
    flex-direction: column;
    text-align: center;
    place-items: center;
  }
  h1 {
    margin-bottom: 1rem;
  }
}
</style>
