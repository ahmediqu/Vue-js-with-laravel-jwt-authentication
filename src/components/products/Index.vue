<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">

        <a href="#" class="btn btn-info mb-3" @click="showModal">+Add</a>
        <table class="table table-bordered">
          <thead>
          <tr>
            <th>Sl.</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td> {{ index + 1 }}</td>
            <td> {{ product.title }}</td>
            <td> {{ product.price }}</td>
            <td>
              <a href="#" class="btn btn-primary mx-2" @click="editModal(product)">edit</a>
              <a href="#" class="btn btn-danger" @click="produtDelete(product)">delete</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <CreateEditModal v-if="isModalVisible" @close="closeModal" :product="product" @getProduct="getProduct"/>

  </div>
</template>

<script>
import CreateEditModal from './CreateEditModal';

export default {
  name: "Index",
  components: {
    CreateEditModal
  },
  data() {
    return {
      products: {},
      isModalVisible: false,
      product: {},

    }
  },

  mounted() {
    if (this.$store.state.token !== '') {
      this.$http.post('http://127.0.0.1:8000/api/check-token', {token: this.$store.state.token})
          .then(res => {
            this.getProduct();
            this.loading = false
          })
          .catch(err => {
            this.loading = false;
            this.$store.commit('clearToken')
            this.$router.push('/login')
          })

    } else {
      this.loading = false;
      this.$router.push('/login')

    }
  },
  methods: {

    getProduct() {

      this.$http.get('http://127.0.0.1:8000/api/products')
          .then(res => {
            this.products = res.data.data;
          })
    },
    produtDelete(product) {
      this.$http.delete('http://127.0.0.1:8000/api/products/' + product.id)
          .then(res => {
            this.getProduct();
          })
    },
    editModal(product) {
      this.product = product
      this.isModalVisible = true;
    },
    showModal() {
      this.product = ''
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>