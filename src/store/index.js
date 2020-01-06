import Vue from 'vue'
import Vuex from 'vuex'

import matchMedia from './matchMedia'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,

  modules: {
    matchMedia: matchMedia
  }
})
