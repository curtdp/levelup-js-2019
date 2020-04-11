<template>
  <div class="min-h-screen bg-grey-lighter p-8">
    <div class="text-center p-8 my-8">
      <PrimaryButton>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        Download
      </PrimaryButton>

      <PrimaryButton>
        <svg
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g id="Page-1" stroke="none" stroke-width="1" fill="white" fill-rule="evenodd">
            <g id="icon-shape">
              <polygon id="Rectangle-161" points="4 4 16 10 4 16" />
            </g>
          </g>
        </svg>Play
      </PrimaryButton>
    </div>

    <div class="max-w-xs mx-auto mb-8">
      <media-card>
        <template v-slot:image>
          <img
            src="https://images.unsplash.com/photo-1490855137152-82177ecaf6e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2929d63d861df6513b9e1e34196f71a2&auto=format&fit=crop&w=700&q=60"
            alt="Переход дороги"
          />
        </template>
        <template v-slot:heading>Переход улицы для новичков</template>
        <p>Это текст карточки тут много букв</p>
        <p>Это текст карточки тут много букв</p>
        <p>{{ pageTitle }}</p>
      </media-card>
    </div>
    <div class="max-w-xs mx-auto mb-8">
      <media-card>
        <template v-slot:image>
          <img
            src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            alt
          />
        </template>
        <template v-slot:heading>Приготовление эспрессо для новичков</template>
        <p>Самое главное кофемолка</p>
        <p>{{ pageTitle }}</p>
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
    return {
      pageTitle: 'Это пример со слотами',
    };
  },
};
</script>

<style src="./assets/css/app.css" />
