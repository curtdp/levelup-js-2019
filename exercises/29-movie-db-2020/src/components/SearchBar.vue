<template>
  <div class="relative" ref="searchBar">
    <input
      data-cy="searchInput"
      v-model="searchQuery"
      class="px-4 py-2 border border-green-500 rounded"
      type="text"
      :placeholder="$t('btnSearch')"
      @keydown.down="selectNext"
      @keydown.up="selectPrev"
      @keydown.enter="goToResult"
      @keydown.esc="closeSuggestions"
    />
    <button
      @click="goToResult"
      class="px-4 py-2 ml-4 text-green-100 bg-green-600 rounded"
    >{{ $t('btnSearch')}}</button>

    <transition
      enter-class="transform -translate-y-2 opacity-0"
      enter-active-class="transition duration-200 ease-in"
      leave-to-class="transform -translate-y-2 opacity-0"
      leave-active-class="transition duration-300 ease-out"
    >
      <div
        v-if="showSuggestions"
        data-cy="searchSuggestions"
        class="absolute z-20 w-full py-2 mt-1 bg-white border border-green-500 rounded shadow-2xl"
      >
        <template v-if="searchResults.length">
          <transition-group
            tag="ul"
            enter-class="transform -translate-x-10"
            enter-active-class="transition duration-200 ease-in"
          >
            <li v-for="(result, index) in searchResults" :key="result.id">
              <router-link
                :data-cy="`resultLink${index}`"
                class="block px-4 py-1 hover:bg-green-700 hover:text-green-100"
                :class="[
              selectedResult === index ? 'bg-green-700 text-green-100' : '',
            ]"
                :to="{ name: 'MoviePage', params: { id: result.id } }"
              >{{ result.title }}</router-link>
            </li>
          </transition-group>
        </template>
        <li class="px-4 py-1" v-else>{{ $t('noResults')}}</li>
      </div>
    </transition>
  </div>
</template>

<script>
import config from '@/config.js';
export default {
  props: ['lang'],
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
        this.isOpen = false;
      } else {
        this.$router.push(`/search?q=${this.searchQuery}`);
      }
    },
    closeSuggestions() {
      this.selectedResult = null;
      this.isOpen = false;
    },
  },
  watch: {
    lang: {
      handler: function(newLang) {
        this.$i18n.locale = newLang;
      },
      immediate: true,
    },
    searchQuery() {
      if (this.hasInput) {
        fetch(
          `${config.api_base_url}/search/movie?api_key=${config.api_key}&query=${this.searchQuery}&language=${this.lang}`,
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
  mounted() {
    const clickOutside = e => {
      if (!this.$refs.searchBar.contains(e.target)) {
        this.isOpen = false;
      } else if (this.hasInput) {
        this.isOpen = true;
      }
    };
    document.addEventListener('click', clickOutside);
    this.$once('hook:beforeDestroy', function() {
      document.removeEventListener('click', clickOutside);
    });
  },
};
</script>

<i18n>
{
  "en": {
    "btnSearch": "Search",
    "noResults": "No results"
  },
  "ru": {
    "btnSearch": "Поиск",
    "noResults": "Нет результатов"
  },
  "uk": {
    "btnSearch": "Пошук",
    "noResults": "Результатів немає"
  }
}
</i18n>
