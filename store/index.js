export const state = () => ({
  selectOptions: [
    'Portable Android',
    'Portable Apple',
    'PC',
    'Ordinateur Portable',
    'Ordinateur MacOS'
  ],
  productData: [],
  cart: [],
  user: [],
  newProduct: '',
  newUser: [],
  newUserIsRegistered: false,
  isConnected: false,
  userId: '',
  token: '',
  userEmail: '',
  productToDelete: '',
  errorWhenPushing: false,
  invalidLogin: '',
  errorWhenSignup: false
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
  }
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
    state.errorWhenPushing = false
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
    state.invalidLogin = ''
  },
  connectUser: (state, response) => {
    state.errorWhenSignup = false
    state.isConnected = true
    state.newUser = []
    state.newUserIsRegistered = false
    state.user = []
    state.invalidLogin = ''
    state.userId = response.userId
    state.token = response.token
  },
  newUserRegistered: (state) => {
    state.newUserIsRegistered = true
  },
  productError: (state) => {
    state.errorWhenPushing = true
  },
  loginFailed: (state, error) => {
    state.invalidLogin = error
    state.user = []
  },
  signupError: (state) => {
    state.errorWhenSignup = true
  }
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
          authorization: state.token
        }
      })
      .then(() => {
        dispatch('getProductData')
        commit('resetProduct')
      })
      .catch(() => commit('productError'))
  },
  // Delete a product
  async deleteProductFromDatabase({ state, dispatch }) {
    await this.$axios
      .$delete(`/api/products/${state.productToDelete}`)
      .then(() => dispatch('getProductData'))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  },
  // User login
  async loginUser({ state, commit }) {
    await this.$axios
      .$post('/api/auth/login', state.user)
      .then((response) => commit('connectUser', response))
      .catch((error) => {
        error = error.response.data.error
        commit('loginFailed', error)
      })
  },
  // Register new user
  async registerNewUser({ state, commit }) {
    await this.$axios
      .$post('/api/auth/signup', state.newUser)
      .then(() => commit('newUserRegistered'))
      .catch(() => commit('signupError'))
  }
}
