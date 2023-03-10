import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import HomePage from "./components/views/HomePage.vue"
import LogIn from "./components/views/LogIn.vue"
import AllProducts from "./components/views/AllProducts.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/LogIn",
        name: "LogIn",
        component: LogIn
    },
    {
        path: "/AllProducts",
        name: "AllProducts",
        component: AllProducts
    }
]

})

createApp(App).use(router).mount('#app')
