<template>
  <div>
    <router-link
      class="px-4 py-2 text-green-200 bg-green-700 border border-green-800 rounded disabled:opacity-50"
      :to="{ name: 'HomePaginated', params:  {pageNumber: currentPage - 1 }}"
      v-show="+currentPage > 1"
    >{{ $t('prevBtn') }}</router-link>
    <span class="px-4">{{ currentPage }}</span>
    <router-link
      class="px-4 py-2 text-green-200 bg-green-700 border border-green-800 rounded disabled:opacity-50"
      :to="{ name: 'HomePaginated', params:  {pageNumber: currentPage + 1}}"
      v-show="+currentPage < totalPages"
    >{{ $t('nextBtn') }}</router-link>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['currentPage']),
    ...mapGetters(['totalPages'])
  },
  methods: {
    ...mapActions(['nextPage', 'prevPage'])
  },
}

</script>

<i18n>
  {
    "en": {
      "nextBtn": "Next",
      "prevBtn": "Prev"
    },
    "ru": {
      "nextBtn": "Вперёд",
      "prevBtn": "Назад"
    },
    "uk": {
      "nextBtn": "Вперед",
      "prevBtn": "Назад"
    }
  }
</i18n>
