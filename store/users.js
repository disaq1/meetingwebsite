export const state = () => ({
  response: []
})

export const mutations = {
  setUsers (state, response) {
    state.response = response
  }
}

export const actions = {
  async fetch ({ commit }) {
    const response = await this.$axios.$get('https://dev.rusdat.net/api/test/profiles')
    if (response.status === 200) {
      commit('setUsers', response)
    } else {
      console.log(response.error)
    }
  }
}

export const getters = {
  response: s => s.response
}
