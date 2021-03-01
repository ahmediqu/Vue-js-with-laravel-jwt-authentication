<template>
  <div>

    <loader v-if="loading"/>
    <div class="container" v-else>
      <div class="row justify-content-center py-5">
        <div class="col-md-4">
          <div v-if="errors.length">
            <ul>
              <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
          </div>
          <form>
            <div class="mb-3">
              <label>Email</label>
              <input type="email" v-model="formData.email" class="form-control">
            </div>
            <div class="mb-3">
              <label>Password</label>
              <input type="password" v-model="formData.password" class="form-control">
            </div>
            <div class="mb-3">
              <button type="button" class="btn btn-info btn-lg" @click.prevent="login">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import {AuthMixin} from '../../mixins/AuthMixin';

export default {
  name: 'Login',
  mixins: [AuthMixin],
  data() {
    return {
      loading: true,
      errors: [],
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
            this.$store.commit('setToken', res.data.access_token);
            this.$router.push('/dashboard');
          }).catch(err => {
        if (this.formData.email && this.formData.password && err) {
          this.errors.push('Authentication Failed');
        }
        this.$store.commit('clearToken')
      })
    }
  }
}
</script>
