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
  getNewUserInfo: (state, infoOutput) => {
    state.newUser.push(infoOutput)
  },
  loginUserInfo: (state, loginInfo) => {
    state.user.push(loginInfo)
  },
  connectUser: (state, response) => {
    state.isConnected = true
    state.newUser = []
    state.user = []
    state.userId = response.userId
  },
}

export const actions = {
  async getProductData({ commit }) {
    await this.$axios
      .$get('/api/products')
      .then((data) => {
        commit('updateProductData', data)
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(error))
  },
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
  async loginUser({ state, commit }) {
    await this.$axios
      .$post('/api/auth/login', state.user)
      .then((response) => commit('connectUser', response))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  },
  async registerNewUser({ state, commit }) {
    await this.$axios
      .$post('/api/auth/signup', state.newUser)
      .then(() => commit('connectUser'))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  },
}
