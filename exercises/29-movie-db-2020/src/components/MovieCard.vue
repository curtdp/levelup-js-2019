<template>
  <div class="w-full">
    <router-link :to="{name: 'MoviePage', params: {
      id: `${date}`
    }}">
      <img
        class="w-full"
        src="https://image.tmdb.org/t/p/w300/khlcsYHr7Hi4Tkymc7UGDvcUcx.jpg"
        alt="Постер к фильму Миссия невыполнима"
      />
      <h3 class="text-center">Mission Imposible</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '3123',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
