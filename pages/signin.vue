<template>
  <main v-if="newUserIsRegistered" class="container">
    <AppSigninSuccessfull />
  </main>
  <main v-else class="container">
    <h1 class="form-header">Formulaire d'inscription</h1>
    <form class="form-body">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Mot de passe" />
      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Confirmation mot de passe"
      />
      <button class="btn-default border-color" @click.prevent="signupFunction">
        Inscription
      </button>
      <AppToast v-if="passwordError" class="toast__fail"
        >Les mots de passes ne sont pas identiques</AppToast
      >
      <AppToast v-if="errorWhenSignup && !passwordError" class="toast__fail"
        >Erreur lors de l'inscription, veuillez rééssayer. Si l'erreur persiste,
        merci de
        <a class="support-team-link" href="mailto:nicolas.martins@hotmail.fr"
          >contacter l'équipe support</a
        >.</AppToast
      >
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
import { mapState } from 'vuex'
import AppToast from '@/components/AppToast.vue'
import AppSigninSuccessfull from '@/components/AppSigninSuccessfull.vue'

export default {
  components: {
    AppToast,
    AppSigninSuccessfull
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
    ...mapState(['newUserIsRegistered', 'errorWhenSignup'])
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
        this.passwordError = false
        this.$store.commit('getNewUserInfo', infoOutput)
        this.$store.dispatch('registerNewUser')
      }
    }
  }
}
</script>
