import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    componentes: [{
      indice: 1,
      titulo: 'Componente 1'
    },
    {
      indice: 2,
      titulo: 'Componente 2'
    },{
      indice: 3,
      titulo: 'Componente 3'
    }]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
