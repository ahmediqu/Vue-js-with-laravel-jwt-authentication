<template>
  <div>
    <loader v-if="loading"/>
    <h3>Dashboard</h3>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    if (this.$store.state.token !== '') {
      this.$http.post('http://127.0.0.1:8000/api/check-token', {token: this.$store.state.token})
          .then(res => {
            this.loading = false
          })
          .catch(err => {
            this.loading = false;
            this.$store.commit('clearToken');
            this.$router.push('/login');
          })
    } else {
      this.loading = false;
      this.$router.push('/login');

    }
  }
}
</script>
