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
        path: '/blood-tubes/:tubeId',
        name: 'BloodTube',
        component: ()=> import('../views/BloodTube.vue')
    },
    {
        path: '/technique/blood-drawing',
        name: 'BloodDrawingTechnique',
        component: ()=> import('../views/blood-drawing-technique.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router