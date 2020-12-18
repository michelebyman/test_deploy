import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact'
import MyWork from './views/MyWork'
import About from './views/About'
import Policy from './views/PrivacyPolicy.vue'
import PropertyManager from './views/PrivacyPolicyContactPropertymanager.Vue'

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
    }
  ]
})
