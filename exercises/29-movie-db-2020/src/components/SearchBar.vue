<template>
  <div class="relative">
    <input
      v-model="searchQuery"
      class="px-4 py-2 border border-green-500 rounded"
      type="text"
      placeholder="Search"
      @keydown.down="selectNext"
      @keydown.up="selectPrev"
      @keydown.enter="goToResult"
      @keydown.esc="closeSuggestions"
    />
    <button class="px-4 py-2 ml-4 text-green-100 bg-green-600 rounded">Search</button>

    <ul
      v-if="showSuggestions"
      class="absolute z-20 w-full py-2 mt-1 bg-white border border-green-500 rounded shadow-2xl"
    >
      <template v-if="searchResults.length">
        <li v-for="(result, index) in searchResults" :key="result.id">
          <router-link
            class="block px-4 py-1 hover:bg-green-700 hover:text-green-100"
            :class="[ (selectedResult === index) ? 'bg-green-700 text-green-100' : '' ]"
            :to="{ name: 'MoviePage', params: { id: result.id }}"
          >{{ result.title }}</router-link>
        </li>
      </template>
      <li class="px-4 py-1" v-else>No results</li>
    </ul>
  </div>
</template>

<script>
import config from '@/config.js';
export default {
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      loading: false,
      selectedResult: null,
      isOpen: false,
    };
  },
  computed: {
    hasInput() {
      return this.searchQuery.length > 3 ? true : false;
    },
    showSuggestions() {
      return this.hasInput && this.isOpen ? true : false;
    },
  },
  methods: {
    selectNext() {
      if (this.selectedResult === null) {
        this.selectedResult = 0;
      } else {
        if (this.selectedResult === this.searchResults.length - 1) {
          this.selectedResult = 0;
        } else {
          this.selectedResult++;
        }
      }
    },
    selectPrev() {
      if (this.selectedResult === null) {
        this.selectedResult = this.searchResults.length - 1;
      } else {
        if (this.selectedResult === 0) {
          this.selectedResult = this.searchResults.length - 1;
        } else {
          this.selectedResult--;
        }
      }
    },
    goToResult() {
      if (this.selectedResult !== null) {
        this.$router.push({
          name: 'MoviePage',
          params: { id: this.searchResults[this.selectedResult].id },
        });
      }
    },
    closeSuggestions() {
      this.selectedResult = null;
      this.isOpen = false;
    },
  },
  watch: {
    searchQuery() {
      if (this.hasInput) {
        fetch(
          `${config.api_base_url}/search/movie?api_key=${config.api_key}&query=${this.searchQuery}`,
        )
          .then(response => response.json())
          .then(response => {
            this.searchResults = response.results.slice(0, 5);
            this.loading = false;
            this.selectedResult = null;
            this.isOpen = true;
          });
      }
    },
    $route() {
      this.searchQuery = '';
      this.selectedResult = null;
    },
  },
};
</script>


