<template>
  <div>
    <h2 class="text-center color-primary">Votre panier est vide</h2>
    <p class="text-center">
      N'hésitez pas à faire un tour sur notre
      <nuxt-link to="/buy">page d'achat</nuxt-link>
      pour voir ce que nos clients ont de mieux à vous proposer.<br />
      Si vous êtes ici pour vendre, vous pouvez vous diriger vers notre
      <nuxt-link to="/sell">formulaire de vente</nuxt-link>
      pour rejoindre des centaines d'autres vendeurs particuliers.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppEmptyCart'
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 1.5rem;
}
p {
  font-size: 1.2rem;
  line-height: 1.5rem;
}
a {
  text-decoration: underline;
}
</style>
