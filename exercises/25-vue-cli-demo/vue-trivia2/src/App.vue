<template>
  <div id="app" class="container mx-auto">
    <a href="https://google.com">Ссылка</a>
    <Modal
      @goNext="getOneQuestion"
      :isCorrect="isCorrect"
      :correctAnswer="correctAnswer"
      :correctInLine="correctInLine"
      :correctInLineToWin="correctInLineToWin"
    />
    <h1 class="text-4xl">Trivia app</h1>
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
              >{{ category.name }}</option
            >
          </select>
        </div>
        <!-- следим за результатами игры -->
        <GameStats
          :countOfWrongAnswers="countOfWrongAnswers"
          :countOfRightAnswers="countOfRightAnswers"
        />
      </div>
      <!-- Вопросы -->
      <div v-if="question">
        <h2 class="text-4xl" v-html="question.question"></h2>
        <div class="border rounded-md p-4 shadow-lg">
          <AnswerItem
            @answerClick="handleAnswerClick"
            v-for="(answer, index) in answerVariants"
            :key="index"
            :class="[index > 0 ? 'mt-2' : '']"
            :answer="answer"
            :correctAnswer="correctAnswer"
          />
        </div>
      </div>
      <div v-else>
        <SpinnerImg />
      </div>
      <div class="mt-5 text-right">
        <button
          @click="getOneQuestion"
          class="bg-green-200 p-2 text-xs text-green-500 border border-green hover:bg-green-lightest rounded"
        >
          Go to next question 👉
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import shuffle from 'lodash.shuffle';
import SpinnerImg from '@/components/Spinner.vue';
import AnswerItem from '@/components/AnswerItem.vue';
import Modal from '@/components/Modal.vue';
import GameStats from '@/components/GameStats.vue';
export default {
  name: 'App',
  data() {
    return {
      question: null,
      isCorrect: null,
      correctInLine: 0,
      countOfWrongAnswers: 0,
      countOfRightAnswers: 0,
      selectedCategory: 'any',
      correctInLineToWin: 3,
      categories: [],
    };
  },
  computed: {
    answerVariants() {
      return shuffle([
        this.question.correct_answer,
        ...this.question.incorrect_answers,
      ]);
    },
    correctAnswer() {
      if (this.question?.correct_answer) {
        return this.question.correct_answer;
      }
      return null;
    },
  },
  watch: {
    selectedCategory() {
      this.getOneQuestion();
    },
    // correctInLine() {
    //   if (this.correctInLine === this.correctInLineToWin) {

    //   }
    // },
  },
  methods: {
    getOneQuestion() {
      this.question = null;
      if (this.correctInLine === this.correctInLineToWin) {
        this.countOfWrongAnswers = 0;
        this.countOfRightAnswers = 0;
        this.correctInLine = 0;
      }

      this.isCorrect = null;
      let url = 'https://opentdb.com/api.php?amount=1';
      if (this.selectedCategory !== 'any') {
        url = `${url}&category=${this.selectedCategory}`;
      }

      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          this.question = data.results[0];
        });
    },
    handleAnswerClick(answer) {
      if (answer === this.correctAnswer) {
        this.isCorrect = true;
        this.countOfRightAnswers++;
        this.correctInLine++;
      } else {
        this.isCorrect = false;
        this.countOfWrongAnswers++;
        this.correctInLine = 0;
      }
    },
  },
  components: {
    SpinnerImg,
    AnswerItem,
    Modal,
    GameStats,
  },
  async created() {
    const res = await fetch('https://opentdb.com/api_category.php');
    const data = await res.json();
    this.categories = [
      { id: 'any', name: 'Any Category' },
      ...data.trivia_categories,
    ];

    this.getOneQuestion();
  },
};
</script>

<style src="./assets/styles.css"></style>
