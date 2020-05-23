<template>
  <div>
    <div class="flex flex-wrap -mx-2">
      <div class="w-1/5 px-2 pt-4" v-for="movie in moviesList" :key="movie.id">
        <MovieCard :movie="movie"></MovieCard>
      </div>
    </div>
    <Paginator></Paginator>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import MovieCard from './MovieCard.vue';
import Paginator from './Paginator.vue';
export default {
  // props: ['movies', 'lang'],
  components: {
    MovieCard,
    Paginator
  },
  computed: {
    ...mapState(['lang']),
    ...mapGetters(['moviesList'])
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
      if ((from.name === 'Home' || from.name === 'HomePaginated') && (to.name === 'HomePaginated' || to.name === 'Home')) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    },
  },
};
</script>

