<template>
  <div
    v-if="isCorrect !== null"
    class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
  >
    <div
      class="absolute  top-0 left-0 w-full h-full bg-gray-300 opacity-50"
    ></div>
    <div class="z-10 p-10 w-full max-w-screen-sm">
      <div class="bg-white border rounded shadow-2xl p-10 w-full">
        <div>
          <div v-if="isCorrect">
            <h2
              class="text-3xl text-green-700"
              v-if="correctInLine === correctInLineToWin"
            >
              You won $1 000 000 💵 💵 💵
            </h2>
            <h2 v-else class="text-3xl text-green-700">
              You won 👍 👍 👍
            </h2>
          </div>

          <!-- loose -->
          <div v-else>
            <h2 class="text-3xl text-red-700">You lose 🤦‍♂️ 🤦‍♂️ 🤦‍♂️</h2>
            Correct answer was <strong v-html="correctAnswer"></strong>
          </div>
        </div>
        <button
          @click="$emit('goNext')"
          class="bg-green-200 p-2 text-green-500 border border-green hover:bg-green-lightest rounded"
        >
          <span v-if="correctInLine === correctInLineToWin">
            Start new game 👉
          </span>
          <span v-else>
            Go to next question 👉
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isCorrect', 'correctAnswer', 'correctInLine', 'correctInLineToWin'],
};
</script>
