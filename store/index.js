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
      _id: 2153248944598,
      name: 'Pc Asus',
      price: 500,
      category: 'Ordinateur Portable',
      description: "Un PC vendu comme neuf, n'a quasiment jamais été utilisé.",
      image: 'https://picsum.photos/250/200',
    },
    {
      _id: 54542318415,
      name: 'PC HP',
      price: 1500,
      category: 'Ordinateur Portable',
      description: "Un PC vendu comme neuf, n'a quasiment jamais été utilisé.",
      image: 'https://picsum.photos/250/200',
    },
    {
      _id: 5498454542318415,
      name: 'PC Lenovo',
      price: 2000,
      category: 'Ordinateur Portable',
      description: "Un PC vendu comme neuf, n'a quasiment jamais été utilisé.",
      image: 'https://picsum.photos/250/200',
    },
    {
      _id: 778742318415,
      name: 'PC Chrome OS',
      price: 400,
      category: 'Ordinateur Portable',
      description: "Un PC vendu comme neuf, n'a quasiment jamais été utilisé.",
      image: 'https://picsum.photos/250/200',
    },
  ],
})

// export const getters = {
//   getterValue: (state) => {
//     return state.value
//   },
// }

// export const mutations = {
//   updateValue: (state, payload) => {
//     state.value = payload
//   },
// }

// export const actions = {
//   updateActionValue({ commit }) {
//     commit('updateValue', payload)
//   },
// }
