<template>
  <div class="content-wrap synergeticOffice mt22 clearfix">
    <div class="clearfix">
      <line-chart></line-chart>
      <bar-chart></bar-chart>
    </div>
  </div>
</template>

<script>
import lineChart from './lineChart';
import barChart from './barChart';
export default {
  name: 'waterAnalysis',
  components: {
    'line-chart': lineChart,
    'bar-chart': barChart,

  },
  mounted() {
    this.$store.commit('UPDATEISLOGIN', true);
  },
}
</script>

<style >
.marketing {
  height: 4.14rem;
  width: 24.3%;
}

.marketing-wrap {
  height: 3.64rem;
  width: 100%;
  background: #002d6a;
  border-radius: 4px;
  padding-top: .09rem
}

.marketing-inner {
  width: 4.5rem;
  height: 3.54rem;
  background-color: #173881;
  border-radius: 4px;
  margin: 0 auto;
}

.mtt {
  margin-top: 0.12rem;
}
</style>
