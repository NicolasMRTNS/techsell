<template>
  <main class="container">
    <h1 class="form-header">Formulaire d'inscription</h1>
    <form class="form-body">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Mot de passe" />
      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Confirmation mot de passe"
      />
      <button
        v-if="!isConnected"
        class="btn-default border-color"
        @click.prevent="signupFunction"
      >
        Inscription
      </button>
      <AppToast v-if="isConnected" class="toast"
        >Inscription réussie, vous êtes maintenant connecté !</AppToast
      >
    </form>
    <aside v-if="!isConnected" class="form-aside">
      <h2>Déjà client ?</h2>
      <nuxt-link to="/login" class="btn-default border-color"
        >Connexion</nuxt-link
      >
    </aside>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import AppToast from '@/components/AppToast.vue'

export default {
  components: {
    AppToast,
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      passwordError: false,
    }
  },
  computed: {
    ...mapState(['isConnected']),
  },
  methods: {
    signupFunction() {
      if (this.password !== this.confirmPassword) {
        return (this.passwordError = true)
      } else {
        const infoOutput = {
          email: this.email,
          password: this.password,
        }
        this.$store.commit('getNewUserInfo', infoOutput)
        this.$store.dispatch('registerNewUser')
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
