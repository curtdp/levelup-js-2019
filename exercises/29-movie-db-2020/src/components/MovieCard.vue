<template>
  <div class="w-full">
    <router-link
      :to="{
        name: 'MoviePage',
        params: {
          id: movie.id,
        },
      }"
    >
      <img
        class="w-full"
        :src="movieUrl"
        alt="Постер к фильму Миссия невыполнима"
      />
      <h3 class="text-center">{{ movie.title }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    movieUrl() {
      return `${process.env.VUE_APP_IMAGES_BASE_URL}w342${this.movie.poster_path}`;
    },
  },
};
</script>
