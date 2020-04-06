<template>
  <div>
    <div class="min-h-screen p-8 bg-grey-darker">
      <div class="max-w-sm mx-auto">
        <user-settings-form @open:confirm-delete-modal="confirmDeleteModalOpen = true"></user-settings-form>
      </div>
    </div>

    <confirm-delete-modal
      :show="confirmDeleteModalOpen"
      @close="confirmDeleteModalOpen = false"
      :account-id="accountId"
    ></confirm-delete-modal>
  </div>
</template>

<script>
import UserSettingsForm from './components/UserSettingsForm.vue';
import ConfirmDeleteModal from './components/ConfirmDeleteModal.vue';

export default {
  components: {
    UserSettingsForm,
    ConfirmDeleteModal,
  },
  data() {
    return {
      accountId: 7,
      confirmDeleteModalOpen: false,
    };
  },
};
</script>

<style src="./assets/css/app.css" />
