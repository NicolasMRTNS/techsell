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
  newProduct: [],
  newUser: [],
  isConnected: false,
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
  getNewUserInfo: (state, infoOutput) => {
    state.newUser.push(infoOutput)
  },
  loginUserInfo: (state, loginInfo) => {
    state.user.push(loginInfo)
  },
  connectUser: (state) => {
    state.isConnected = true
    state.newUser = []
  },
}

export const actions = {
  async getProductData({ state, commit }) {
    if (state.productData.length) return
    try {
      await this.$axios.$get('/products').then((data) => {
        commit('updateProductData', data)
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  },
  async pushToDatabase({ state }) {
    await this.$axios
      .$post('/products', state.newProduct)
      // eslint-disable-next-line no-console
      .then((response) => console.log(response))
      // eslint-disable-next-line no-console
      .catch((error) => console.error(error))
  },
  async loginUser({ state, commit }) {
    await this.$axios
      .$post('/auth/login', state.user)
      .then(() => commit('connectUser'))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  },
  async registerNewUser({ state, commit }) {
    await this.$axios
      .$post('/auth/signup', state.newUser)
      .then(() => commit('connectUser'))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  },
}
