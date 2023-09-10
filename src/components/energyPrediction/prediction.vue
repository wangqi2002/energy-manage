<template>
  <div>
    <div class="lf screen-wrap ml mt12">
      <div class="tits-h3 clearfix">
        <div class="lf">
          <div class="clearfix mlnumber">
            <span class="lf p">From：</span>
            <div class="pr lf">
              <input class="input-txt" type="date" v-model="bgntime" />
            </div>
            <span class="lf mlnewnum p">To：</span>
            <div class="pr lf">
              <input class="input-txt" type="date" v-model="endtime" />
            </div>
            <el-button class="searchs" type="primary" @click="search_handler()">搜索</el-button>
          </div>
        </div>
      </div>

      <div class="area-wrap">
        <div class="area-inner">
          <div id="myChartBar" style="width:100%;height:100%;"></div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

export default {
  name: 'prediction',
  data() {
    return {
      bgntime: '',
      endtime: '',
      prediction_data: []
    }
  },
  watch: {
    prediction_data(newVal, oldVal) {
      this.drawBar();
    }
  },
  mounted() {

  },
  methods: {
    search_handler() {
      var _self = this;
      console.log(_self);
      $.ajax({
        url: this.baseURL.serverSrc + 'prediction',  // 后端地址
        type: 'post',
        data: { 'bgntime': this.bgntime, 'endtime': this.endtime },
        dataType: 'json',
        success: function (data) { //后端返回的json数据（此处data为json对象）
          console.log('成功');
          _self.prediction_data = data;

        },
        error: function () {
          alert('异常')
        }
      });
      // this.drawBar();
    },
    drawBar() {
      let myDataX = [];
      let myDataY1 = [];
      let myDataY2 = [];
      let myDataY3 = [];

      for (let i = 0; i < this.prediction_data.length; i++) {
        myDataX.push(this.prediction_data[i]["time"]);
        myDataY1.push(this.prediction_data[i]["total_power"] * 0.98);
        myDataY2.push(this.prediction_data[i]["total_water"] * 0.98);
        myDataY3.push(this.prediction_data[i]["total_gas"] * 0.98);
      }
      let myChart = this.$echarts.init(document.getElementById('myChartBar'));
      // 绘制图表
      let option = {
        backgroundColor: '#91917f',
        title: {

        },

        legend: {
        },

        toolbox: {
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

        tooltip: {
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
            grid: {
              left: '10%',
              bottom: '10%'
            }
          }
        ],

        grid: {
          bottom: '20%'
        },

        yAxis: [
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
            type: 'line',
            name: 'prediction_power',
            data: myDataY1,
            itemStyle: {
              normal: {
                color: '#008B8B'
              }
            }
          },
          {
            type: 'line',
            name: 'prediction_water',
            data: myDataY2,
            itemStyle: {
              normal: {
                color: '#FF0000'
              }
            }
          },
          {
            type: 'line',
            name: 'prediction_gas',
            data: myDataY3,
            itemStyle: {
              normal: {
                color: '#65ff51'
              }
            }
          }
        ]

      };
      myChart.setOption(option);
    }
  },
  components: {

  }
}

</script>
<style scoped>
.screen-wrap .tits-h3 {
  width: 100%;
  height: 45px;
  line-height: 45px;
  background-color: #0e4498;
  font-size: 0.14rem;
  color: #fff;
  border-radius: 0.04rem;
  position: relative;
  margin-bottom: 0.02rem;
}

.screen-wrap {
  height: 7.0rem;
  width: 98%;
}

.screen-wrap .searchs {
  width: 100px;
  height: 0.36rem;
  line-height: 0.36rem;
  font-size: 14px;
  padding: 0;
  position: absolute;
  right: 15px;
  transform: translateY(-50%);
  top: 50%;
}

.time .el-input__inner {
  height: 0.36rem;
  font-size: 16px;
}

.com-sel {
  width: .66rem;
  height: .28rem;
  line-height: .28rem;
  text-align: center;
  border: solid 1px #fff;
  border-radius: 4px;
  margin-top: .06rem
}

.customer-person {
  margin-left: .16rem;
}

.customer-time {
  margin-left: .06rem
}

.screen-wrap .newnotic-inner {
  height: 3.2rem;
  width: 98%;
  margin: 0 auto;
  border: solid 1px #3b72ee;
  border-radius: 4px;
}

.screen-wrap .newnotic-inner ul li {
  height: .62rem;
  border-bottom: solid 1px #1c4aa3;
  margin: 0 .13rem
}

.screen-wrap .newnotic-inner .top-content {
  padding-top: .15rem;
  color: #81b2ff;
}

.screen-wrap .newnotic-inner .top-content h3 {
  font-size: .16rem;
  font-weight: 100
}

.screen-wrap .newnotic-inner ul li .tipnews {
  display: none;
}

.screen-wrap .newnotic-inner ul li:nth-child(1) {
  margin-top: 0.065rem
}

.screen-wrap .newnotic-inner .details {
  color: #81b2ff
}

.screen-wrap .newnotic-inner .details:hover {
  color: #ffd452
}

.screen-wrap .newnotic-inner .bottom-content {
  color: #1463de;
  margin-top: 0.05rem;
  height: .2rem;
  overflow: hidden
}

.screen-wrap .bottom-content p span {
  margin-right: 0.1rem
}

.screen-wrap .mlnumber {
  margin-left: 15px;
}
.screen-wrap .mlnumber .p {
  font-size: 14px;
}

.screen-wrap .input-txt {
  margin-left: .12rem;
  width: 1.54rem;
  padding-left: .08rem;
  height: .28rem;
  border: solid 1px #fff;
  border-radius: 4px;
  margin-top: .04rem;
  background-color: #ffffff;
}

.screen-wrap .mlnewnum {
  margin-left: .4rem
}

.newnotice-wraps {
  height: 6.5rem;
  width: 100%;
  background: #002d6a;
  border-radius: 4px;
  padding-top: .075rem;
  overflow: hidden;
}

.area {
  height: 8rem;
  width: 96%;
  margin-top: 0.12rem;
  margin-left: 0.5rem
}

.area-wrap {
  height: 7rem;
  width: 100%;
  background: #002d6a;
  border-radius: 4px;
  padding-top: .09rem
}

.area-inner {
  width: 16rem;
  height: 6.8rem;
  background-color: #173881;
  border-radius: 4px;
  margin: 0 auto;
}

.mtt {
  margin-top: 0.12rem;
}
</style>

