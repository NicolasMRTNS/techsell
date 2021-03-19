<template>
  <main class="container">
    <h2 class="text-center">Récapitulatif de votre panier</h2>
    <table>
      <thead class="color-primary">
        <tr>
          <th>Produit</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Xiamio Redmi Note 8T</td>
          <td>500 €</td>
        </tr>
        <tr class="color-primary">
          <td>Prix total</td>
          <td>500 €</td>
        </tr>
      </tbody>
    </table>
    <button class="btn-default border-color">Valider mon panier</button>
  </main>
</template>

<script>
export default {}
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
