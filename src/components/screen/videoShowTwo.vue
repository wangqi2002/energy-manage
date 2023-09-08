<template>
    <div class="lf videoS ml mtt">
        <title-h3 :titlemsg="titlemsg"></title-h3>
        <div class="videoS-wrap">
            <div class="videoS-inner clearfix">
                <div class="lf video pr">
                    <video autoplay="autoplay" name="media"
                        style="width:100%; height:2.88rem; object-fit: fill;border:1px solid #3b72ee;">
                        <source src="../../../static/video/wit.mp4" type="video/mp4">
                    </video>
                    <p><span>摄像头：B </span><span>位置：层析 </span></p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import title from '../title'
export default {
    name: 'videoShowTwo',
    data() {
        return {
            titlemsg: '视频显示'
        }
    },
    components: {
        'title-h3': title
    }
}

</script>
  
<style scoped>
.videoS {
    height: 3.8rem;
    width: 24.3%;
    margin-top: 0.0rem
}

.videoS-wrap {
    height: 3.44rem;
    width: 100%;
    background: #002d6a;
    border-radius: 4px;
    padding-top: .09rem
}

.videoS-inner {
    height: 3.34rem;
    padding: 0 0.13rem;
    overflow: hidden;
}

.video {
    width: 98%;
}

p {
    font-size: 0.12rem;
    color: #75abff;
    padding-top: 0.1rem;
}

span {
    padding-right: 0.3rem;
}
</style>
  