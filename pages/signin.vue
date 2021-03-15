<template>
  <main class="container">
    <h1>Formulaire d'inscription</h1>
    <form>
      <input id="email" type="email" placeholder="Email" />
      <input id="password" type="password" placeholder="Mot de passe" />
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirmation mot de passe"
      />
      <button id="submitButton" type="submit" class="btn-default">
        Inscription
      </button>
    </form>
    <aside>
      <h2>Déjà client ?</h2>
      <nuxt-link to="/login" class="btn-default">Connexion</nuxt-link>
    </aside>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/variables.scss';

h1 {
  text-align: center;
  margin: 1.5rem 0;
}
form {
  display: flex;
  flex-direction: column;
  place-items: center;
}
button {
  cursor: pointer;
  margin-top: 1.3rem;
}
aside {
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-top: 20vh;
  h2 {
    margin-bottom: 1rem;
  }
  margin-bottom: 1rem;
}
</style>
