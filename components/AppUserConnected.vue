<template>
  <main class="container text-center">
    <p>
      Vous êtes bien connecté(e) avec l'adresse mail <u>{{ getUserEmail }}</u>
    </p>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getUserEmail']),
  },
}
</script>

<style scoped>
p {
  font-size: 1.5rem;
  margin-top: 1rem;
}
</style>
