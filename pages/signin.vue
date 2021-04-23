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
        >Inscription réussie !</AppToast
      >
      <AppToast v-if="errorWhenSignup" class="toast__fail"
        >Erreur lors de l'inscription, veuillez rééssayer. Si l'erreur persiste,
        merci de
        <a href="mailto:nicolas.martins@hotmail.fr"
          >contacter l'équipe support</a
        >.</AppToast
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
    AppToast
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      passwordError: false
    }
  },
  computed: {
    ...mapState(['isConnected', 'errorWhenSignup'])
  },
  methods: {
    signupFunction() {
      if (this.password !== this.confirmPassword) {
        return (this.passwordError = true)
      } else {
        const infoOutput = {
          email: this.email,
          password: this.password
        }
        this.$store.commit('getNewUserInfo', infoOutput)
        this.$store.dispatch('registerNewUser')
      }
    }
  }
}
</script>
