export const state = () => ({
  selectOptions: [
    'Portable Android',
    'Portable Apple',
    'PC',
    'Ordinateur Portable',
    'Ordinateur MacOS',
  ],
  productData: [],
  cart: [],
  newProduct: [],
})

export const getters = {
  totalPrice: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + +next.price, 0)
  },
  numberOfItemsInCart: (state) => {
    if (!state.cart.length) return 0
    return state.cart.length
  },
}

export const mutations = {
  updateProductData: (state, data) => {
    state.productData = data
  },
  addToCart: (state, formOutput) => {
    state.cart.push(formOutput)
  },
  emptyCart: (state) => {
    state.cart = []
  },
  newProductToMutate: (state, productToPushInDatabase) => {
    state.newProduct.push(productToPushInDatabase)
  },
}

export const actions = {
  async getProductData({ state, commit }) {
    if (state.productData.length) return
    try {
      await this.$axios.$get('/api/products').then((data) => {
        commit('updateProductData', data)
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  },
  async pushToDatabase({ state }) {
    await this.$axios
      .$post('/api/products', state.newProduct)
      // eslint-disable-next-line no-console
      .then((response) => console.log(response))
      // eslint-disable-next-line no-console
      .catch((error) => console.error(error))
  },
}
