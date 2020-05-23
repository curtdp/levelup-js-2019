<template>
  <div class="mx-8">
    <h2
      data-cy="homeTitle"
      class="mt-8 text-4xl font-bold text-center text-gray-800"
    >{{ $t('homeTitle') }}</h2>
    <div class="relative">
      <div class="absolute top-0 left-0 h-3 mt-8 ml-8">
        <div v-if="isLoading">{{ $t('loading') }}</div>
      </div>
      <CardGrid :lang="lang"></CardGrid>
    </div>
  </div>
</template>

<script>
import CardGrid from '@/components/CardGrid.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Home',
  props: ['pageNumber'],
  components: {
    CardGrid,
  },
  created() {
    this.SET_PAGE(+this.$route.params.pageNumber || 1);
    this.$store.dispatch('getMovies', {
      page: +this.currentPage,
    });
  },
  computed: {
    ...mapState(['lang', 'isLoading', 'currentPage'])
  },
  methods: {
    ...mapMutations(['SET_PAGE'])
  },
  watch: {
    $route() {
      this.SET_PAGE(+this.$route.params.pageNumber || 1);
      this.$store.dispatch('getMovies', {
        page: +this.currentPage,
      });
    },
    lang: {
      handler: function (newLang) {
        this.$i18n.locale = newLang;
        this.$store.dispatch('getMovies', {
          page: +this.pageNumber || 1,
        });
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
