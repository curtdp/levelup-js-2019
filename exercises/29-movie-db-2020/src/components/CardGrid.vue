<template>
  <div>
    <div>
      <p>
        <button
          class="px-4 py-2 text-green-200 bg-green-700 border border-green-800 rounded"
          @click="prevPage"
        >
          Назад
        </button>
        <span class="px-4">{{ $route.params.pageNumber }}</span>
        <button
          class="px-4 py-2 text-green-200 bg-green-700 border border-green-800 rounded"
          @click="nextPage"
        >
          Вперед
        </button>
      </p>
    </div>
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
  methods: {
    prevPage() {
      this.$emit('goToPrevPage');
    },
    nextPage() {
      this.$emit('goToNextPage');
    },
  },
};
</script>
