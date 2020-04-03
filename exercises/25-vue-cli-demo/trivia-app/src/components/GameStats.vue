<template>
  <div class="flex justify-end mt-4 text-4xl md:mt-0">
    <div class="px-4 text-right">
      <span class="text-red-700">{{ countOfWrongAnswers }}</span>
      <div class="text-sm text-red-700">wrong</div>
    </div>
    <div class="px-4 text-right">
      <span class="text-green-700">{{ countOfRightAnswers }}</span>
      <div class="text-sm text-green-700">correct</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['countOfWrongAnswers', 'countOfRightAnswers'],
};
</script>
