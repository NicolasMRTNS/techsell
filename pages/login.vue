<template>
  <AppUserConnected v-if="isConnected" />
  <main v-else class="container">
    <h1 class="form-header">Formulaire de connexion</h1>
    <form class="form-body">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        autocomplete="on"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Mot de passe"
        autocomplete="on"
      />
      <button class="btn-default border-color" @click.prevent="login">
        Connexion
      </button>
      <AppToast v-if="invalidLogin !== ''" class="toast__fail">{{
        invalidLogin
      }}</AppToast>
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
import { mapState } from 'vuex'
import AppUserConnected from '@/components/AppUserConnected.vue'
import AppToast from '@/components/AppToast.vue'

export default {
  components: {
    AppUserConnected,
    AppToast
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['isConnected', 'invalidLogin'])
  },
  methods: {
    login() {
      const loginInfo = {
        email: this.email,
        password: this.password
      }
      this.$store.commit('loginUserInfo', loginInfo)
      this.$store.dispatch('loginUser')
    }
  }
}
</script>

<style lang="scss" scoped></style>
