<template>
  <div class="mx-8">
    <h2 class="mt-8 text-xl text-center">Most popular movies</h2>

    <div>
      <JsonData :url="'/discover/movie?sort_by=popularity.desc'">
        <template v-slot="{ response: movies, loading }">
          <div v-if="loading">Loading...</div>
          <CardGrid v-else :movies="movies.results"></CardGrid>
        </template>
      </JsonData>
    </div>
  </div>
</template>

<script>
import CardGrid from '@/components/CardGrid.vue';
import JsonData from '@/components/JsonData.vue';
export default {
  name: 'Home',
  components: {
    CardGrid,
    JsonData,
  },
};
</script>
