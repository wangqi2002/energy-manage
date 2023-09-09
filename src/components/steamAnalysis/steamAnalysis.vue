<template>
  <div class="emergencyManage mt22 clearfix">
    <line-chart></line-chart>
    <bar-chart></bar-chart>
  </div>
</template>

<script>
import lineChart from "./lineChart";
import barChart from "./barChart";
export default {
  name: 'steamAnalysis',
  data() {
    return {
    }
  },
  components: {
    'line-chart': lineChart,
    'bar-chart': barChart
  },
  mounted() {
    this.$store.commit('UPDATEISLOGIN', true);
  },
}

</script>

<style ></style>
