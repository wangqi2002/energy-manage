<template>
  <div class="emergencyManage mt22 clearfix">
    <sankey-chart></sankey-chart>
  </div>
</template>

<script>
import sankeyChart from "./sankeyChart";

export default {
  name: "energySankeyChart",
  data() {
    return {};
  },
  components: {
    "sankey-chart": sankeyChart
  },
  mounted() {
    this.$store.commit('UPDATEISLOGIN', true);
  },
};
</script>

<style></style>
