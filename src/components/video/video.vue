<template>
  <div class="video mt22">
    <!-- <video autoplay="autoplay" name="media" style="width:100%; object-fit: fill;border:1px solid #3b72ee;">
      <source src="../../../static/video/video.mp4" type="video/mp4">
    </video> -->
    <img src="../../../static/video/config.gif" style="width:100%; object-fit: fill;border:1px solid #3b72ee;"/>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.$store.commit('UPDATEISLOGIN', true);
  },
}

</script>

<style scoped>
#iframeV {
  height: 8.59rem
}</style>
