<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <form @submit.prevent="register">
            <div class="mb-3">
              <label>Name</label>
              <input type="text" v-model="formData.name" class="form-control">
              <span class="help-block text-danger" v-if="has_error && errors.name">{{ errors.name[0] }}</span>
            </div>
            <div class="mb-3">
              <label>Email</label>
              <input type="email" v-model="formData.email" class="form-control">
              <span class="help-block text-danger" v-if="has_error && errors.email">{{ errors.email[0] }}</span>
            </div>
            <div class="mb-3">
              <label>Password</label>
              <input type="password" v-model="formData.password" class="form-control">
              <span class="help-block text-danger" v-if="has_error && errors.password">{{ errors.password[0] }}</span>
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-info btn-lg">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      },
      has_error: false,
      error: '',
      errors: {},
    }
  },
  methods: {
    register() {
      this.$http
          .post('http://127.0.0.1:8000/api/register', this.formData)
          .then(res => {
            this.$store.commit('setToken', res.data.access_token);
            this.$router.push('/dashboard');
          }).catch(res => {

        this.has_error = true
        this.error = res.response.data.error
        this.errors = res.response.data.errors || {}

      })
    }
  }
}
</script>