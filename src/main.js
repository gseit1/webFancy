import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import Templates from './components/Templates.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import i18n from './i18n.js'

const routes = [
  { path: '/', component: Home },
  { path: '/templates', component: Templates },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')