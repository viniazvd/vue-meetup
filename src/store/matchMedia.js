const state = {
  isMobile: false
}

const mutations = {
  UPDATE (state, value) {
    state.isMobile = value
  }
}

const actions = {
  update ({ commit }, value) {
    commit('UPDATE', value)
  }
}

export default { state, mutations, actions }
