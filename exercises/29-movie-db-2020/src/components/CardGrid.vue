<template>
  <div>
    <div class="flex flex-wrap -mx-2">
      <div class="w-1/5 px-2 pt-4" v-for="movie in movies" :key="movie.id">
        <MovieCard :movie="movie"></MovieCard>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue';
export default {
  props: ['movies'],
  components: {
    MovieCard,
  },
};
</script>

