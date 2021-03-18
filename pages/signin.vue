<template>
  <main class="container">
    <h1 class="form-header">Formulaire d'inscription</h1>
    <form class="form-body">
      <input id="email" type="email" placeholder="Email" />
      <input id="password" type="password" placeholder="Mot de passe" />
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirmation mot de passe"
      />
      <button id="submitButton" type="submit" class="btn-default border-color">
        Inscription
      </button>
    </form>
    <aside class="form-aside">
      <h2>Déjà client ?</h2>
      <nuxt-link to="/login" class="btn-default border-color"
        >Connexion</nuxt-link
      >
    </aside>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
