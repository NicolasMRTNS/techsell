<template>
  <main class="container">
    <h3 class="text-center">
      Pour vendre un article, merci de remplir le formulaire suivant :
    </h3>
    <form>
      <input
        v-model="$v.productName.$model"
        placeholder="Nom du produit"
        type="text"
      />
      <input
        v-model="$v.productPrice.$model"
        placeholder="Prix (en € sans virgule)"
        type="number"
      />
      <AppSelect
        :optionsarray="selectOptions"
        @change="$v.productCategory.$model = $event"
      />
      <textarea
        v-model="$v.productDescription.$model"
        placeholder="Description"
        rows="6"
      ></textarea>
      <input type="file" name="imageUpload" @change="previewFile" />
      <img v-if="productImage" :src="productImage" :alt="productDescription" />
      <button
        v-if="!productSubmitted"
        class="btn-default border-color"
        @click.prevent="productOnline"
      >
        Mettre mon article en ligne
      </button>
      <!--If there are errors in the form-->
      <AppToast v-if="errors" class="toast__fail"
        >Erreur(s) dans le formulaire, votre article ne peut pas être mis en
        ligne. Tous les champs sont obligatoires.</AppToast
      >
      <!--If the form is good to go-->
      <AppToast v-if="productSubmitted" class="toast"
        >Votre article a été mis en vente</AppToast
      >
    </form>
  </main>
</template>

<script>
import AppSelect from '@/components/AppSelect.vue'
import AppToast from '@/components/AppToast.vue'
import { mapGetters, mapState } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  components: {
    AppSelect,
    AppToast,
  },
  data() {
    return {
      productName: '',
      productPrice: 0,
      productCategory: '',
      productDescription: '',
      productImage: '',
      productSubmitted: false,
      errors: false,
    }
  },
  // Vuelidate
  validations: {
    productName: {
      required,
    },
    productPrice: {
      required,
    },
    productCategory: {
      required,
    },
    productDescription: {
      required,
    },
    productImage: {
      required,
    },
  },
  computed: {
    ...mapState(['productData', 'selectOptions']),
    ...mapGetters(['getUserId']),
  },
  methods: {
    previewFile(event) {
      this.$v.productImage.$model = event.target.files[0]
    },
    productOnline() {
      // Check if there are any errors in the form
      const nameError = this.$v.productName.$invalid
      const priceError = this.$v.productPrice.$invalid
      const categoryError = this.$v.productCategory.$invalid
      const descriptionError = this.$v.productDescription.$invalid
      const imageError = this.$v.productImage.$invalid
      if (
        nameError ||
        priceError ||
        categoryError ||
        descriptionError ||
        imageError
      ) {
        this.errors = true
      } else {
        // Using a formData to handle post
        const productToPushInDatabase = new FormData()
        productToPushInDatabase.append('name', this.productName)
        productToPushInDatabase.append('price', this.productPrice)
        productToPushInDatabase.append('description', this.productDescription)
        productToPushInDatabase.append('category', this.productCategory)
        productToPushInDatabase.append('image', this.productImage)
        productToPushInDatabase.append('userId', this.getUserId)
        this.errors = false
        this.productSubmitted = true
        this.$store.commit('newProductToMutate', productToPushInDatabase)
        this.$store.dispatch('pushToDatabase')
      }
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
