import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import PositionInfo from '@/components/PositionInfo'
import CompanyInfo from '@/components/CompanyInfo'
import MineInfo from '@/components/MineInfo'
import Detail from '@/components/PersonDetail'
import EducationDetail from '@/components/EducationDetail'
import WorkDetail from '@/components/WorkDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/positionInfo',
      name: 'positionInfo',
      component: PositionInfo
    },
    {
      path: '/companyInfo',
      name: 'CompanyInfo',
      component: CompanyInfo
    },
    {
      path: '/center',
      name: 'Center',
      component: MineInfo
    },
    {
      path: '/fillDetail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/educationDetail/:id',
      name: 'educationDetail',
      component: EducationDetail
    },
    {
      path: '/workDetail/:id',
      name: 'workDetail',
      component: WorkDetail
    }

  ]
})
