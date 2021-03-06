<template>
  <div v-if="loading" class="mx-8">{{ $t('loading') }}</div>
  <div class="w-full px-8" v-else>
    <div
      class="relative flex items-center justify-center h-48 -mx-8 overflow-hidden md:h-64"
    >
      <h2 class="z-10 text-4xl text-white title">{{ movie.title }}</h2>
      <img :src="backdropUrl" class="absolute object-cover w-full h-full" />
    </div>
    <div>
      <h2 class="mt-8 mb-4 text-2xl">{{ $t('descriptionTitle') }}</h2>
      <div class="flex">
        <div class="w-1/4 mr-4">
          <img class="w-full" :src="`${imgUrlPrefix}${movie.poster_path}`" />
          <h2>Жанры</h2>
          <p>
            <span class="mr-1" v-for="genre in movie.genres" :key="genre.id">
              <router-link
                class="text-green-600 underline hover:no-underline"
                :to="`/genre/${genre.id}`"
                >{{ genre.name }}</router-link
              >
            </span>
          </p>
        </div>
        <div class="w-3/4">
          <p>{{ movie.overview }}</p>
          <div v-if="trailers">
            <div v-if="trailers.results.length > 0">
              <div class="space-x-2">
                <button
                  class="px-4 py-2 text-green-100 bg-green-700 rounded-md focus:outline-none focus:shadow-outline"
                  v-for="(trailer, i) in trailers.results"
                  :key="trailer.id"
                  @click="showTrailer(i)"
                >
                  {{ trailer.name }}
                </button>
              </div>
              <h2 class="mt-8 mb-4 text-2xl">{{ $t('trailersTitle') }}</h2>
              <div v-show="!trailerFrameLoaded">{{ $t('loading') }}</div>

              <div class="relative w-full pt-16/9">
                <iframe
                  v-show="trailerFrameLoaded"
                  @load="trailerFrameLoaded = true"
                  :src="`https://www.youtube.com/embed/${trailers.results[selectedTrailerIndex].key}`"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="absolute top-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config.js';
export default {
  components: {},
  data() {
    return {
      trailers: null,
      selectedTrailerIndex: 0,
      trailerFrameLoaded: false,
      movie: null,
      loading: true,
      backdropUrl: null,
    };
  },
  computed: {
    imgUrlPrefix() {
      return config.images.base_url + config.images.poster_sizes[2];
    },
    lang() {
      return this.$store.state.lang;
    },
  },
  methods: {
    fetchData() {
      // Get Movie
      this.loading = true;
      fetch(
        `${config.api_base_url}/movie/${this.$route.params.id}?api_key=${config.api_key}&language=${this.lang}`,
      )
        .then((response) => response.json())
        .then((response) => {
          this.movie = response;
          this.loading = false;
          this.backdropUrl = `${process.env.VUE_APP_IMAGES_BASE_URL}w342${response.backdrop_path}`;
          this.loading = false;
        });
      fetch(
        `${config.api_base_url}/movie/${this.$route.params.id}/videos?api_key=${config.api_key}&language=${this.lang}`,
      )
        .then((response) => response.json())
        .then((response) => {
          this.trailers = response;
        });
    },
    showTrailer(trailerIndex) {
      if (this.selectedTrailerIndex === trailerIndex) {
        return;
      }
      this.trailerFrameLoaded = false;
      this.selectedTrailerIndex = trailerIndex;
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    lang: {
      handler: function (newLang) {
        this.$i18n.locale = newLang;
        this.fetchData();
      },
      immediate: true,
    },
    $route() {
      this.fetchData();
    },
  },
};
</script>

<style scoped>
.title {
  text-shadow: 2px 2px 5px black;
}
</style>

<i18n>
{
  "en": {
    "descriptionTitle": "Overview",
    "loading": "Loading...",
    "trailersTitle": "Trailers"
  },
  "ru": {
    "descriptionTitle": "Описание фильма",
    "loading": "Загрузка...",
    "trailersTitle": "Трейлеры"
  },
  "uk": {
    "descriptionTitle": "Про фільм",
    "loading": "Завантаження...",
    "trailersTitle": "Трейлери"
  }
}
</i18n>
