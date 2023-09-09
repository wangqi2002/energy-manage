import report from '@/components/report/report'
import energyDiagram from '@/components/touristComplaint/energyDiagram'
import energyCost from '@/components/environmentalProtection/energyCost'
import userManagement from '@/components/userManagement/main'
import energyPrediction from '@/components/callCenter/energyPrediction'
import dataAcquisition from '@/components/dataAcquisition/dataAcquisition'
import waterAnalysis from '@/components/waterAnalysis/waterAnalysis'
import integratedScreen from '@/components/integratedScreen/integratedScreen'
import coulometricAnalysis from '@/components/coulometricAnalysis/coulometricAnalysis'
import steamAnalysis from '@/components/steamAnalysis/steamAnalysis'
import ScenicMap from '@/components/scenic_map/ScenicMap'
import video from '@/components/video/video'

//登录 
import Login from '@/views/Login/index'

export default {
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    //登录
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    //综合大屏
    {
      path: '/integratedScreen',
      name: 'integratedScreen',
      component: integratedScreen
      // integratedScreen
    },
    //水量分析
    {
      path: '/waterAnalysis',
      name: 'waterAnalysis',
      component: waterAnalysis
    },
    //报表系统
    {
      path: '/report',
      name: 'report',
      component: report
    },
    //能源桑基图
    {
      path: '/energyDiagram',
      name: 'energyDiagram',
      component: energyDiagram
    },
    //能源预测
    {
      path: '/energyPrediction',
      name: 'energyPrediction',
      component: energyPrediction
    },
    //能源费用
    {
      path: '/energyCost',
      name: 'energyCost',
      component: energyCost
    },
    //数据采集
    {
      path: '/dataAcquisition',
      name: 'dataAcquisition',
      component: dataAcquisition
    },
    {
      path: '/userManagement',
      name: 'userManagement',
      component: userManagement
    },
    //地理信息
    {
      name: 'scMap',
      path: '/scMap',
      component: ScenicMap
    },
    //电量分析
    {
      name: 'coulometricAnalysis',
      path: '/coulometricAnalysis',
      component: coulometricAnalysis
    },
    //汽量分析
    {
      name: 'steamAnalysis',
      path: '/steamAnalysis',
      component: steamAnalysis
    },
    //视频系统
    {
      name: 'video',
      path: '/video',
      component: video
    }
  ]
}

