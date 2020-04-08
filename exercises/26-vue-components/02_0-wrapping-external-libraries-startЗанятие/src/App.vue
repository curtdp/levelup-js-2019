<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
      <div class="card">
        <label class="block">
          <span class="form-label mb-2">Select a date</span>
        </label>
        <date-picker v-model="date" :options="{ firstDay: 1 }"></date-picker>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from './components/DatePicker.vue';
export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      date: '2020-04-06',
    };
  },
};
</script>

<style src="./assets/css/app.css" />
