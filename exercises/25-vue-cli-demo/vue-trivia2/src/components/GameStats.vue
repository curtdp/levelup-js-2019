<template>
  <div class="text-4xl flex mt-4 md:mt-0 justify-end">
    <div class="px-4 text-right">
      <span class="text-red-700">{{ countOfWrongAnswers }}</span>
      <div class="text-red-700 text-sm">wrong</div>
    </div>
    <div class="px-4 text-right">
      <span class="text-green-700">{{ countOfRightAnswers }}</span>
      <div class="text-green-700 text-sm">correct</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['countOfWrongAnswers', 'countOfRightAnswers'],
};
</script>
