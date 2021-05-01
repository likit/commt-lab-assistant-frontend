import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: ()=> import('../views/Main.vue')
    },
    {
        path: '/packages/:packageId',
        name: 'Package',
        component: ()=> import('../views/Package.vue')
    },
    {
        path: '/tests/:testId',
        name: 'Test',
        component: ()=> import('../views/Test.vue')
    },
    {
        path: '/blood-tubes/:tubeId',
        name: 'BloodTube',
        component: ()=> import('../views/BloodTube.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: ()=> import('../views/About.vue')
    },
    {
        path: '/references',
        name: 'Reference',
        component: ()=> import('../views/Reference.vue')
    },
    {
        path: '/technique/blood-drawing',
        name: 'blood-drawing-technique',
        component: ()=> import('../views/blood-drawing-technique.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router