<template>
  <div class="mx-8">
    <h2 class="mt-8 text-xl text-center">Most popular movies</h2>

    <div>
      <JsonData :url="'/discover/movie?sort_by=popularity.desc'">
        <div v-if="loading"></div>
        <CardGrid v-else v-slot:default="{ response: movies }" :movies="movies"></CardGrid>
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
};
</script>
