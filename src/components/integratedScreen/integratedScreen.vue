<template>
  <div class="content-wrap synergeticOffice mt22 clearfix">
    <div class="clearfix">
      <div class="area1">
        <energy-consumption></energy-consumption>
        <video-show-one></video-show-one>
        <video-show-two></video-show-two>
        <chart-one></chart-one>
      </div>
      <div class="area2">
        <!-- todo area2和area3用不同的表图填满 -->
        <old-energy-consumption></old-energy-consumption>
        <heat-map></heat-map>
        <pred-energy-consumption></pred-energy-consumption>
        <chart-two></chart-two>
      </div>
      <div class="area3">
        <abnormal></abnormal>
        <week-environmental></week-environmental>
        <chart-three></chart-three>
        <chart-four></chart-four>
      </div>
    </div>
    <div class="footer">
      <div class="foot">
        <span>今日室外温度：<strong>999</strong></span>
        <span>今日室外雾霾指数：<strong>999</strong></span>
        <span>今日室外风速：<strong>999</strong></span>
        <span>今日页面访问量：<strong>999</strong></span>
        <!--      <span>其他：<strong>999</strong></span>-->
      </div>
    </div>
  </div>
</template>

<script>
import energyConsumption from './energyConsumption';
import videoShowOne from './videoShowOne';
import videoShowTwo from './videoShowTwo';
import chartOne from './chartOne';
import oldEnergyConsumption from './oldEnergyConsumption';
import heatMap from './heatMap';
import predEnergyConsumption from './predEnergyConsumption';
import chartTwo from './chartTwo';
import abnormal from './abnormal';
import weekEnvironmental from './weekEnvironmental';
import chartThree from './chartThree';
import chartFour from './chartFour';
export default {
  name: 'integratedScreen',
  components: {
    'energy-consumption': energyConsumption,
    'video-show-one': videoShowOne,
    'video-show-two': videoShowTwo,
    'chart-one': chartOne,
    'old-energy-consumption': oldEnergyConsumption,
    'heat-map': heatMap,
    'pred-energy-consumption': predEnergyConsumption,
    'chart-two': chartTwo,
    'abnormal': abnormal,
    'week-environmental': weekEnvironmental,
    'chart-three': chartThree,
    'chart-four': chartFour
  },
  mounted() {
    this.$store.commit('UPDATEISLOGIN', true);
  },
}
</script>

<style scoped>
.mtt {
  margin-top: 0.12rem;
}

.footer {
  width: 98.8%;
  height: 0.5rem;
  background-color: #0e4498;
  border-radius: 0.04rem;
  margin: 0 auto;
}

.foot {
  width: 60%;
  color: #fff;
  font-size: 0.14rem;
  margin: 0 auto;
  padding-top: 0.15rem;
}

.foot span {
  margin: 0 4.42%;
}

strong {
  font-size: 0.2rem;
}

.area1 {
  width: 98.8%;
  height: 4rem;
  /*background-color: #e6ba01;*/
}

.area2 {
  width: 98.8%;
  height: 4rem;
  /*background-color: #c50e21;*/
}

.area3 {
  width: 98.8%;
  height: 4rem;
  /*background-color: #4ebe80;*/
}
</style>
