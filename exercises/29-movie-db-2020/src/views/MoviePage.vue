<template>
  <!-- <JsonData :url="`/movie/${$route.params.id}?`"> -->
  <!-- <template v-slot="{ response: movie, loading, backdropUrl }"> -->
  <div v-if="loading" class="mx-8">Loading...</div>
  <div class="w-full px-8" v-else>
    <div
      class="relative flex items-center justify-center h-48 -mx-8 overflow-hidden md:h-64"
    >
      <h2 class="z-10 text-4xl text-white title">{{ movie.title }}</h2>
      <img :src="backdropUrl" class="absolute object-cover w-full h-full" />
    </div>
    <div>
      <h2 class="mt-8 mb-4 text-2xl">Описание фильма</h2>
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
        <p class="w-3/4">{{ movie.overview }}</p>
      </div>
      <div>
        <h2 class="mt-8 mb-4 text-2xl">Трейлеры</h2>
        <div v-if="trailers">
          <iframe
            v-for="(trailer, i) in trailers.results"
            :key="i"
            width="560"
            height="315"
            :src="`https://www.youtube.com/embed/${trailer.key}`"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  <!-- </template> -->
  <!-- </JsonData> -->
</template>

<script>
import config from '@/config.js';
export default {
  components: {},
  data() {
    return {
      trailers: null,
      movie: null,
      loading: true,
      backdropUrl: null,
    };
  },
  computed: {
    imgUrlPrefix() {
      return config.images.base_url + config.images.poster_sizes[2];
    },
  },
  created() {
    // Get Movie
    fetch(
      `${config.api_base_url}/movie/${this.$route.params.id}?api_key=${config.api_key}`,
    )
      .then(response => response.json())
      .then(response => {
        this.movie = response;
        this.loading = false;
        this.backdropUrl = `${process.env.VUE_APP_IMAGES_BASE_URL}w342${response.backdrop_path}`;
      });
    fetch(
      `${config.api_base_url}/movie/${this.$route.params.id}/videos?api_key=${config.api_key}`,
    )
      .then(response => response.json())
      .then(response => {
        this.trailers = response;
      });
  },
  watch: {
    $route() {
      fetch(
        `${config.api_base_url}/movie/${this.$route.params.id}?api_key=${config.api_key}`,
      )
        .then(response => response.json())
        .then(response => {
          this.movie = response;
          this.loading = false;
          this.backdropUrl = `${process.env.VUE_APP_IMAGES_BASE_URL}w342${response.backdrop_path}`;
        });
      fetch(
        `${config.api_base_url}/movie/${this.$route.params.id}/videos?api_key=${config.api_key}`,
      )
        .then(response => response.json())
        .then(response => {
          this.trailers = response;
        });
    },
  },
};
</script>

<style scoped>
.title {
  text-shadow: 2px 2px 5px black;
}
</style>
