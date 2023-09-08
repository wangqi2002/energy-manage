<template>
  <div>
    <div class="top-warp">
      <div class="grid-content topheader">
        <img class="logo1" src="../../static/images/logo2.png" alt="">
        <div class="title">企业综合信息管理平台</div>
        <div class="login-information">
          <img class="avatar" src="../../static/images/avatar.png" v-popover:popover />
        </div>
        <el-popover class="account-card" ref="popover" placement="bottom" width="200" trigger="click">
          <!-- todo 美化 -->
          <div class="popover-information">
            <img class="popover-avatar" src="../../static/images/avatar.png" />
            <span class="popover-name">Robot</span>
          </div>
          <li class="popover-item">账号信息</li>
          <li class="popover-item">退出账号</li>
        </el-popover>
      </div>
      <div class="header-nav">
        <ul class="clearfix">
          <li v-for="(item, index) in datas" :key="index" @click="changeBg(index)" :class="{ libg: index == curIndex }">
            <router-link :to="item.route">
              <div class="pr navli">
                <i class="pa" :class="[item.class]"></i>
                <p>{{ item.title }}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "NavHeader",
  data() {
    return {
      datas: [
        {
          title: '综合大屏',
          class: 'icon-a1',
          route: '/integratedScreen'
        },
        {
          title: '数据采集',
          class: 'icon-a11',
          route: '/dataPoint'
        },
        {
          title: '电量分析',
          class: 'icon-a3',
          route: '/energyPower'
        },
        {
          title: '水量分析',
          class: 'icon-a4',
          route: '/energyWater'
        },
        {
          title: '汽量分析',
          class: 'icon-a5',
          route: '/energySteam'
        },
        {
          title: '地理信息',
          class: 'icon-a6',
          route: '/scMap'
        },
        {
          title: '报表系统',
          class: 'icon-a7',
          route: '/report'
        },
        {
          title: '能源桑基图',
          class: 'icon-a8',
          route: '/energyDiagram'
        },
        {
          title: '能源费用',
          class: 'icon-a9',
          route: '/energyCost'
        },
        {
          title: '能源预测',
          class: 'icon-a10',
          route: '/energyPrediction'
        },
        {
          title: '视频系统',
          class: 'icon-a2',
          route: '/video'
        },
        {
          title: '智慧管理',
          class: 'icon-a12',
          route: '/userManagement'
        }
      ],
      curIndex: 0
    }
  },
  methods: {
    changeBg(index) {
      this.curIndex = index;
    }
  }
}
</script>
<style scoped>
.topheader {
  height: 1rem;
  line-height: 1rem;
  width: 100%;
  background-image: linear-gradient(top, #3b72ee, #012352);
  background-image: -o-linear-gradient(top, #3b72ee, #012352);
  background-image: -moz-linear-gradient(top, #3b72ee, #012352);
  background-image: -webkit-linear-gradient(top, #3b72ee, #012352);
}

.logo1 {
  width: 1.4rem;
  float: left;
  margin-top: .32rem;
  padding-left: .5rem;
}

.title {
  font-size: .30rem;
  color: #fff;
  float: left;
  margin-left: .2rem;
  margin-top: 0.1rem
}

.login-information {
  font-size: .20rem;
  color: #fff;
  width: 1.12rem;
  float: right;
}

.account-card.el-popper {
  padding: 12px 0px 12px 12px;
}

.popover-information {
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin-bottom: 10px;
  background: linear-gradient(to left top, #e2ecfd, #8adbfb);
  border-radius: 5px;
}

.popover-information .popover-avatar {
  width: 36px;
  height: 36px;
  background-color: aquamarine;
  margin: 0 10px;
  vertical-align: middle;
  border-radius: 50%;
}

.popover-item {
  width: 100%;
  height: 25px;
  line-height: 25px;
}


.avatar {
  width: .6rem;
  height: .6rem;
  background-color: aquamarine;
  margin-right: .2rem;
  vertical-align: middle;
  border-radius: 50%;
}

.header-nav {
  width: 100%;
  height: .96rem;
  overflow: hidden
}

.header-nav ul li {
  width: 8.325%;
  background: #3b72ee;
  float: left;
  height: .94rem;
  cursor: pointer;
  border-bottom: solid 1px #012352;
  border-top: solid 1px #012352
}

.header-nav .navli {
  border-left: solid 2px #012352;
  height: .94rem;
  text-align: center
}

.header-nav .navli p {
  padding-top: .58rem;
  text-align: center;
  color: #fff;
  font-size: .16rem
}

.navli .pa {
  font-size: 0.36rem;
  color: #fff;
  left: 50%;
  top: .18rem;
  margin-left: -.2rem;
}

.header-nav ul li.libg {
  background: -webkit-linear-gradient(#05459c, #012352);
  background: -o-linear-gradient(#05459c, #012352);
  background: -moz-linear-gradient(#05459c, #012352);
  background: linear-gradient(#05459c, #012352);
  height: .9rem;
  border-top: solid 0.04rem #ffd452;
}
</style>

