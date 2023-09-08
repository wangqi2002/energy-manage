<template>
  <div class="lf area ml mtt">
    <div class="tit">
      <h3>总能耗</h3>
      <p class="label1">开始时间</p>
      <el-input class="time1" type="date" v-model="bgntime"></el-input>
      <p class="label2">结束时间</p>
      <el-input class="time2" type="date" v-model="endtime" ></el-input>
      <el-button class="btn" type="primary" @click="search_handler()">搜索</el-button>
    </div>

    <div class="area-wrap">
      <div class="area-inner">
        <div id="myChartPin" style="width:100%;height:100%;"></div>
      </div>
    </div>


  </div>

</template>

<script>
  import title from '../title';
  export default{
    name:'pin',
    data(){
      return{
        pindata:[],
        bgntime:'',
        endtime:''
      }
    },
    mounted(){
      this.drawPin();
    },
    watch:{
      pindata(newVal, oldVal){
        this.drawPin();
      }
    },
    methods: {
      init(){
        var _self = this;
        $.ajax({
          url:'http://106.13.78.117:9090/pin',  // 后端地址
          type:'post',
          data:{'bgntime': this.bgntime, 'endtime': this.endtime},
          dataType:'json',
          success:function(data){ //后端返回的json数据（此处data为json对象）
            console.log('成功');
            _self.pindata = data;
          },
          error:function () {
            alert('异常')
          }
        })

      },
      search_handler() {
        var _self = this;
        console.log(_self);
        $.ajax({
          url: 'http://127.0.0.1:9090/pin',  // 后端地址
          type: 'post',
          data: {'bgntime': this.bgntime, 'endtime': this.endtime},
          dataType: 'json',
          success: function (data) { //后端返回的json数据（此处data为json对象）
            console.log('成功');
            _self.pindata=data;
            console.log(_self.pindata);
            console.log(_self.pindata[0]["total_power"]);
          },
          error: function () {
            alert('异常')
          }
        });
      },


      drawPin(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChartPin'))
        // 绘制图表
        // 指定图表的配置项和数据
        var  option = {
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'horizontal',
            left: 'center',
            data: ['总电耗','总水耗','总汽耗'],
            textStyle:{ //图例字体颜色
              color:'#fff',
              fontSize: 20
            },
            top:'8%'
          },
          color:['red', 'yellow','blueviolet'],
          series : [
            {
              label:{
                normal:{
                  show:true,
                  position: 'outside',
                  formatter: '{d}%',
                  textStyle:{
                    fontSize:20,
                    fontWeight:'bolder'
                  }
                }

              },
              name: '值(占比)',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              // data: this.pindata,
              data:[
                {value:this.pindata[0]["total_power"], name:'总电耗'},
                {value:this.pindata[0]["total_water"], name:'总水耗'},
                {value:this.pindata[0]["total_gas"], name:'总汽耗'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(197,14,33,0.5)'
                }
              }
            }
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    },
    components:{
      // 'title-h3':title
    }
  }

</script>

<style>
  .area{ height:8rem;width: 45%;}
  .area-wrap{height:7rem;width: 100%; background:#002d6a;border-radius: 4px;padding-top: .09rem}
  .area-inner{width: 8rem;height: 6.8rem;background-color: #173881;border-radius: 4px;margin: 0 auto;}
  .mtt{margin-top:0.12rem;}
  .tit{
    width: 100%;
    height: 0.55rem;
    line-height: 0.4rem;
    background-color: #0e4498;
    font-size: 0.14rem;
    color: #fff;
    border-radius: 0.04rem;
    position: relative;
    margin-bottom: 0.02rem;
  }
  .tit>h3{
    position: absolute;
    font-size: 0.2rem;
    margin-left: 0.15rem;
    top:0.07rem;
    /*font-weight: 400;*/
  }
  .tit>img{
    position: absolute;
    width: 0.2rem;
    position: absolute;
    right:0.15rem;
    top: 0.1rem;
  }
  .tit>.label1{
    font-size: 0.2rem;
    position: absolute;
    top:0.07rem;
    left:1.6rem;
  }
  .tit>.time1{
    position: absolute;
    width: 1.7rem;
    font-size: 0.16rem;
    left:2.5rem;
    top:0.04rem;
    height: 0.42rem;
  }
  .tit>.label2{
    font-size: 0.2rem;
    position: absolute;
    top:0.07rem;
    left:4.5rem;
  }
  .tit>.time2{
    position: absolute;
    width: 1.7rem;
    font-size: 0.16rem;
    left:5.5rem;
    top:0.04rem;
    height: 0.42rem;
  }
  .tit>.btn{
    position: absolute;
    font-size: 0.2rem;
    height: 0.42rem;
    width: 1rem;
    color: white;
    right:0.1rem;
    top:0.04rem;
  }

</style>
