export const ProductCreateEditMixin = {
    data() {
        return {
            formData: {
                title: '',
                price: '',
                description: '',
                image: null,
            },
            error: '',
            errors: '',
            config: {
                headers: {
                    Authorization: 'bearer ' + this.$store.state.token,
                    Accept: 'application/json'
                }
            },
        }
    },
    props: {
        product: {}
    },
    created() {
        this.formData.title = this.product.title
        this.formData.description = this.product.description
        this.formData.price = this.product.price
    },
    methods: {
        close() {
            this.formData = ''
            this.$emit('close');
        },
        onFileChange(e) {
            console.log(e.target.files[0]);
            this.formData.image = e.target.files[0];
        },
        formSubmit() {

            let data = new FormData();
            data.append('image', this.formData.image);
            data.append('title', this.formData.title);
            data.append('price', this.formData.price);
            data.append('description', this.formData.description);

            if (this.$store.state.token) {
                this.$http
                    .post('http://127.0.0.1:8000/api/products/', data, this.config)
                    .then(res => {
                        this.$emit('close');
                        this.$emit('getProduct');
                        this.formData = '';
                    }).catch(res => {
                    this.error = res.response.data.message
                })
            } else {
                return "something wrong";
            }

        },
        updateForm(product) {

            let data = new FormData();
            data.append('image', this.formData.image);
            data.append('title', this.formData.title);
            data.append('price', this.formData.price);
            data.append('description', this.formData.description);
            data.append('_method', 'PATCH');
            if (this.$store.state.token) {
                this.$http
                    .post('http://127.0.0.1:8000/api/products/' + product.id, data , this.config)
                    .then(res => {
                        this.$emit('close');
                        this.$emit('getProduct');
                        this.formData = '';
                    }).catch(res => {
                        this.error = res.response.data.message
                    });
            }

        }
    },
}