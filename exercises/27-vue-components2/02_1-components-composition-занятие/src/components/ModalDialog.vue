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
    cancel() {
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
    const escapeHandler = e => {
      if (e.key === 'Escape' && this.show) {
        this.cancel();
      }
    };
    document.addEventListener('keydown', escapeHandler);
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler);
    });
  },
};
</script>

