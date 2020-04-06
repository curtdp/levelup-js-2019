<template>
  <div class="card">
    <h1 class="mb-6 text-2xl font-bold">Your Settings</h1>
    <label class="block mb-6">
      <span class="block mb-2 font-semibold text-grey-darker">Email Address</span>
      <input v-model="email" class="form-input" placeholder="you@example.com" />
    </label>
    <div class="mb-8">
      <span class="block mb-2 font-semibold text-grey-darker">Newsletter</span>
      <div class="flex items-center justify-between">
        <p class="mr-4">Send you occasional news and updates.</p>
        <toggle-input v-model="receiveNewsletter" class="flex-no-shrink" />
      </div>
    </div>
    <div class="flex justify-between">
      <button
        type="button"
        class="text-red-dark hover:underline"
        @click="$emit('open:confirm-delete-modal')"
      >Delete Account</button>
      <button type="button" class="btn btn-blue">Update Settings</button>
    </div>
  </div>
</template>

<script>
import ToggleInput from './ToggleInput.vue';

export default {
  components: {
    ToggleInput,
  },
  props: ['accountId'],
  data() {
    return {
      email: 'jane@example.com',
      receiveNewsletter: false,
    };
  },
  methods: {
    toggleNewsletter() {
      this.receiveNewsletter = !this.receiveNewsletter;
    },
  },
};
</script>
