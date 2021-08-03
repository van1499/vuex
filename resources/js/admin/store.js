import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
    users: [],
};

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  },
};

const actions = {
    async getUsers (context) {
        const response = await axios.get('/users');

        context.commit('set', ['users', response.data.data]);
    },
};

export default new Vuex.Store({
  state,
  mutations,
    actions
})
