export const state = () => ({
  selectOptions: [
    'Portable Android',
    'Portable Apple',
    'PC',
    'Ordinateur Portable',
    'Ordinateur MacOS',
  ],
  productData: [
    {
      id: '2153248944598',
      name: 'Xiaomi Redmi Note 8T',
      price: 500,
      category: 'Portable Android',
      description: "Un PC vendu comme neuf, n'a quasiment jamais été utilisé.",
      image: 'https://picsum.photos/250/200',
    },
    {
      id: '54542318415',
      name: 'Ordinateur portable HP',
      price: 1500,
      category: 'Ordinateur Portable',
      description: "Un PC vendu comme neuf, n'a quasiment jamais été utilisé.",
      image: 'https://picsum.photos/250/200',
    },
    {
      id: '5498454542318415',
      name: 'MacBook Pro 17 pouces',
      price: 2000,
      category: 'Ordinateur MacOS',
      description: "Un PC vendu comme neuf, n'a quasiment jamais été utilisé.",
      image: 'https://picsum.photos/250/200',
    },
    {
      id: '778742318415',
      name: 'iPhone X Max',
      price: 400,
      category: 'Portable Apple',
      description: "Un PC vendu comme neuf, n'a quasiment jamais été utilisé.",
      image: 'https://picsum.photos/250/200',
    },
  ],
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
  addToCart: (state, formOutput) => {
    state.cart.push(formOutput)
  },
  emptyCart: (state) => {
    state.cart = []
  },
}

// export const actions = {
//   updateActionValue({ commit }) {
//     commit('updateValue', payload)
//   },
// }
