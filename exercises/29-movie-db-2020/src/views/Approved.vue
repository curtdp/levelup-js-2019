<template>
  <div class="approved">
    <h1>Approved</h1>
  </div>
</template>

<script>
export default {
  created() {
    if (this.$route.query.approved) {
      console.log(this.$route.query.request_token)
      this.createSession();
    }
  },
  methods: {
    async createSession() {
      const data = await fetch(`${process.env.VUE_APP_API_BASE}/authentication/session/new?api_key=${process.env.VUE_APP_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          request_token: this.$route.query.request_token
        })
      });
      const json = await data.json();
      console.log(json)

      if (json.success) {
        console.log(json)
        this.$emit('auth', json.session_id)
      }

    }
  }
}

</script>
