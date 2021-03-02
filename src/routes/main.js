import Home from '../components/Home'
import Login from '../components/auth/Login'
import Dashboard from '../components/auth/Dashboard'
import Product from '../components/products/Index'
import Register from "../components/auth/Register";

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/product',
        component: Product
    }
]