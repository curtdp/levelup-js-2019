<template>
  <div>
    <div></div>
    <div class="flex flex-wrap -mx-2">
      <div class="w-1/5 px-2 pt-4" v-for="movie in movies" :key="movie.id">
        <MovieCard :movie="movie"></MovieCard>
      </div>
    </div>
    <div>
      <button
        class="px-4 py-2 text-green-200 bg-green-700 border border-green-800 rounded"
        @click="prevPage"
      >{{ $t('prevBtn')}}</button>
      <span class="px-4">{{ $route.params.pageNumber }}</span>
      <button
        class="px-4 py-2 text-green-200 bg-green-700 border border-green-800 rounded"
        @click="nextPage"
      >{{ $t('nextBtn')}}</button>
    </div>
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue';
export default {
  props: ['movies', 'lang'],
  components: {
    MovieCard,
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
      handler: function(newLang) {
        this.$i18n.locale = newLang;
      },
      immediate: true,
    },
    $route(to, from) {
      console.log('to:', to);
      console.log('from', from);
      if (to.name === 'HomePaginated' && from.name === 'HomePaginated') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        console.log('OK!!!!!!!');
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
