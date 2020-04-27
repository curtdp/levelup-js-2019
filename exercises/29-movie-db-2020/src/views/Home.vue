<template>
  <div class="mx-8">
    <h2 class="mt-8 text-xl text-center">Most popular movies</h2>
    <div>
      <JsonData
        :url="
          `/discover/movie?sort_by=popularity.desc&page=${$route.params.pageNumber}`
        "
      >
        <template v-slot="{ response: movies, loading }">
          <div v-if="loading">Loading...</div>
          <CardGrid
            v-else
            :movies="movies.results"
            @goToPrevPage="goToPrevPage"
            @goToNextPage="goToNextPage"
          ></CardGrid>
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
  methods: {
    goToNextPage() {
      this.$router.push({
        name: 'HomePaginated',
        params: { pageNumber: +this.$route.params.pageNumber + 1 },
      });
    },
    goToPrevPage() {
      this.$router.push({
        name: 'HomePaginated',
        params: { pageNumber: +this.$route.params.pageNumber - 1 },
      });
    },
  },
};
</script>
