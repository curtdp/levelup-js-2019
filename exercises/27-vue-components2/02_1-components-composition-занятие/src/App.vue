<template>
  <div>
    <modal-dialog :show="showNewModal" @close="showNewModal = false">
      <h1>Это новое модальное окно</h1>
      <button @click="showNewModal = false">Закрыть</button>
    </modal-dialog>

    <announcement-modal :show="showAnnouncement" @close="showAnnouncement = false"></announcement-modal>

    <div class="min-h-screen p-8 bg-grey-darker">
      <div class="max-w-sm mx-auto">
        <user-settings-form :account-id="accountId"></user-settings-form>
      </div>
    </div>
    <!-- portal target -->
    <portal-target name="modals"></portal-target>
    <portal-target name="tooltip"></portal-target>
    <portal-target name="dropdowns"></portal-target>
  </div>
</template>

<script>
import UserSettingsForm from './components/UserSettingsForm.vue';
import AnnouncementModal from './components/AnnouncementModal.vue';
import ModalDialog from './components/ModalDialog.vue';

export default {
  components: {
    ModalDialog,
    UserSettingsForm,
    AnnouncementModal,
  },
  data() {
    return {
      accountId: 7,
      showAnnouncement: true,
      showNewModal: true,
    };
  },
};
</script>

<style src="./assets/css/app.css" />
