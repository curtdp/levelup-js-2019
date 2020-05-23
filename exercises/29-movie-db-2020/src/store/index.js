import Vue from 'vue';
import Vuex from 'vuex';
import config from '../config.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    lang: 'ru',
    isLoading: false,
    currentPage: 1,
    moviesResponse: {},
    user: {},
  },
  getters: {
    moviesList(state) {
      return state.moviesResponse.results;
    },
    totalPages(state) {
      return state.moviesResponse.total_pages;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CHANGE_LOCALE(state, language) {
      state.lang = language;
    },
    CHANGE_LOADING(state, loadingState) {
      state.isLoading = loadingState;
    },
    LOAD_MOVIES(state, apiResponse) {
      state.moviesResponse = apiResponse;
    },
    SET_PAGE(state, page) {
      state.currentPage = page;
    },
    LOG_IN(state) {
      state.isLoggedIn = true;
    },
    LOG_OUT(state) {
      state.isLoggedIn = false;
      state.user = {};
    },
  },
  actions: {
    async getUserInfo({ commit }) {
      commit('CHANGE_LOADING', true);
      try {
        const response = await fetch(
          `${config.api_base_url}/account/movie?api_key=${
            config.api_key
          }&session_id=${localStorage.getItem('session_id')}`,
        );
        const json = await response.json();
        console.log(json);
        commit('SET_USER', json);
        commit('CHANGE_LOADING', false);
      } catch (error) {
        console.error(error);
        commit('CHANGE_LOADING', false);
      }
    },
    nextPage({ state, dispatch }) {
      dispatch('getMovies', {
        page: state.currentPage + 1,
      });
    },
    prevPage({ state, dispatch }) {
      dispatch('getMovies', {
        page: state.currentPage - 1,
      });
    },
    async getMovies({ commit, state }, { page }) {
      commit('CHANGE_LOADING', true);
      try {
        const response = await fetch(
          `${config.api_base_url}/discover/movie?sort_by=popularity.desc&page=${page}&language=${state.lang}&api_key=${config.api_key}`,
        );
        const json = await response.json();
        console.log(json);
        commit('LOAD_MOVIES', json);
        commit('CHANGE_LOADING', false);
      } catch (error) {
        console.error(error);
        commit('CHANGE_LOADING', false);
      }
    },
    async getSearchResults({ commit }, { page, searchQuery }) {
      commit('CHANGE_LOADING', true);
      try {
        const response = await fetch(
          `${config.api_base_url}/search/movie?page=${page}&query=${searchQuery}&api_key=${config.api_key}`,
        );
        const json = await response.json();
        console.log(json);
        commit('LOAD_MOVIES', json);
        commit('CHANGE_LOADING', false);
      } catch (error) {
        console.error(error);
        commit('CHANGE_LOADING', false);
      }
    },
  },
  modules: {},
});
