<template>
  <div class="video mt22">
<!--    <iframe id="iframeV"  src="http://video.citgroup.cn/" frameborder="0" width="100%" ></iframe>-->
    <video autoplay="autoplay" name="media" style="width:100%; object-fit: fill;border:1px solid #3b72ee;"><source src="../../../static/video/siemens.mp4" type="video/mp4"></video>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
     mounted(){
      this.$store.commit('UPDATEISLOGIN',true);
    },
  }

</script>

<style scoped>
  #iframeV{height: 8.59rem}

</style>
