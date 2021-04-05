<template>
  <nav>
    <section class="container">
      <div class="div-link">
        <nuxt-link to="/buy" class="links text-links color-primary"
          >Acheter</nuxt-link
        >
        <nuxt-link to="/sell" class="links text-links color-primary"
          >Vendre</nuxt-link
        >
      </div>
      <div class="brand-div">
        <nuxt-link exact to="/">
          <p class="brand">Tech Sell</p>
        </nuxt-link>
      </div>
      <div class="icons">
        <nuxt-link to="/login">
          <span v-if="isConnected" class="material-icons color-primary"
            >done</span
          >
          <span v-else class="material-icons links color-primary"
            >account_circle</span
          >
        </nuxt-link>
        <nuxt-link to="/cart">
          <span
            v-if="numberOfItemsInCart > 0"
            class="smallnum border-color color-primary"
            >{{ numberOfItemsInCart }}</span
          >
          <span class="material-icons links color-primary">shopping_cart</span>
        </nuxt-link>
      </div>
    </section>
  </nav>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['isConnected']),
    ...mapGetters(['numberOfItemsInCart']),
  },
}
</script>

<style lang="scss" scoped>
nav {
  background-color: #fff;
}
section {
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.div-link {
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
  width: 180px;
}
.links {
  margin: 0 0.5rem;
}
.text-links {
  font-size: 1.3rem;
  font-weight: 600;
}

// Getting the icons lined-up vertically
.icons {
  display: flex;
  a {
    display: flex;
  }
  :first-child {
    margin-left: 0;
    margin-right: 1rem;
  }
  width: 180px;
  justify-content: flex-end;
}
.material-icons {
  font-size: 2.1rem;
}

// Responsive
@media screen and (max-width: 700px) {
  .div-link {
    width: auto;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    place-content: center;
  }
  .text-links {
    font-size: 0.9rem;
    margin: 0 0 0.3rem 0;
    font-weight: 400;
  }
  .icons {
    width: auto;
    :first-child {
      margin-right: 0.5rem;
    }
  }
  .material-icons {
    font-size: 1.5rem;
    margin: 0;
  }
}
</style>
