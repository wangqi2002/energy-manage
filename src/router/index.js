import report from '@/components/synergeticOffice/report'
import energyDiagram from '@/components/touristComplaint/energyDiagram'
import energyCost from '@/components/environmentalProtection/energyCost'
import userManagement from '@/components/userManagement/main'
import energyPrediction from '@/components/callCenter/energyPrediction'
import dataAcquisition from '@/components/dataAcquisition/dataAcquisition'
import energyWater from '@/components/marketing/energyWater'
import integratedScreen from '@/components/integratedScreen/integratedScreen'
import energyPower from '@/components/dataV/energyPower'
import energySteam from '@/components/emergencyManage/energySteam'
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
      path: '/energyWater',
      name: 'energyWater',
      component: energyWater
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
      name: 'energyPower',
      path: '/energyPower',
      component: energyPower
    },
    //汽量分析
    {
      name: 'energySteam',
      path: '/energySteam',
      component: energySteam
    },
    //视频系统
    {
      name: 'video',
      path: '/video',
      component: video
    }
  ]
}

