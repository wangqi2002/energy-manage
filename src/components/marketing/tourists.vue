<template>
  <div class="tourist-lf tourist-marketing ml mtt">
    <div class="tourist-area">
      <title-h3 :titlemsg="titlemsg"></title-h3>
      <div class="tourist-marketing-wrap">
        <div class="tourist-marketing-inner">
          <div id="myChartTourists" style="width:100%;height:100%;margin: 0 auto;"></div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import title from '../title';
  export default{
    name:'tourists',
    data(){
      return{
        titlemsg:'客源地'
      }
    },
    mounted(){
        this.drawLine()
    },
    methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChartTourists'))
        // 指定图表的配置项和数据
       var option = {
            backgroundColor:'#0e3883',
            title: {
              // text: '世界人口总量',
              //  subtext: '数据来自网络'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              data: ['2011年', '2012年']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'value',
              boundaryGap: [0, 0.01],
              axisLabel:{
                color:'#ddd'
              },
              axisLine:{
                lineStyle:{
                  color:'#ddd'
                }
              },

            },
            yAxis: {
              type: 'category',
              data: ['北京','天津','上海','河北','安徽','河南','四川','湖北','湖南','辽宁'],
              axisLine:{
                lineStyle:{
                  color:'#ddd'
                }
              },
              axisLabel:{
                color:'#ddd'
              }
            },
            series: [
              {
                //name: '2011年',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 230230, 830230, 630230, 730230, 530230],
                itemStyle:{
                  normal:{
                    color:'#ce045a'
                  }
                },
              }

            ]
          };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    },
    components:{
      'title-h3':title
    }
  }

</script>

<style>
  .tourist-lf{float:left}
  .tourist-marketing{ height:4.14rem;width: 24%; position:absolute;}
  .tourist-area{margin-top: 3.3rem;}
  .tourist-marketing-wrap{height:3.5rem;width: 100%; background:#002d6a;border-radius: 4px;padding-top: 0.09rem;}
  .tourist-marketing-inner{width: 3.3rem;height: 3rem;background-color: #173881;border-radius: 4px;margin: 0 auto;}
</style>
