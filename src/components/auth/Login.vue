<template>
  <div>

    <loader v-if="loading"/>
    <div class="container" v-else>
      <div class="row justify-content-center py-5">
        <div class="col-md-4">
          <span>{{ error }}</span>
          <div v-if="errors.length">
            <ul>
              <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
          </div>
          <form @submit.prevent="login">
            <div class="mb-3">
              <label>Email</label>
              <input type="email" v-model="formData.email" class="form-control">
            </div>
            <div class="mb-3">
              <label>Password</label>
              <input type="password" v-model="formData.password" class="form-control">
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-info btn-lg">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>



export default {
  name: 'Login',

  data() {
    return {
      loading: false,
      errors: [],
      error: '',
      message: '',
      formData: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      this.errors = [];
      if (!this.formData.email) {
        this.errors.push('Email required.');
      }
      if (!this.formData.password) {
        this.errors.push('Password required.');
      }
      this.$http
          .post('http://127.0.0.1:8000/api/login', this.formData)
          .then(res => {
            this.$store.commit('setToken', res.data.token);
            this.$router.push('/dashboard');
          }).catch(res => {
            this.error = res.response.data.error
          })
    }
  }
}
</script>
