<template>
  <div class="mx-8">
    <h2 class="mt-8 text-xl text-center">Search results for "{{ query }}"</h2>
    <div>
      <JsonData
        :url="
          `/search/movie?page=${$route.params.pageNumber}&query=${this.query}&page=${page}`
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
  props: ['query'],
  name: 'SearchResults',
  components: {
    CardGrid,
    JsonData,
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    goToNextPage() {
      this.page = this.page + 1;
      this.$router.push(`/search?q=${this.query}&page=${this.page}`);
    },
    goToPrevPage() {
      this.page = this.page - 1;
      this.$router.push(`/search?q=${this.query}&page=${this.page}`);
    },
  },
};
</script>
