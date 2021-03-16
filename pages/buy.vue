<template>
  <main class="container">
    <aside>
      <h1>Voici ce que nos clients vendent dans la catégorie :</h1>
      <select @change="selectedOption = $event.target.value">
        <option v-for="option in selectOptions" :key="option">
          {{ option }}
        </option>
      </select>
    </aside>
    <section class="items">
      <article v-for="product in filteredOption" :key="product._id">
        <img :src="product.image" :alt="product.description" />
        <div class="text-item">
          <div class="name-and-price">
            <p>{{ product.name }}</p>
            <p class="color-primary">{{ product.price }} €</p>
          </div>
          <button :id="product._id" class="btn-item">Voir l'article</button>
        </div>
      </article>
      <!-- Directive for empty return of the filteredOption function -->
      <p v-if="!filteredOption.length" class="text-center">
        Pas d'articles disponibles pour la catégorie {{ selectedOption }}
      </p>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      selectedOption: 'Portable Android',
    }
  },
  computed: {
    ...mapState(['productData', 'selectOptions']),
    // filter options depending on selected option
    filteredOption() {
      return this.productData.filter((el) => {
        return el.category.includes(this.selectedOption)
      })
    },
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
  border-radius: 0 0 10px 10px;
}
.name-and-price {
  font-size: 1.2rem;
  margin-left: 0.3rem;
  width: 120px;
  :last-child {
    font-size: 1.1rem;
  }
}
p {
  font-size: 1.2rem;
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
