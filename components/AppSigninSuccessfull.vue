<template>
  <div class="text-center">
    <h2>Votre inscription a bien été enregistrée, nous vous en remercions.</h2>
    <p>
      Vous pouvez dès à présent vous
      <nuxt-link to="/login">connecter</nuxt-link> pour commencer à profiter de
      toutes les fonctionnalités de
      <span class="color-primary">TechSell™</span>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppSigninSuccessfull'
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
