import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import DemoStyledCom from '@/views/DemoStyledCom.vue'
import Editor from '@/views/Editor.vue'

const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login'
        }
    },
    {
        path: '/demostyled',
        name: 'DemoStyled',
        component: DemoStyledCom,
        meta: {
            title: 'DemoStyled Component'
        }
    },
    {
        path: '/editor',
        name: 'Edior',
        component: Editor,
        meta: {
            title: 'Editor CKEditor'
        }
    }

]

const router = createRouter({
    history: createWebHistory(import.meta.env.URL),
    routes
})

router.beforeEach((to, _, next) => {

    if(typeof(to.meta.title) == 'string'){
        document.title = to.meta.title
    }

    next()
})

export default router