import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact'
import MyWork from './views/MyWork'
import About from './views/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/mywork',
      name: 'mywork',
      component: MyWork
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
