<template>
  <div class="mx-8">
    <h2 class="mt-8 text-xl text-center">Search results for "{{ query }}"</h2>
    <div>
      <div v-if="loading">Loading...</div>
      <CardGrid
        @goToPrevPage="goToPrevPage"
        @goToNextPage="goToNextPage"
      ></CardGrid>
    </div>
  </div>
</template>

<script>
import CardGrid from '@/components/CardGrid.vue';

export default {
  props: ['query'],
  name: 'SearchResults',
  components: {
    CardGrid,
  },
  computed: {
    loading() {
      return this.$store.state.isLoading;
    },
  },
  created() {
    this.$store.dispatch('getSearchResults', {
      page: 1,
      searchQuery: this.$route.query.q,
    });
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
