<template>
  <div class="lf scenicIncome ml mtt">
    <title-h3 :titlemsg="titlemsg"></title-h3>
    <div class="scenicIncome-wrap">
      <div class="scenicIncome-inner">
        <div class="charts">
          <div id="myChart2" style="width:4.51rem;height:3.29rem;margin: 0 auto;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import title from '../title';
export default {
  name: 'weekEnvironmental',
  data() {
    return {
      titlemsg: '本周环境数据'
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart2'))
      // 绘制图表
      // 指定图表的配置项和数据
      var option = {
        grid: {
          left: '12%',
          top: '15%',
          bottom: '12%',
          right: '4%'
        },
        xAxis: {
          data: ['9-17', '9-18', '9-19', '9-20', '9-21', '9-22', '9-23'],
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#fff',//左边线的颜色
            }
          },
        },
        yAxis: {
          type: 'value',
          name: '( ℃)',
          nameTextStyle: {
            color: '#fff'
          },
          //            max:1500,//Y轴最大值 不写的话自动调节
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#577cb7',//左边线的颜色
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            //              formatter:'{value}元',  //加 单位
            textStyle: {
              color: '#fff'
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{c} ℃'
            }
          }
        },
        series: [{
          data: [20, 22, 21, 24, 22, 25, 23],
          type: 'line',
          //            label: {
          //                normal: {
          //                    show: true,
          //                    position: 'top',
          //                    formatter: '{c} ℃'
          //                }
          //            }
        }],

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
.scenicIncome {
  height: 3.99rem;
  width: 24.3%;
}

.scenicIncome-wrap {
  height: 3.44rem;
  width: 100%;
  background: #002d6a;
  border-radius: 4px;
  padding-top: .09rem
}

.scenicIncome-inner {
  height: 3.34rem;
  width: 4.46rem;
  margin: 0 auto;
  background-color: #003885;
  border-radius: 4px;
}
</style>
