import Vue from 'vue';
import Vuex from 'vuex';
import config from '../config.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: 'ru',
    isLoading: false,
    currentPage: 1,
    moviesResponse: {},
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
  },
  actions: {
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
