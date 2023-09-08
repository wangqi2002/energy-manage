<template>
  <div class="content-wrap synergeticOffice mt22 clearfix">
    <div class="clearfix">
      <pin-chart></pin-chart>
      <bar-chart></bar-chart>
    </div>
  </div>
</template>

<script>
import pinChart from './pinChart';
import barChart from './barChart';

export default {
  name: 'coulometricAnalysis',
  components: {
    'pin-chart': pinChart,
    'bar-chart': barChart
  },
  mounted() {
    this.$store.commit('UPDATEISLOGIN', true);
  },
}

</script>

<style></style>
