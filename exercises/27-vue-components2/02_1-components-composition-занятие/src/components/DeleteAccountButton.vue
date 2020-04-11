<template>
  <button
    type="button"
    class="text-red-dark hover:underline"
    @click="confirmDeleteModalOpen = true"
  >
    Delete Account
    <portal to="modals" v-if="confirmDeleteModalOpen">
      <confirm-delete-modal
        :show="confirmDeleteModalOpen"
        @close="confirmDeleteModalOpen = false"
        :account-id="accountId"
      ></confirm-delete-modal>
    </portal>
  </button>
</template>

<script>
import ConfirmDeleteModal from './ConfirmDeleteModal.vue';
export default {
  props: ['accountId'],
  data() {
    return {
      confirmDeleteModalOpen: false,
    };
  },
  components: {
    ConfirmDeleteModal,
  },
};
</script>
