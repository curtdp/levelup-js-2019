<template>
  <div>
    Сетка карточек
    <span>{{ movies }}</span>
    <div class="flex flex-wrap -mx-2">
      <div class="w-1/5 px-2 pt-4" v-for="card in 10" :key="card">
        <MovieCard></MovieCard>
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

