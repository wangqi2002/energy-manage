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
          <div id="myChartPin" style="width:100%;height:100%;"></div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'pin',
  data() {
    return {
      pindata: [],
      bgntime: '',
      endtime: ''
    }
  },
  mounted() {
    // this.drawPin();
  },
  watch: {
    pindata(newVal, oldVal) {
      this.drawPin();
    }
  },
  methods: {
    init() {
      var _self = this;
      $.ajax({
        url: 'pin',  // 后端地址
        type: 'post',
        data: { 'bgntime': this.bgntime, 'endtime': this.endtime },
        dataType: 'json',
        success: function (data) { //后端返回的json数据（此处data为json对象）
          console.log('成功');
          _self.pindata = data;
        },
        error: function () {
          alert('异常')
        }
      })

    },
    search_handler() {
      var _self = this;
      console.log(_self);
      $.ajax({
        url: this.baseURL.serverSrc + 'pin',  // 后端地址
        type: 'post',
        data: { 'bgntime': this.bgntime, 'endtime': this.endtime },
        dataType: 'json',
        success: function (data) { //后端返回的json数据（此处data为json对象）
          console.log('成功');
          _self.pindata = data;
          console.log(_self.pindata);
          console.log(_self.pindata[0]["total_power"]);
        },
        error: function () {
          alert('异常')
        }
      });
    },


    drawPin() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChartPin'))
      // 绘制图表
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'horizontal',
          left: 'center',
          data: ['总电耗', '总水耗', '总汽耗'],
          textStyle: { //图例字体颜色
            color: '#fff',
            fontSize: 20
          },
          top: '8%'
        },
        color: ['red', 'yellow', 'blueviolet'],
        series: [
          {
            label: {
              normal: {
                show: true,
                position: 'outside',
                formatter: '{d}%',
                textStyle: {
                  fontSize: 20,
                  fontWeight: 'bolder'
                }
              }

            },
            name: '值(占比)',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            // data: this.pindata,
            data: [
              { value: this.pindata[0]["total_power"], name: '总电耗' },
              { value: this.pindata[0]["total_water"], name: '总水耗' },
              { value: this.pindata[0]["total_gas"], name: '总汽耗' }
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
  components: {
    // 'title-h3':title
  }
}
</script>
<style scoped>
.screen-wrap .tits-h3 {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  background-color: #0e4498;
  font-size: 0.14rem;
  color: #fff;
  border-radius: 0.04rem;
  position: relative;
  margin-bottom: 0.02rem;
}

.screen-wrap {
  height: 7.0rem;
  width: 49%;
}

.screen-wrap .searchs {
  width: 60px;
  height: 20px;
  line-height: 17px;
  font-size: 13px;
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
}

.screen-wrap .input-txt {
  height: 0.3rem;
  width: 1.8rem;
  padding: 0 0.1rem;
  border-radius: 4px;
  background-color: white;
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

