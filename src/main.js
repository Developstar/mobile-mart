import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import HomePage from "./pages/HomePage.vue"
import LogIn from "./pages/LogIn.vue"
import AllProducts from "./pages/AllProducts.vue"
import SignUp from "./pages/SignUp.vue"
import store from "./store/store"

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
    },

    {
        path: "/SignUp",
        name: "SignUp",
        component: SignUp

    }
]

})

createApp(App).use(router).use(store).mount('#app')
