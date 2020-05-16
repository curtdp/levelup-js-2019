<template>
  <div id="app">
    <header class="flex items-center justify-between mx-8 mt-4 mb-4">
      <div>
        <div>
          <h1 class="text-2xl bold">{{ $t('title')}}</h1>
        </div>
        <div id="nav">
          <router-link to="/">{{ $t('home')}}</router-link>&nbsp;|
          <router-link :to="{ name: 'About' }">{{ $t('about')}}</router-link>
        </div>
      </div>
      <div class="flex items-center">
        <div class="mr-4">
          <button data-cy="ukrLang" @click="lang = 'uk'">укр</button> |
          <button data-cy="rusLang" @click="lang = 'ru'">рус</button> |
          <button data-cy="engLang" @click="lang = 'en'">eng</button>
        </div>
        <div>
          <button
            v-if="!isLoggedIn"
            @click="login"
            class="px-4 py-2 mr-4 text-green-700 border border-green-700 rounded hover:bg-green-200"
          >Войти</button>
          <button
            v-else
            @click="logOut"
            class="px-4 py-2 mr-4 text-green-700 border border-green-700 rounded hover:bg-green-200"
          >Выйти</button>
        </div>
        <SearchBar :lang="lang" />
      </div>
    </header>
    <router-view :lang="lang" @auth="doAuth" />
    <Footer />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'App',
  data() {
    return {
      lang: 'ru',
      isLoggedIn: false
    };
  },
  created() {
    if (localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang');
    }
    this.$i18n.locale = this.lang;
  },
  updated() {
    console.log('Session ', localStorage.getItem('session_id'))
    this.isLoggedIn = !!localStorage.getItem('session_id');
  },

  methods: {
    async login() {
      const data = await fetch(`${process.env.VUE_APP_API_BASE}/authentication/token/new?api_key=${process.env.VUE_APP_API_KEY}`)
      const response = await data.json();
      console.log(response.request_token);
      window.location = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=${window.location.href}`;
      // const auth = await permission.json();
      // console.log(auth)
    },
    doAuth(session_id) {
      this.isLoggedIn = true;
      localStorage.setItem('session_id', session_id);
    },
    logOut() {
      this.isLoggedIn = false;
      localStorage.removeItem('session_id');
    }
  },
  watch: {
    lang(newLang) {
      this.$i18n.locale = newLang;
      localStorage.setItem('lang', newLang);
    },
    $route() {
      if (localStorage.getItem('session_id')) {
        console.log('session_id')
        this.isLoggedIn = true;
      }
    }
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

