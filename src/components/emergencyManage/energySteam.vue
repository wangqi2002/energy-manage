<template>
  <div class="emergencyManage mt22 clearfix">
    <unit1-steam></unit1-steam>
    <unit2-steam></unit2-steam>
  </div>
</template>

<script>
import scenicStatistics from './scenicStatistics'
import eventCategory from './eventCategory'
import eventLevel from './eventLevel'
import planStart from './planStart'
import unit1Steam from "./unit1Steam";
import unit2Steam from "./unit2Steam";
export default {
  name: 'energySteam',
  data() {
    return {

    }
  },
  components: {
    'scenic-statistics': scenicStatistics,
    'event-category': eventCategory,
    'event-level': eventLevel,
    'plan-start': planStart,
    'unit1-steam': unit1Steam,
    'unit2-steam': unit2Steam,
  },
  mounted() {
    this.$store.commit('UPDATEISLOGIN', true);
  },
}

</script>

<style ></style>
