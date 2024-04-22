import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import BcDemoView from '@/views/BcDemoView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'BcDemo',
        component: BcDemoView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
