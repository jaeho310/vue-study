// Pathify
import { make } from 'vuex-pathify'

const state = {
  items: [
    {
      title: "home",
      to: '/',
      icon: 'mdi-home'
    },
    {
      title: 'test',
      to : '/test',
      icon: 'mdi-ghost'
    },
  ]
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
    console.log(dispatch)
  },
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
