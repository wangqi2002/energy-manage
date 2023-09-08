<template>
  <div class="lf flowPre ml">
    <title-h3 :titlemsg="titlemsg"></title-h3>
    <div class="flowPre-wrap">
      <div class="flowPre-inner">
        <div class="charts">
          <div id="myChart1" style="width:100%; height:100%;margin: 0 auto;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import title from '../title';
export default {
  name: 'predEnergyConsumption',
  data() {
    return {
      titlemsg: '下周能源预测'
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart1'))
      // 绘制图表
      // 指定图表的配置项和数据
      var dataAxis = ['4-19', ' ', '4-20', '', '4-21', '', '4-22', '', '4-23', '', '4-24', '', '4-25', ' ',];
      var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
      var yMax = 500;
      var dataShadow = [];

      for (var i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }

      var option = {
        grid: {
          left: '15%',
          top: '10%',
          bottom: '13%',
          right: '5%'
        },
        title: {
          text: '',
          subtext: ''
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            inside: false,
            interval: 0,
            textStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: ['#475e8f']  //网格线虚线
            }
          },
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          { // For shadow
            type: 'bar',
            itemStyle: {
              normal: { color: 'rgba(0,0,0,0.05)' }
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow,
            animation: false
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#a246e3'
              },
              emphasis: {
                color: '#a246e3'
              }
            },
            data: data
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener('resize', function () {
        myChart.resize();
      });
    }
  },
  components: {
    'title-h3': title
  }
}

</script>

<style scoped>
.flowPre {
  height: 3.99rem;
  width: 24.3%;
}

.flowPre-wrap {
  height: 3.44rem;
  width: 100%;
  background: #002d6a;
  border-radius: 4px;
  padding-top: .09rem
}

.flowPre-inner {
  height: 3.34rem;
  width: 100%;
  margin: 0 auto;
  background-color: #003885;
  border-radius: 4px;
}

.charts {
  height: 100%;
  width: 100%;
}
</style>
