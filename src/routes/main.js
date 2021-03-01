import Home from '../components/Home'
import Login from '../components/auth/Login'
import Dashboard from '../components/auth/Dashboard'
import Product from '../components/products/Index'

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
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/product',
        component: Product
    }
]