<template>
  <div>
    <div class="lf screen-wrap ml mt12">
      <div class="tits-h3 clearfix">
        <div class="lf">
          <div class="clearfix mlnumber">
            <span class="lf p">From：</span>
            <div class="pr lf">
              <el-input class="time" type="date" v-model="bgntime"></el-input>
            </div>
            <span class="lf mlnewnum p">To：</span>
            <div class="pr lf">
              <el-input class="time" type="date" v-model="endtime"></el-input>
            </div>
            <el-button class="searchs" type="primary" @click="search_handler()">搜索</el-button>
          </div>
        </div>
      </div>

      <div class="area-wrap">
        <div class="area-inner">
          <div id="myChartunit2Steam" style="width:100%;height:100%;"></div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'unit2Steam',
  data() {
    return {
      bgntime: '',
      endtime: '',
      unit2_data: []
    }
  },
  watch: {
    unit2_data(newVal, oldVal) {
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
        url: this.baseURL.serverSrc + 'unit2_steam',  // 后端地址
        type: 'post',
        data: { 'bgntime': this.bgntime, 'endtime': this.endtime },
        dataType: 'json',
        success: function (data) { //后端返回的json数据（此处data为json对象）
          console.log('成功');

          let val = []
          if (data.length) {
            for (let i = 0; i < data.length; i++) {
              data[i]['time'] = _self.dateFormat(data[i]['time'])
              val.push(data[i])
            }
          }

          _self.unit2_data = val;
          console.log(_self.unit2_data);
        },
        error: function () {
          alert('异常')
        }
      });
    },
    dateFormat(date) {
      var date = new Date(date)
      /**
       * 日期+时间: toLocaleString()
       * 日期: toLocaleDateString()
       * 时间: toLocaleTimeString()
       */
      return date.toLocaleString()
    },
    drawBar() {
      let myDataX = [];
      let myDataY1 = [];

      for (let i = 0; i < this.unit2_data.length; i++) {
        myDataX.push(this.unit2_data[i]["time"]);
        myDataY1.push(this.unit2_data[i]["unit2_steam"]);
      }
      let myChart = this.$echarts.init(document.getElementById('myChartunit2Steam'));
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
            type: 'bar',
            name: 'unit2_steam',
            data: myDataY1,
            itemStyle: {
              normal: {
                color: '#008B8B'
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
  width: 48%;
}

.screen-wrap .searchs {
  width: 60px;
  height: 24px;
  line-height: 22px;
  font-size: 14px;
  padding: 0;
  position: absolute;
  right: 15px;
  transform: translateY(-50%);
  top: 50%;
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
  margin-right: 8px;
}

.screen-wrap .mlnumber .time {
  width: 150px;
}

.screen-wrap .input-txt {
  height: 0.3rem;
  width: 1.8rem;
  padding: 0 0.1rem;
  border-radius: 4px;
  background-color: white;
}

.screen-wrap .mlnewnum {
  margin-left: 18px;
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
  width: 45%;
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
  width: 8rem;
  height: 6.8rem;
  background-color: #173881;
  border-radius: 4px;
  margin: 0 auto;
}

.mtt {
  margin-top: 0.12rem;
}
</style>

