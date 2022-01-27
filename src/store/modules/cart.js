const state = {
  cartList: []
}
const actions = {
  addCart(context, payload) {
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

    if(oldProduct) {
      context.commit('addCounter', oldProduct)
    }else {
      context.commit('addToCart', payload)
    } 
  }
}

const mutations = {
  addCounter(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    payload.count = 1
    state.cartList.push(payload)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}