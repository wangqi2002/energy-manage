
<template>
  <div class="lf water ml">
    <div class="tit">
      <h3>unit1水耗</h3>
      <p class="label1">开始时间</p>
      <el-input class="time1" type="date" v-model="bgntime"></el-input>
      <p class="label2">结束时间</p>
      <el-input class="time2" type="date" v-model="endtime" ></el-input>
      <el-button class="btn" type="primary" @click="search_handler()">搜索</el-button>
    </div>

    <div class="water-marketing-wrap">
      <div class="water-marketing-inner">
        <div id="myChartBar1" style="width:100%;height:100%;"></div>
      </div>
    </div>


  </div>

</template>

<script>

  export default{
    name:'visitorAge',
    data(){
      return{
        bgntime: '',
        endtime:'',
        unit1_data:[]
      }
    },
    watch:{
      unit1_data(newVal, oldVal){
        this.drawBar();
      }
    },
    mounted(){

    },
    methods: {
      search_handler() {
        var _self = this;
        console.log(_self);
        $.ajax({
          url: 'http://106.13.78.117:9090/unit1_water',  // 后端地址
          type: 'post',
          data: {'bgntime': this.bgntime, 'endtime': this.endtime},
          dataType: 'json',
          success: function (data) { //后端返回的json数据（此处data为json对象）
            console.log('成功');
            _self.unit1_data=data;
            console.log(_self.unit1_data);
          },
          error: function () {
            alert('异常')
          }
        });
      },
      drawBar(){
        let myDataX=[];
        let myDataY1=[];

        for (let i=0;i< this.unit1_data.length;i++){
          myDataX.push(this.unit1_data[i]["time"]);
          myDataY1.push(this.unit1_data[i]["unit1_water"]);
        }
        let myChart = this.$echarts.init(document.getElementById('myChartBar1'));
        // 绘制图表
        let option = {
          backgroundColor: '#91917f',
          title: {

          },

          legend:{
          },

          toolbox:{
            show: true,
            feature: {
              magicType: {
                type: ['line', 'bar'],
                show: true
              },
              dataZoom: {
                show: false
              },
              dataView: {
                show: true
              },
              restore: {
                show: false
              },
              saveAsImage: {
                show: true
              }
            }
          },

          tooltip:{
          },

          xAxis: [//定义X轴
            {
              type: 'category',//设置X轴的类型
              name: 'Time',
              axisLabel: {//坐标轴刻度标签的相关设置。
                color: "#000080",//设置颜色
                fontSize: '12',//字体大小
                interval: 0,//设置每个相邻之间少1个数
                rotate: 50,//刻度标签旋转的角度
              },
              axisLine: {
                lineStyle: {
                  color: '#92DCFB'
                }
              },
              data: myDataX,
              grid:{
                left: '10%',
                bottom:'10%'
              }
            }
          ],

          grid:{
            bottom:'20%'
          },

          yAxis:[
            {
              type: 'value',
              name: 'value',
              axisLabel: {//坐标轴刻度标签的相关设置。
                color: "#92DCFB",
                fontSize: '14',
                interval: 0,
              },
              axisLine: {//坐标轴颜色
                lineStyle: {//坐标轴颜色
                  color: "#92DCFB",
                }
              }
            }
          ],


          series: [
            {
              type: 'bar',
              name: 'unit1_water',
              data: myDataY1,
              itemStyle:{
                normal:{
                  color: '#008B8B'
                }
              }
            }
          ]

        };
        myChart.setOption(option);
      }
    },
    components:{

    }
  }

</script>

<style>

  .water{ height:8.28rem;width: 48%;}
  .water-marketing-wrap{height:7rem;width: 100%; background:#002d6a;border-radius: 4px;padding-top: .09rem}
  .water-marketing-inner{width: 8rem;height: 6.8rem;background-color: #173881;border-radius: 4px;margin: 0 auto;}
</style>
