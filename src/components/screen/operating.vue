<template>
  <div class="lf flowChange ml">
    <title-h3 :titlemsg="titlemsg"></title-h3>
    <div class="flowChange-wrap">
      <div class="flowChange-inner">
        <div class="charts">
          <div id="chart_0" style="width:4.51rem;height:3.29rem;margin: 0 auto;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import title from '../title';
export default {
  name: 'flowChange',
  data() {
    return {
      titlemsg: '本月能耗',
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('chart_0'))
      // 绘制图表
      // 指定图表的配置项和数据

      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        color: [
          new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
            { offset: 0, color: 'rgba(10,156,215)' },
            { offset: 1, color: 'rgba(52,223,255)' }
          ])
        ],
        legend: {
          show: false
        },
        grid: {
          left: '0%',
          right: '4%',
          bottom: '10%',
          top: '10%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            show: false, //是否显示
          },
          axisLine: {
            show: false, //是否显示
          },
          axisTick: {
            show: false, //是否显示
          },
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            //坐标轴 标签
            show: true, //是否显示
            color: '#B5B5C5'
          },
          axisLine: {
            //坐标轴 标签
            show: true, //是否显示
            lineStyle: {
              color: '#B5B5C5'
            }
          },
          data: ['electricity', 'water', 'steam']
        },
        series: [
          {
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            barMaxWidth: 40,
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 390, 231]
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
.flowChange {
  height: 3.99rem;
  width: 24.3%;
  margin-left: 20px;
  margin-top: 0px;
}

.flowChange-wrap {
  height: 3.44rem;
  width: 100%;
  background: #002d6a;
  border-radius: 4px;
  padding-top: .09rem
}

.flowChange-inner {
  height: 3.34rem;
  width: 4.46rem;
  margin: 0 auto;
  background-color: #003885;
  border-radius: 4px;
}
</style>
