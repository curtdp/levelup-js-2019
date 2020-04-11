<template>
  <div class="min-h-screen bg-grey-lighter p-8">
    <div class="text-center p-8 my-8">
      <button type="button" class="btn btn-blue">
        Click Me
      </button>
    </div>

    <div class="max-w-xs mx-auto mb-8">
      <media-card> </media-card>
    </div>
  </div>
</template>

<script>
// import MediaCard from './components/MediaCard.vue';
// import PrimaryButton from './components/PrimaryButton.vue';

export default {
  components: {
    // PrimaryButton,
    // MediaCard,
  },
  data() {
    return {};
  },
};
</script>

<style src="./assets/css/app.css" />
