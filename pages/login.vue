<template>
  <main class="container">
    <h1 class="form-header">Formulaire de connexion</h1>
    <form class="form-body">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Mot de passe" />
      <button class="btn-default border-color" @click.prevent="login">
        Connexion
      </button>
    </form>
    <aside class="form-aside">
      <h2>Pas encore client ?</h2>
      <nuxt-link to="/signin" class="btn-default border-color"
        >Inscription</nuxt-link
      >
    </aside>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      const loginInfo = {
        email: this.email,
        password: this.password,
      }
      this.$store.commit('loginUserInfo', loginInfo)
      this.$store.dispatch('loginUser')
    },
  },
}
</script>

<style lang="scss" scoped></style>
