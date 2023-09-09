<template>
<div class="emergencyManage mt22 clearfix">
  <prediction></prediction>
</div>
</template>

<script>

import prediction from "./prediction";

export default{
    name:'energyPrediction',
    data(){
        return{

        }
    },
   components:{
        'prediction':prediction,
  },
   mounted(){
      this.$store.commit('UPDATEISLOGIN',true);
    },
}

</script>

<style >

</style>
