export const auth = {
    state: {
        token: localStorage.getItem('auth') || ''
    },
    getters: {},
    mutations: {
        setToken(state, token) {
            localStorage.setItem('auth', token);
            state.token = token;
        },

        clearToken(state) {
            localStorage.removeItem('auth');
            state.token = '';
        }
    }
}