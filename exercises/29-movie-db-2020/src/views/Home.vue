<template>
  <div class="mx-8">
    <h2 class="mt-8 text-xl text-center">Most popular movies</h2>

    <div>
      <CardGrid />
    </div>
  </div>
</template>

<script>
import CardGrid from '@/components/CardGrid.vue';
export default {
  name: 'Home',
  components: {
    CardGrid,
  },
};
</script>
