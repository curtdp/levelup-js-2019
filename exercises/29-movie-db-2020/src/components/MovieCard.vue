<template>
  <div class="w-full bg-blue-500">
    <router-link :to="{name: 'MoviePage', params: {
      id: 12345
    }}">
      <img
        src="https://image.tmdb.org/t/p/w300/khlcsYHr7Hi4Tkymc7UGDvcUcx.jpg"
        alt="Постер к фильму Миссия невыполнима"
      />
      <h3>Mission Imposible</h3>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
