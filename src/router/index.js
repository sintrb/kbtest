import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Setting from '@/pages/Setting'
import Test from '@/pages/Test'
import About from '@/pages/About'
import TestSets from '@/pages/TestSets'
import History from '@/pages/History'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/testsets',
      name: 'TestSets',
      component: TestSets
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/history',
      name: 'History',
      component: History
    }
  ]
})
