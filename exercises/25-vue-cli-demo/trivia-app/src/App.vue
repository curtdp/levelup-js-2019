<template>
  <div id="app" class="container mx-auto">
    <h1 class="text-4xl">Trivia app</h1>
    <div>Модальное окно</div>
    <!-- вопрос trivia -->
    <div class="max-w-sm mx-auto">
      <div class="flex items-center justify-between">
        <div>
          <label for="category" class="mb-2 block">Select category</label>
          <select
            class="border rounded w-4/5"
            name="category"
            id="category"
            v-model="selectedCategory"
          >
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
            >{{ category.name }}</option>
          </select>
        </div>
        <!-- следим за результатами игры -->
        <div class="text-4xl flex mt-4 md:mt-0 justify-end">
          <div class="px-4 text-right">
            <span class="text-red-700">{{ countOfWrongAnswers }}</span>
            <div class="text-red-700 text-sm">wrong</div>
          </div>
          <div class="px-4 text-right">
            <span class="text-green-700">{{ countOfRightAnswers }}</span>
            <div class="text-green-700 text-sm">correct</div>

            <!-- Вопросы -->
          </div>
        </div>
      </div>
      <div class="mt-5 text-right">
        <button
          @click="getOneQuestion"
          class="bg-green-200 p-2 text-xs text-green-500 border border-green hover:bg-green-lightest rounded"
        >Go to next question 👉</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      question: null,
      isCorrect: null,
      correctStreak: 0,
      countOfWrongAnswers: 0,
      countOfRightAnswers: 0,
      selectedCategory: 'any',
      categories: []
    }
  },
  methods: {
    getOneQuestion() {
      let url = 'https://opentdb.com/api.php?amount=1'
      if (this.selectedCategory !== 'any') {
        url = `${url}&category=${this.selectedCategory}`
      }

      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          this.question = data.results[0]
        })
    }
  },
  components: {},
  async created() {
    const res = await fetch('https://opentdb.com/api_category.php')
    const data = await res.json()
    this.categories = [
      { id: 'any', name: 'Any Category' },
      ...data.trivia_categories
    ]
  }
}
</script>

<style src="./assets/styles.css">
