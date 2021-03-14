<template>
  <nav>
    <section class="container">
      <div class="div-link">
        <nuxt-link to="/buy" class="links text-links">Acheter</nuxt-link>
        <nuxt-link to="/sell" class="links text-links">Vendre</nuxt-link>
      </div>
      <div class="brand-div">
        <nuxt-link exact to="/">
          <p class="brand">Tech Sell</p>
        </nuxt-link>
      </div>
      <div class="icons">
        <nuxt-link to="/signin">
          <span class="material-icons links">account_circle</span>
        </nuxt-link>
        <nuxt-link to="/cart">
          <span class="material-icons links">shopping_cart</span>
        </nuxt-link>
      </div>
    </section>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// Import for variables
@import '~/assets/variables.scss';

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
  color: $primary;
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
</style>
