<template>
  <main class="container">
    <h3 class="text-center">
      Pour vendre un article, merci de remplir le formulaire suivant :
    </h3>
    <form>
      <input
        v-model="productName"
        placeholder="Nom du produit"
        type="text"
        required
      />
      <input
        v-model="productPrice"
        placeholder="Prix (en € sans virgule)"
        type="number"
        required
      />
      <AppSelect
        :optionsarray="selectOptions"
        @change="productCategory = $event"
      />
      <textarea
        v-model="productDescription"
        placeholder="Description"
        rows="6"
        required
      ></textarea>
      <input type="file" required @change="previewFile" />
      <img v-if="productImage" :src="productImage" :alt="productDescription" />
      <button type="submit" class="btn-default">
        Mettre mon article en ligne
      </button>
    </form>
  </main>
</template>

<script>
import AppSelect from '@/components/AppSelect.vue'
import { mapState } from 'vuex'

export default {
  components: {
    AppSelect,
  },
  data() {
    return {
      productName: '',
      productPrice: '',
      productCategory: '',
      productDescription: '',
      productImage: '',
    }
  },
  computed: {
    ...mapState(['productData', 'selectOptions']),
  },
  methods: {
    previewFile(event) {
      this.productImage = event.target.files[0]
    },
  },
}
</script>

<style lang="scss" scoped>
h3 {
  margin-top: 1rem;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  :nth-child(2) {
    margin-top: 0;
  }
}
select {
  padding: 0.7rem;
  border-radius: 10px;
}
input,
textarea,
button,
select {
  width: 300px;
}
button {
  margin-bottom: 1rem;
}
</style>
