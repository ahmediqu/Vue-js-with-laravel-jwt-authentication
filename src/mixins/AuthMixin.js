export const AuthMixin = {
    mounted() {
        console.log(this.$store.state.token)
        if (this.$store.state.token !== '') {
            this.$http.post('http://127.0.0.1:8000/api/check-token', {token: this.$store.state.token})
                .then(res => {
                    this.loading = false
                    if (this.$route.name !== '/dashboard') {
                        this.$router.push('/dashboard');
                    }
                }).catch(err => {
                this.$store.commit('clearToken')
                this.loading = false;
                if (this.$router.history.current.path !== '/login') {
                    this.$router.push('/login')
                }
            })

        } else {
            this.loading = false;
            if (this.$router.history.current.path !== '/login')
                this.$router.push('/login')
        }
    }
}