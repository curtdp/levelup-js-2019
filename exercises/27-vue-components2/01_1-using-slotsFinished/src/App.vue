<template>
  <div class="min-h-screen bg-grey-lighter p-8">
    <div class="text-center p-8 my-8">
      <primary-button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        Download
      </primary-button>
    </div>

    <div class="max-w-xs mx-auto mb-8">
      <media-card>
        <img
          slot="image"
          src="https://images.unsplash.com/photo-1558416165-5fb04b79b0e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          alt
        />
        <template slot="heading">How to brew espresso</template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error
        corrupti, culpa officia amet est soluta voluptatem impedit corporis
        harum iure et, eveniet iusto? Accusantium consectetur dolores accusamus
        sint nisi.
      </media-card>
    </div>

    <div class="max-w-xs mx-auto mb-8">
      <media-card>
        <img
          slot="image"
          src="https://images.unsplash.com/photo-1473181488821-2d23949a045a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          alt
        />
        <template slot="heading">How to brew capuccino</template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error
        corrupti, culpa officia amet est soluta voluptatem impedit corporis
        harum iure et, eveniet iusto? Accusantium consectetur dolores accusamus
        sint nisi.
      </media-card>
    </div>

    <div class="max-w-xs mx-auto mb-8">
      <media-card>
        <img
          slot="image"
          src="https://images.unsplash.com/photo-1558416165-5fb04b79b0e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          alt
        />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error
        corrupti, culpa officia amet est soluta voluptatem impedit corporis
        harum iure et, eveniet iusto? Accusantium consectetur dolores accusamus
        sint nisi.
      </media-card>
    </div>
  </div>
</template>

<script>
import MediaCard from './components/MediaCard.vue';
import PrimaryButton from './components/PrimaryButton.vue';

export default {
  components: {
    PrimaryButton,
    MediaCard,
  },
  data() {
    return {};
  },
};
</script>

<style src="./assets/css/app.css" />
