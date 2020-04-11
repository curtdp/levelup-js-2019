<template>
  <portal to="modals" v-if="show">
    <div class="modal-backdrop">
      <div class="modal">
        <slot></slot>
      </div>
    </div>
  </portal>
</template>

<script>
export default {
  props: ['show'],
  methods: {
    dismiss() {
      this.$emit('close');
    },
  },
  watch: {
    show: {
      immediate: true,
      handler: show => {
        if (show) {
          document.body.style.setProperty('overflow', 'hidden');
        } else {
          document.body.style.removeProperty('overflow');
        }
      },
    },
  },
  created() {
    const listener = e => {
      if (this.show && e.key === 'Escape') {
        this.dismiss();
      }
    };

    document.addEventListener('keydown', listener);

    this.$once('hook:beforeDestroy', () => {
      console.log('removing listener');
      document.removeEventListener('keydown', listener);
    });
  },
};
</script>
