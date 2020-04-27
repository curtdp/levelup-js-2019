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
          <button @click="lang = 'uk'">укр</button> |
          <button @click="lang = 'ru'">рус</button> |
          <button @click="lang = 'en'">eng</button>
        </div>
        <SearchBar :lang="lang" />
      </div>
    </header>
    <router-view :lang="lang" />
    <Footer class="mx-8 mt-4 mb-4"></Footer>
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
    };
  },
  created() {
    if (localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang');
    }

    this.$i18n.locale = this.lang;
  },
  watch: {
    lang(newLang) {
      this.$i18n.locale = newLang;
      localStorage.setItem('lang', newLang);
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

