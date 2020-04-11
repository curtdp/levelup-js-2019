<template>
  <div>
    <portal to="modals" v-if="showAnnouncement">
      <announcement-modal :show="showAnnouncement" @close="showAnnouncement = false"></announcement-modal>
    </portal>
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

export default {
  components: {
    UserSettingsForm,
    AnnouncementModal,
  },
  data() {
    return {
      accountId: 7,
      showAnnouncement: true,
    };
  },
};
</script>

<style src="./assets/css/app.css" />
