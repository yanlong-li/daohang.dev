import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category'
import NotFound from './views/NotFound'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index.html',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category/*',
      name: 'category',
      component: Category
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/privacy-protocol',
      name: 'privacy-protocol',
      component: () => import(/* webpackChunkName: "about" */ './views/PrivacyProtocol.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import(/* webpackChunkName: "about" */ './views/Team.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
