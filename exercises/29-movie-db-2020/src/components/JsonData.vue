<script>
const baseUrl = process.env.VUE_APP_API_BASE;
const apiKey = process.env.VUE_APP_API_KEY;
export default {
  props: ['url'],
  data() {
    return {
      response: null,
      loading: true,
      backdropUrl: null,
    };
  },
  created() {
    fetch(`${baseUrl}${this.url}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(response => {
        this.response = response;
        this.loading = false;
        this.backdropUrl = `${process.env.VUE_APP_IMAGES_BASE_URL}w342${response.backdrop_path}`;
      });
  },
  updated() {
    console.log('updated');
    // fetch(`${baseUrl}${this.url}&api_key=${apiKey}`)
    //   .then(response => response.json())
    //   .then(response => {
    //     this.response = response;
    //     this.loading = false;
    //     this.backdropUrl = `${process.env.VUE_APP_IMAGES_BASE_URL}w342${response.backdrop_path}`;
    //   });
  },
  render() {
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading,
      backdropUrl: this.backdropUrl,
    });
  },
};
</script>
