<template>
  <main class="container">
    <h1 class="form-header">Formulaire de connexion</h1>
    <form class="form-body">
      <input id="email" type="email" placeholder="Email" />
      <input id="password" type="password" placeholder="Mot de passe" />
      <button id="submitButton" type="submit" class="btn-default">
        Connexion
      </button>
    </form>
    <aside class="form-aside">
      <h2>Pas encore client ?</h2>
      <nuxt-link to="/signin" class="btn-default">Inscription</nuxt-link>
    </aside>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
