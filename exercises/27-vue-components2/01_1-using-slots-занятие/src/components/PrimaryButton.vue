<template>
  <button @click="click" type="button" class="btn btn-blue">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: [],
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>
