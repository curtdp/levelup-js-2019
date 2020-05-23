<template>
  <div>
    <div class="flex flex-wrap -mx-2">
      <div class="w-1/5 px-2 pt-4" v-for="movie in movies" :key="movie.id">
        <MovieCard :movie="movie"></MovieCard>
      </div>
    </div>
    <div>
      <button
        class="px-4 py-2 text-green-200 bg-green-700 border border-green-800 rounded disabled:opacity-50"
        @click="prevPage"
        :disabled="+this.$route.params.pageNumber <= 1"
      >
        {{ $t('prevBtn') }}
      </button>
      <span class="px-4">{{ $route.params.pageNumber }}</span>
      <button
        class="px-4 py-2 text-green-200 bg-green-700 border border-green-800 rounded disabled:opacity-50"
        @click="nextPage"
        :disabled="+this.$route.params.pageNumber >= 500"
      >
        {{ $t('nextBtn') }}
      </button>
    </div>
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue';
export default {
  // props: ['movies', 'lang'],
  components: {
    MovieCard,
  },
  computed: {
    movies() {
      return this.$store.getters.moviesList;
    },
    lang() {
      return this.$store.state.lang;
    },
  },
  methods: {
    prevPage() {
      this.$emit('goToPrevPage');
    },
    nextPage() {
      this.$emit('goToNextPage');
    },
  },
  watch: {
    lang: {
      handler: function (newLang) {
        this.$i18n.locale = newLang;
      },
      immediate: true,
    },
    $route(to, from) {
      if (to.name === 'HomePaginated' && from.name === 'HomePaginated') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    },
  },
};
</script>

<i18n>
  {
    "en": {
      "nextBtn": "Next",
      "prevBtn": "Prev"
    },
    "ru": {
      "nextBtn": "Вперёд",
      "prevBtn": "Назад"
    },
    "uk": {
      "nextBtn": "Вперед",
      "prevBtn": "Назад"
    }
  }
</i18n>
