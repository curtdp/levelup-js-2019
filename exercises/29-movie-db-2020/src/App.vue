<template>
  <div id="app">
    <header class="flex items-center justify-between mx-8 mt-4 mb-4">
      <div>
        <div>
          <h1 class="text-2xl bold">{{ $t('title') }}</h1>
        </div>
        <div id="nav">
          <router-link to="/">{{ $t('home') }}</router-link>&nbsp;|
          <router-link :to="{ name: 'About' }">{{ $t('about') }}</router-link>
        </div>
      </div>
      <div class="flex items-center">
        <div class="mr-4">
          <button data-cy="ukrLang" @click="changeLang('uk')">укр</button> |
          <button data-cy="rusLang" @click="changeLang('ru')">рус</button> |
          <button data-cy="engLang" @click="changeLang('en')">eng</button>
        </div>
        <button class="relative px-4 mr-4" v-if="user.username">
          <div class="flex items-center">
            <div class="mr-4">{{user.username}}</div>
            <img
              class="w-8 h-8"
              :src="`https://www.gravatar.com/avatar/${user.avatar.gravatar.hash}`"
              alt
            />
          </div>
          <ul
            class="absolute z-10 w-48 py-2 mt-1 text-left bg-white border border-green-500 rounded shadow-xl"
          >
            <li class="py-1 pl-2 hover:bg-green-600 hover:text-green-100">Списки</li>
            <li class="py-1 pl-2 hover:bg-green-600 hover:text-green-100">Посмотреть позже</li>
            <li @click="logOut" class="py-1 pl-2 hover:bg-green-600 hover:text-green-100">Выход</li>
          </ul>
        </button>
        <div>
          <button
            v-if="!user.username"
            @click="login"
            class="px-4 py-2 mr-4 text-green-700 border border-green-700 rounded hover:bg-green-200"
          >Войти</button>
        </div>
        <SearchBar />
      </div>
    </header>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import SearchBar from '@/components/SearchBar.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'App',
  computed: {
    ...mapState(['isLoggedIn', 'user']),
    lang() {
      return this.$store.state.lang;
    },
  },
  created() {
    if (localStorage.getItem('lang')) {
      this.$store.commit('CHANGE_LOCALE', localStorage.getItem('lang'));
    }
    this.$i18n.locale = this.lang;

    if(localStorage.getItem('session_id')) {
      this.getUserInfo();
    }
  },
  updated() {
    console.log('Session ', localStorage.getItem('session_id'));
  },

  methods: {
    ...mapMutations(['LOG_IN', 'LOG_OUT']),
    ...mapActions(['getUserInfo']),
    async login() {
      const data = await fetch(
        `${process.env.VUE_APP_API_BASE}/authentication/token/new?api_key=${process.env.VUE_APP_API_KEY}`,
      );
      const response = await data.json();
      window.location = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=${window.location.href}`;
    },
    logOut() {
      this.LOG_OUT();
      localStorage.removeItem('session_id');
    },
    changeLang(language) {
      this.$store.commit('CHANGE_LOCALE', language);
    },
  },
  watch: {
    lang(newLang) {
      this.$i18n.locale = newLang;
      localStorage.setItem('lang', newLang);
    },
    $route() {
      if (localStorage.getItem('session_id')) {
        console.log('session_id');
        this.LOG_IN();
      }
    },
  },
  components: {
    SearchBar,
    Footer,
  },
};
</script>

<i18n>
{
  "en": {
    "title": "MovieDB 2020",
    "home": "Home",
    "about": "About"
  },
  "ru": {
    "title": "База фильмов 2020",
    "home": "Главная",
    "about": "О сайте"
  },
  "uk": {
    "title": "База фільмів 2020",
    "home": "Головна",
    "about": "Про сайт"
  }
}
</i18n>

<style src="./assets/css/style.css" />
