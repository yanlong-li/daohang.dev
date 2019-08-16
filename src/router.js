import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category'
import NotFound from './views/NotFound'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => {
    // const h = this.$createElement
    // this.$message({
    //   message: h('p', null, [
    //     h('span', null, '当前已经处于首页啦 '),
    //     h('i', { style: 'color: teal' }, 'lalalalala')
    //   ])
    // })
  })
}

export default new Router({
  mode: 'history',
  routes: [
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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound,
    }
  ]
})
