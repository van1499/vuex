import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('../containers/TheContainer')

// Views
const Dashboard = () => import('../views/Dashboard')

// Users
const Users = () => import('../views/users/Users')
const User = () => import('../views/users/User')

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'users',
          name: 'Users',
          component: Users
        },
      ]
    }
  ]
}

