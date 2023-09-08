<template>
  <div class="content-wrap synergeticOffice mt22 clearfix">
    <div class="clearfix">
      <pin></pin>
      <bar></bar>
    </div>
  </div>
</template>

<script>

import pin from './pin';
import bar from './bar';
import multiBar from './multiBar';



export default {
  name: 'energyPower',
  components: {
    'pin': pin,
    'bar': bar,
    'multiBar': multiBar,
  },
  mounted() {
    this.$store.commit('UPDATEISLOGIN', true);
  },
}

</script>

<style></style>
