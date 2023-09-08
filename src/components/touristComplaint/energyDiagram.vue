<template>
  <div class="emergencyManage mt22 clearfix">
    <unit1-steam></unit1-steam>
  </div>
</template>

<script>
import unit1Steam from "./unit1Steam";

export default {
  name: "energyDiagram",
  data() {
    return {};
  },
  components: {
    "unit1-steam": unit1Steam
  },
   mounted(){
      this.$store.commit('UPDATEISLOGIN',true);
    },
};
</script>

<style>
</style>
