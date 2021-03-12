<template>
  <nav>
    <section>
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
  height: 50px;
  margin: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
a {
  text-decoration: none;
}
.div-link :last-child {
  margin-right: 0;
}
.links {
  margin: 0 0.5rem;
  color: $primary;
}
.text-links {
  font-size: 1.2rem;
  font-weight: 600;
}
.brand-div {
  margin-left: -4rem;
}
.brand {
  font-family: 'Lobster', 'Courier New', Courier, monospace;
  font-size: 2.8rem;
  color: $secondary;
}
// Getting the icons lined-up vertically
.icons {
  display: flex;
  a {
    display: flex;
  }
}
</style>
