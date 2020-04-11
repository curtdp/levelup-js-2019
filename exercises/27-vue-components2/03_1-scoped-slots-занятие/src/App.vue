<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
      <contact-list
        v-slot:default="{ contact }"
        :contactProp="(contact) => contact.name.last + ' ' + contact.name.first"
      >
        <a :href="`mailto:${contact.email}`">{{ contact.name.first }} {{ contact.name.last }}</a>
      </contact-list>
    </div>
  </div>
</template>

<script>
import ContactList from './components/ContactList.vue';

export default {
  components: {
    ContactList,
  },
  data() {
    return {};
  },
};
</script>

<style src="./assets/css/app.css"/>
