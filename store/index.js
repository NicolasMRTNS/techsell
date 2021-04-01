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
  user: [],
  newProduct: '',
  newUser: [],
  isConnected: false,
  userId: '',
  userEmail: '',
  productToDelete: '',
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
  getUserId: (state) => {
    return state.userId
  },
  getUserEmail: (state) => {
    return state.userEmail
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
    state.newProduct = productToPushInDatabase
  },
  resetProduct: (state) => {
    state.newProduct = ''
  },
  deletedProduct: (state, productToDelete) => {
    state.productToDelete = productToDelete
  },
  getNewUserInfo: (state, infoOutput) => {
    state.newUser.push(infoOutput)
  },
  loginUserInfo: (state, loginInfo) => {
    state.user.push(loginInfo)
    state.userEmail = loginInfo.email
  },
  connectUser: (state, response) => {
    state.isConnected = true
    state.newUser = []
    state.user = []
    state.userId = response.userId
  },
}

export const actions = {
  // Get all products
  async getProductData({ commit }) {
    await this.$axios
      .$get('/api/products')
      .then((data) => {
        commit('updateProductData', data)
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(error))
  },
  // Post a product
  async pushToDatabase({ state, dispatch, commit }) {
    await this.$axios
      .$post('/api/products', state.newProduct, {
        headers: {
          enctype: 'multipart/form-data',
        },
      })
      .then(() => {
        dispatch('getProductData')
        commit('resetProduct')
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(error))
  },
  // Delete a product
  async deleteProductFromDatabase({ state }) {
    await this.$axios
      .$delete(`/api/products/${state.productToDelete}`)
      // eslint-disable-next-line no-console
      .then(() => console.log('Produit supprimé'))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  },
  // User login
  async loginUser({ state, commit }) {
    await this.$axios
      .$post('/api/auth/login', state.user)
      .then((response) => commit('connectUser', response))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  },
  // Register new user
  async registerNewUser({ state, commit }) {
    await this.$axios
      .$post('/api/auth/signup', state.newUser)
      .then(() => commit('connectUser'))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  },
}
