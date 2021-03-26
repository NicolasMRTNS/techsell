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
}

export const actions = {
  async getProductData({ state, commit }) {
    if (state.productData.length) return
    try {
      await fetch('http://localhost:4200/api/products', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          commit('updateProductData', data)
        })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  },
}
