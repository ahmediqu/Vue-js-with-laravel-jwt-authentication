<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">WeDevs</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li class="nav-item" v-if="this.$store.state.token !== ''">
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item" v-if="this.$store.state.token !== ''">
            <router-link class="nav-link" to="/product">Product</router-link>
          </li>

          <li class="nav-item" v-if="this.$store.state.token !== ''">
            <a class="nav-link" href="#" @click="logout">Logout</a>
          </li>


          <li class="nav-item" v-else>
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item" v-if="this.$store.state.token === ''">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>


        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
  methods: {
    logout() {
      this.$http
          .post('http://127.0.0.1:8000/api/logout', {token: this.$store.state.token})
          .then(res => {
            this.$store.commit('clearToken');
            this.$router.push('/login');
          })
    }
  }
}
</script>