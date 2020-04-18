<script>
const baseUrl = process.env.VUE_APP_API_BASE;
const apiKey = process.env.VUE_APP_API_KEY;
console.log(baseUrl);
export default {
  props: ['url'],
  data() {
    return {
      response: null,
      loading: true,
    };
  },
  created() {
    fetch(`${baseUrl}${this.url}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(response => {
        this.response = response;
        console.log(response);
        this.loading = false;
      });
  },
  render() {
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading,
    });
  },
};
</script>
