import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { name: 'home', path: '/', component: () => import('@/views/Home.vue') },
        { name: 'function', path: '/function', component: () => import('@/views/Function.vue') }
    ]
})
export default router