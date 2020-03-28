<template>
  <button
    class="bg-green-100 block border w-full p-2 rounded shadow-sm focus:outline-none focus:shadow-outline"
    @click="$emit('answerClick', answer)"
  >
    <!-- <span v-if="answer === correctAnswer">⭐</span> -->
    <span v-html="answer"></span>
  </button>
</template>

<script>
export default {
  name: 'AnswerItem',
  props: {
    answer: {
      type: String,
    },
    correctAnswer: String,
  },
};
</script>
