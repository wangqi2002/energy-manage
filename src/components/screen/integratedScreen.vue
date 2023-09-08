<template>
  <div class="content-wrap synergeticOffice mt22 clearfix">
    <div class="clearfix">
      <div class="area1">
        <today-operating></today-operating>
        <video-show></video-show>
        <chart-one></chart-one>
      </div>
      <div class="area2">
        <!-- todo area2和area3用不同的表图填满 -->
        <flow-change></flow-change>
        <heat-map></heat-map>
        <flow-prediction></flow-prediction>
        <chart-two></chart-two>
      </div>
      <div class="area3">
        <visitor-source></visitor-source>
        <scenic-income></scenic-income>
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
import operating from './operating';
import flowChange from './flowChange';
import heatMap from './heatMap';
import flowPrediction from './flowPrediction';
import visitorSource from './visitorSource';
import scenicIncome from './scenicIncome';
import dutyToday from './dutyToday';
import videoShow from './videoShow';
import chartOne from './chartOne';
import chartTwo from './chartTwo';
import chartThree from './chartThree';
import chartFour from './chartFour';
import ChartThree from './chartThree.vue';
export default {
  name: 'integratedScreen',
  components: {
    'today-operating': operating,
    'flow-change': flowChange,
    'heat-map': heatMap,
    'flow-prediction': flowPrediction,
    'visitor-source': visitorSource,
    'scenic-income': scenicIncome,
    'duty-today': dutyToday,
    'video-show': videoShow,
    'chart-one': chartOne,
    'chart-two': chartTwo,
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
