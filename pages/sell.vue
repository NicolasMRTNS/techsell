<template>
  <main class="container">
    <form>
      <input v-model="productName" placeholder="Nom du produit" type="text" />
      <input
        v-model="productPrice"
        placeholder="Prix (en € sans virgule)"
        type="number"
      />
      <AppSelect
        :optionsarray="selectOptions"
        @change="productCategory = $event"
      />
      <textarea
        v-model="productDescription"
        placeholder="Description"
        rows="6"
      ></textarea>
      <input type="file" @change="previewFile" />
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
      this.productImage = event.target.files
    },
  },
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
}
select {
  width: 200px;
}
</style>
