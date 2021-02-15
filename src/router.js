import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact'
import MyWork from './views/MyWork'
import About from './views/About'
import Policy from './views/policies/PrivacyPolicy.vue'
import PropertyManager from './views/policies/PPPP.vue'
import Weather from './views/Weather.vue'
import Multiplication from './views/policies/Multiplication.vue'
import MultiTurbo from './views/policies/MultiTurbo.vue'

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
    },
    {
      path: '/sukha',
      name: 'sukha',
      component: Policy
    },
    {
      path: '/propertymanager',
      name: 'propertymananger',
      component: PropertyManager
    },
    {
      path: '/weather',
      name: 'weather',
      component: Weather
    },
    {
      path: '/multiplication',
      name: 'multiplication',
      component: Multiplication
    },
    {
      path: '/multiturbo',
      name: 'multiturbo',
      component: MultiTurbo
    }
  ]
})
