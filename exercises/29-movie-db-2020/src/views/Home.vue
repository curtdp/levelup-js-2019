<template>
  <div class="mx-8">
    <h2 class="mt-8 text-4xl font-bold text-center text-gray-800">{{ $t('homeTitle')}}</h2>
    <div>
      <JsonData
        :url="
          `/discover/movie?sort_by=popularity.desc&page=${$route.params.pageNumber}&language=${lang}`
        "
      >
        <template v-slot="{ response: movies, loading }">
          <div v-if="loading">{{ $t('loading')}}</div>
          <CardGrid
            v-else
            :movies="movies.results"
            @goToPrevPage="goToPrevPage"
            @goToNextPage="goToNextPage"
            :lang="lang"
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
  props: ['lang'],
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
  watch: {
    lang: {
      handler: function(newLang) {
        this.$i18n.locale = newLang;
      },
      immediate: true,
    },
  },
};
</script>

<i18n>
{
  "en": {
    "homeTitle": "Most popular movies",
    "loading": "Loading..."
  },
  "ru": {
    "homeTitle": "Самые популярные фильмы",
    "loading": "Загрузка..."
  },
  "uk": {
    "homeTitle": "Найпопулярніщі фільми",
    "loading": "Завантаження..."
  }
}
</i18n>
